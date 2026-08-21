import React, { useMemo, useState } from 'react';
import '../components.css';

const buildInitialResponse = () => ({
  satisfaction: '4',
  usefulness: '4',
  recommend: '4',
  feedback: ''
});

const getStatisticSummary = (responses, question) => {
  const values = responses
    .map((entry) => Number(entry[question.key]))
    .filter((value) => !Number.isNaN(value));

  const count = values.length;
  if (count === 0) {
    return {
      count: 0,
      mean: 0,
      median: 0,
      mode: 'N/A',
      positiveShare: '0%',
      distribution: question.scale.map((value) => ({ value, count: 0, percent: 0 })),
      insight: 'Add survey responses or import JSON to generate insights for this question.'
    };
  }

  const sorted = [...values].sort((a, b) => a - b);
  const mean = values.reduce((sum, value) => sum + value, 0) / count;
  const median = count % 2 === 1
    ? sorted[(count - 1) / 2]
    : (sorted[count / 2 - 1] + sorted[count / 2]) / 2;

  const frequency = values.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
  const highestFrequency = Math.max(...Object.values(frequency));
  const modes = Object.keys(frequency)
    .filter((value) => frequency[value] === highestFrequency)
    .sort((a, b) => Number(a) - Number(b));

  const distribution = question.scale.map((value) => {
    const countAtValue = frequency[value] || 0;
    return {
      value,
      count: countAtValue,
      percent: count ? Math.round((countAtValue / count) * 100) : 0
    };
  });

  const positiveThreshold = question.scale[Math.max(0, Math.floor(question.scale.length * 0.66))] || question.scale[0];
  const positiveShare = `${Math.round((values.filter((value) => value >= positiveThreshold).length / count) * 100)}%`;

  const insight = `On "${question.label}", the average response is ${mean.toFixed(1)} out of ${question.scale.at(-1)} and ${positiveShare} of responses are in the top ${question.scale.length - Math.floor(question.scale.length * 0.66)} levels.`;

  return {
    count,
    mean,
    median,
    mode: modes.join(', '),
    positiveShare,
    distribution,
    insight
  };
};

