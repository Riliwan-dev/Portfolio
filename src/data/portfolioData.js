import devpulseImg from '../assets/devpulse.png';
import pulseImg from '../assets/pulse-analytics.png';
import christosImg from '../assets/christos-foundation.png';
import inkwellImg from '../assets/inkwell-blog.png';

export const portfolioData = {
  hero: {
    name: "Bello Riliwan",
    company: "Personal Development Lab",
    tagline: "The Bridge Between Statistics & Code",
    roles: [
      "Software Engineer | Statistics Undergraduate",
      "MERN Stack Specialist",
      "Former Backend Intern @ NGiT",
      "FUTA Student"
    ]
  },

  about: {
    para1: "I am a Statistics Undergraduate at FUTA and a former Backend Engineering Intern at Naija Girls in Tech (NGiT), dedicated to building data-driven digital solutions. My mission is to act as the bridge between theoretical statistics and scalable software engineering, leveraging the MERN stack to turn raw data into actionable insights.",
    para2: "As a growth-oriented developer, I focus on architecting robust backend systems and crafting interactive frontend experiences that prioritize logical precision and user performance. Recognized as an Exceptional Team Player during my cohort, I am committed to continuous learning, building in public, and professional development.",
    stats: [
      { value: "Est.", label: "2025" },
      { value: "3+", label: "Projects Built" }
    ]
  },

  skills: {
    categories: [
      {
        title: "Core Engineering (MERN)",
        icon: "⚙️",
        items: ["MongoDB", "Express.js", "React.js", "Node.js", "TypeScript", "SASS"]
      },
      {
        title: "Data & Mathematics",
        icon: "📊",
        items: ["Statistical Logic", "Data Analysis", "Data Visualization", "SQL", "Database Design"]
      },
      {
        title: "Tools & DevOps",
        icon: "🛠️",
        items: ["Git / GitHub", "Postman API", "AWS / Vercel", "CI/CD", "Node.js"]
      }
    ]
  },

  experience: [
    {
      title: "Backend Engineering Intern",
      company: "Naija Girls in Tech (NGiT)",
      duration: "Jan 2026 – Aug 2026",
      details: [
        "Collaborating on backend systems to bridge the digital divide through technology.",
        "Engineering robust backend services using Node.js and Express.js.",
        "Mastering modular API design and Postman for rigorous system testing."
      ]
    },
    {
      title: "Independent Software Engineer",
      company: "Personal Development Lab",
      duration: "2024 – Present",
      details: [
        "Applying academic statistical logic to real-world MERN stack software builds.",
        "Engineering scalable Sass architectures and data-driven product solutions.",
        "Developing end-to-end applications to master system design and deployment workflows."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "gigstechsolutions",
      duration: "Aug 2022 – May 2023",
      details: [
        "Built scalable web solutions utilizing PHP, HTML5, and modern CSS frameworks.",
        "Focused on delivering high-quality user interfaces and database integrations for contract projects."
      ]
    }
  ],

  education: [
    {
      institution: "Federal University of Technology Akure (FUTA)",
      degree: "Bachelor of Technology (BTech) in Statistics",
      duration: "Jan 2024 – Oct 2028",
      focus: "Specializing in Data Analysis and Web Development, leveraging academic theory to enhance software architecture."
    }
  ],

  projects: [
    {
      slug: "devpulse",
      title: "DevPulse",
      subtitle: "Collaborative Developer Workspace & Sprint Planner",
      category: "FULL STACK / MERN",
      description: "Full-stack developer productivity workspace featuring sprint velocity tracking, task boards, active project health metrics, and role-based demo accounts.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
      github: "https://github.com/Riliwan-dev",
      live: "https://devpulse-mern-project.vercel.app",
      comingSoon: false,
      featured: true,
      image: devpulseImg
    },
    {
      slug: "pulse-analytics",
      title: "Pulse Analytics",
      subtitle: "SaaS Operations & Metrics Dashboard",
      category: "SAAS DASHBOARD",
      description: "A production-grade MERN dashboard with real JWT auth, role-based access control, and full CRUD data management — visualizing revenue, users, and conversion metrics through live Recharts.",
      tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/Riliwan-dev",
      live: "https://pulse-analytics-sable.vercel.app",
      comingSoon: false,
      featured: true,
      image: pulseImg
    },
    {
      slug: "christos-foundation",
      title: "Christos Foundation",
      subtitle: "Donation & Outreach Platform",
      category: "NONPROFIT WEBSITE",
      description: "A full-stack nonprofit platform with secure Paystack donations, an animated impact-stats counter, and a server-side contact/donation pipeline with automated email notifications.",
      tech: ["React", "Node.js", "Express", "Paystack API", "Nodemailer"],
      github: "https://github.com/Riliwan-dev",
      live: "https://christos-foundation-frontend.onrender.com/",
      comingSoon: false,
      featured: false,
      image: christosImg
    },
    {
      slug: "inkwell-blog",
      title: "Inkwell",
      subtitle: "Long-form Tech & Design Publishing Platform",
      category: "CONTENT PLATFORM",
      description: "Publishing platform for long-form engineering and design writing with category filtering, search capabilities, and author management.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/Riliwan-dev",
      live: "https://inkwell-mern-blog.vercel.app",
      comingSoon: false,
      featured: false,
      image: inkwellImg
    }
  ],

  contact: {
    location: "Lagos State, Nigeria",
    email: "belloriliwan001@gmail.com",
    phone: "+234 703 902 4642",
    linkedin: "https://linkedin.com/in/bello-riliwan"
  },

  social: {
    linkedin: "https://www.linkedin.com/in/riliwanbello",
    tiktok: "https://vm.tiktok.com/ZS9RN1gdQRm38-Zixkh/",
    github: "https://github.com/Riliwan-dev",
    facebook: "https://www.facebook.com/ir.rio.988",
    twitter: "https://x.com/Rioratto",
    instagram: "https://www.instagram.com/riliwanbelloo?igsh=MTJ6eXFhZXVvNGdseg=="
  }
};

export const brandExtensions = {
  githubUser: "Riliwan-dev"
};