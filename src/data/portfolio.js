/*
  ================================================================
  YOUR PORTFOLIO CONTENT LIVES HERE
  ================================================================
  Edit the values in this file first. The sections read from this data,
  so you do not need to search through the UI components to change copy.

  IMPORTANT: Replace all TODO values, sample links, and claims before publishing.
  Keep only skills, results, and experience that accurately represent you.
*/

export const portfolio = {
  name: 'Nehal Shaikh', // TODO: Confirm the name you want displayed publicly.
  shortName: 'Nehal',
  roleLines: ['AI & Data Science Engineer', 'Full Stack Developer (MERN)'],
  headline: 'Building thoughtful digital products with code, data, and AI.',
  intro:
    'I’m a developer and AI enthusiast who enjoys turning ideas into useful, accessible, and reliable applications.', // TODO: Rewrite this in your own voice.
  location: 'Pune, India', // TODO: Update or remove if you prefer not to share your location.
  email: 'nehalskh03@gmail.com', // TODO: Replace with your professional email.
  resumePath: '/resume.pdf', // Add your PDF to frontend/public/resume.pdf.
  resumePath1:'/Nehal_Shaikh.pdf', //fro Secound Resume.
  avatarPath: 'profile.jpg', // TODO: Add a profile image at frontend/public/profile.jpg and set this to '/profile.jpg'. Leave blank to use initials.
  socials: {
    github: '', // TODO: Paste your actual GitHub profile URL here.
    linkedin: '', // TODO: Paste your actual LinkedIn profile URL here.
    email: 'nehalskh03@gmail.com', // TODO: Replace with your professional email.
  },
  stats: [
    { value: '03+', label: 'Projects built', note: 'TODO: Update this count' },
    { value: '2 months', label: 'Internship experience', note: 'Codec Technologies' },
    { value: '10+', label: 'Technologies', note: 'Across my projects' },
    { value: 'Always', label: 'Learning', note: 'One step at a time' },
  ],
  about: {
    eyebrow: 'A LITTLE ABOUT ME',
    title: 'Curious by nature. Developer by choice.',
    paragraphs: [
      'I’m an Artificial Intelligence and Data Science engineering student interested in building full-stack products and exploring how data and machine learning can solve practical problems.',
      'I enjoy learning by building: from real-time messaging experiences to experiments with protein language models. I value readable code, thoughtful UX, and collaborating with people who are excited to learn.',
    ],
    education: 'BE — Artificial Intelligence & Data Science', // TODO: Confirm your degree wording and graduation year.
    college: 'Dr. D. Y. Patil College of Engineering, Akurdi, Pune',
    graduation: '2026',
    interests: ['Web Development', 'AI / ML', 'Problem Solving'],
  },
  skills: [
    {
      group: 'Frontend',
      items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      group: 'Backend',
      items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
    },
    {
      group: 'Database',
      items: ['MongoDB', 'Mongoose', 'MySQL', 'Oracle SQL'],
    },
    {
      group: 'AI / Data Science',
      items: ['Python', 'Pandas', 'NumPy', 'PyTorch', 'Transformers', 'scikit-learn'],
    },
    {
      group: 'Tools & Workflow',
      items: ['Git', 'GitHub', 'VS Code', 'Postman', 'AWS basics'],
    },
  ],
  projects: [
    { name: 'Protein Sequence Estimation using NLP',
      type: 'AI / NLP · Research Project',
      description:
        'An experiment exploring protein language models to estimate missing amino acids in a sequence using transformer-based approaches.',
      stack: ['Python', 'PyTorch', 'Transformers', 'NLP'],
      accent: 'cyan',
      visual: 'protein',
      demoUrl: '', // TODO: Add a demo if you have one.
      sourceUrl: 'https://github.com/Nehalshaikh8698/Bioinformatics-Project-Protein-Sequence-Estimation-using-NLP.git', // TODO: Add your actual GitHub repository URL.
      status: 'Academic project',
      
    },
    { name: 'ChatAPP',
      type: 'Full Stack · Real-time Messaging',
      description:
        'A MERN chat application with one-to-one messaging, authentication, online status, profile images, and real-time updates using Socket.IO.',
      stack: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
      accent: 'violet',
      visual: 'chat',
      demoUrl: '', // TODO: Add a live demo URL, or leave blank to hide the demo button.
      sourceUrl: 'https://github.com/Nehalshaikh8698/chat-app.git', // TODO: Add your actual GitHub repository URL.
      status: 'Featured project',
    },
    ,
    {
      name: 'Risk Analytics in Banking',
      type: 'Data Science · Machine Learning',
      description:
        'A credit-risk analysis project that explores customer data and uses machine-learning techniques to support loan-risk assessment.',
      stack: ['Python', 'MySQL', 'scikit-learn', 'EDA'],
      accent: 'blue',
      visual: 'analytics',
      demoUrl: '', // TODO: Add a dashboard/demo link if publicly available.
      sourceUrl: '', // TODO: Add your actual GitHub repository URL.
      status: 'Data project',
    },
  ],
  experience: [
    {
      role: 'Data Analytics Intern',
      organization: 'Codec Technologies Pvt. Ltd.',
      period: 'Jan 2025 – Mar 2025',
      location: '', // TODO: Add your internship location or set this to 'Remote'.
      // TODO: Add specific responsibilities, tools, and verified outcomes from this internship.
      bullets: [
        'Worked with datasets to explore patterns and prepare useful analysis.',
        'Practiced data cleaning, analysis, and communicating findings clearly.',
      ],
    },
  ],
  contact: {
    title: 'Have a project or opportunity in mind?',
    description:
      'I’m open to entry-level opportunities, internships, collaborations, and conversations about software development or AI.',
  },
  footerNote: 'Built with a lot of curiosity.',
};