const SurveyEngine = ({ survey }) => {
  const [responses, setResponses] = useState(survey.sampleResponses);
  const [selectedQuestion, setSelectedQuestion] = useState(survey.questions[0]?.key ?? '');
  const [newResponse, setNewResponse] = useState(buildInitialResponse());
  const [rawJson, setRawJson] = useState(JSON.stringify(survey.sampleResponses, null, 2));
  const [jsonError, setJsonError] = useState('');

  const summary = useMemo(
    () => getStatisticSummary(responses, survey.questions.find((question) => question.key === selectedQuestion) || survey.questions[0]),
    [responses, selectedQuestion, survey.questions]
  );

  const handleResponseChange = (field, value) => {
    setNewResponse((current) => ({ ...current, [field]: value }));
  };

  const handleAddResponse = (event) => {
    event.preventDefault();
    const sanitized = {
      satisfaction: Number(newResponse.satisfaction),
      usefulness: Number(newResponse.usefulness),
      recommend: Number(newResponse.recommend),
      feedback: newResponse.feedback.trim()
    };
    setResponses((current) => {
      const updated = [...current, sanitized];
      setRawJson(JSON.stringify(updated, null, 2));
      return updated;
    });
    setNewResponse(buildInitialResponse());
    setJsonError('');
  };

  const handleApplyRawJson = () => {
    try {
      const parsed = JSON.parse(rawJson);
      if (!Array.isArray(parsed)) {
        throw new Error('JSON must be an array of survey response objects.');
      }
      setResponses(parsed);
      setJsonError('JSON loaded successfully.');
    } catch (error) {
      setJsonError('Invalid JSON format. Please provide a valid array of objects.');
    }
  };

  return (
    <section className="glass-card" style={{ display: 'grid', gap: '1.75rem', padding: '2.5rem' }}>
      <div>
        <h2 className="section-title">Survey-to-Insight Engine</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: 760, lineHeight: 1.8, marginTop: '1rem' }}>
          This live page lets you enter survey responses, import JSON, and immediately see key statistics for each question.
          It simulates the core functionality of a survey analytics engine: automatic computation of mean, median, mode, and distribution.
        </p>
      </div>

      <div className="survey-grid">
        <div className="glass-card" style={{ padding: '1.75rem' }}>
          <h3 className="card-title">Question selector</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Choose a survey question to analyze from the sample dataset.
          </p>
          <select
            value={selectedQuestion}
            onChange={(event) => setSelectedQuestion(event.target.value)}
            style={{ width: '100%', padding: '0.95rem 1rem', borderRadius: '10px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.04)', color: '#fff' }}
          >
            {survey.questions.map((question) => (
              <option key={question.key} value={question.key}>
                {question.label}
              </option>
            ))}
          </select>

          <div style={{ marginTop: '1.5rem' }}>
            <div style={{ display: 'grid', gap: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Total responses</span>
                <strong>{summary.count}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Average score</span>
                <strong>{summary.mean.toFixed(1)}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Positive share</span>
                <strong>{summary.positiveShare}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '1.75rem' }}>
          <h3 className="card-title">Insight overview</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            {summary.insight}
          </p>

          <div style={{ display: 'grid', gap: '0.85rem', marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
              <span>Median</span>
              <strong>{summary.median}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
              <span>Mode</span>
              <strong>{summary.mode}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1.75rem' }}>
        <h3 className="card-title">Distribution</h3>
        <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
          {summary.distribution.map((item) => (
            <div key={item.value}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                <span>{item.value}</span>
                <span>{item.count} response{item.count === 1 ? '' : 's'} ({item.percent}%)</span>
              </div>
              <div className="survey-bar">
                <div className="survey-bar-fill" style={{ width: `${item.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="survey-grid" style={{ alignItems: 'start' }}>
        <div className="glass-card" style={{ padding: '1.75rem' }}>
          <h3 className="card-title">Add a survey response</h3>
          <form onSubmit={handleAddResponse} style={{ display: 'grid', gap: '1rem' }}>
            {survey.questions.map((question) => (
              <label key={question.key} style={{ display: 'grid', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                {question.label}
                <select
                  value={newResponse[question.key]}
                  onChange={(event) => handleResponseChange(question.key, event.target.value)}
                  className="form-control"
                >
                  {question.scale.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </label>
            ))}
            <label style={{ display: 'grid', gap: '0.5rem', color: 'var(--text-secondary)' }}>
              Optional feedback
              <textarea
                rows="3"
                value={newResponse.feedback}
                onChange={(event) => handleResponseChange('feedback', event.target.value)}
                className="form-control"
                placeholder="A short comment from the respondent"
              />
            </label>
            <button type="submit" className="btn btn-primary submit-btn">
              Add Response
            </button>
          </form>
        </div>

        <div className="glass-card" style={{ padding: '1.75rem' }}>
          <h3 className="card-title">Raw JSON editor</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Paste a JSON array of survey responses to recalculate the dashboard instantly.
          </p>
          <textarea
            value={rawJson}
            onChange={(event) => setRawJson(event.target.value)}
            className="form-control"
            rows="12"
            style={{ fontFamily: 'monospace', minHeight: '260px', whiteSpace: 'pre-wrap' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', gap: '1rem' }}>
            <button type="button" className="btn btn-outline" onClick={handleApplyRawJson}>
              Apply JSON
            </button>
            <span style={{ color: jsonError.startsWith('Invalid') ? '#fb7185' : '#6ee7b7' }}>
              {jsonError || 'JSON will update the survey engine when applied.'}
            </span>
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1.75rem' }}>
        <h3 className="card-title">Recent survey responses</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          The table below shows the latest survey entries. Use the editor above to import or export data.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table className="survey-response-table" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Response #</th>
                {survey.questions.map((question) => (
                  <th key={question.key}>{question.label}</th>
                ))}
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {responses.slice(-8).map((entry, index) => (
                <tr key={index}>
                  <td>{responses.length - (responses.slice(-8).length - index) + 1}</td>
                  {survey.questions.map((question) => (
                    <td key={question.key}>{entry[question.key]}</td>
                  ))}
                  <td>{entry.feedback || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SurveyEngine;
