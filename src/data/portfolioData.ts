import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Joan Jherizalyn R. Aromin',
  preferredName: 'Joan Aromin',
  monogram: 'JA',
  headline: 'BSIT Graduate | IT Support Specialist | Technical Virtual Assistant | Junior Python Developer',
  location: 'Biñan, Laguna, Philippines',
  availability: 'Open to Remote Worldwide Opportunities',
  email: 'jherizalyn@gmail.com',
  phone: '+63 956 092 1316',
  linkedin: 'https://linkedin.com/in/atearomin',
  linkedinHandle: 'linkedin.com/in/atearomin',
  github: 'https://github.com/jherizalyn',
  githubHandle: 'github.com/jherizalyn',
  portfolioUrl: 'https://jherizalyn.github.io/',
  bioShort: 'A versatile and detail-oriented Information Technology graduate from STI College Carmona (Batch 2026). Experienced in building desktop Python/SQLite software, performing hands-on Windows OS deployment & PC hardware troubleshooting, managing digital documentation, and executing compliant administrative workflows.',
  careerSummary: 'I am a Bachelor of Science in Information Technology graduate from STI College Carmona with a hands-on foundation in system troubleshooting, software development, and executive office coordination. My background encompasses both technical and operational excellence: from building desktop database solutions using Python, Tkinter, and SQLite to executing large-scale Windows OS deployments, hardware maintenance, and digital government portal transactions (e.g., BIR ORUS). Having worked across law firm administration, IT consultancy internship, international hotel customer care, and computer cafe tech support, I bring a proactive, high-agency work ethic suited for remote IT Support, Technical VA, and Junior Python automation positions.',
  stats: [
    { label: 'Degree Batch', value: 'BSIT 2026', subtitle: 'STI College Carmona' },
    { label: 'IT Internship', value: '486 Hours', subtitle: 'Fairbanks Consultancy' },
    { label: 'Core Stack', value: 'Python & SQL', subtitle: 'Tkinter GUI & SQLite' },
    { label: 'Accreditation', value: 'IBM Certified', subtitle: 'SQL & SysAdmin' },
  ],
  pillars: [
    {
      title: 'IT Support & Hardware Troubleshooter',
      description: 'Proven proficiency with Windows OS installation (10/11/7), disk partitioning, OS cloning, device driver configuration, and PC hardware assembly.',
      icon: 'Monitor',
      color: 'emerald',
    },
    {
      title: 'Python & Automation Developer',
      description: 'Architect of the AROMIN HR Mini System desktop application, focusing on structured data models, clean UI layouts, and automated workflows.',
      icon: 'Terminal',
      color: 'amber',
    },
    {
      title: 'Executive & Technical Virtual Assistant',
      description: 'Experienced in legal documentation, client calendar scheduling, spreadsheet modeling (Excel/Sheets), and online compliance filings (BIR ORUS, SSS).',
      icon: 'FileSpreadsheet',
      color: 'sky',
    },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'aromin-hr-system',
    title: 'AROMIN HR Mini System',
    subtitle: 'Desktop Application / System Project',
    description: 'A desktop Human Resources & Leave Tracker desktop application built to eliminate error-prone manual logs. Features dynamic employee CRUD operations, structured profiles, automated ID incrementing, and a complete leave approval/rejection lifecycle.',
    status: 'Completed',
    category: 'Desktop & Python',
    tags: ['Python 3', 'Tkinter GUI', 'SQLite', 'OOP Architecture', 'Data Validation'],
    githubUrl: 'https://github.com/jherizalyn/aromin-hr-mini-system',
    liveUrl: '#demo-hr',
    featured: true,
    demoAvailable: true,
    highlightPoints: [
      'Engineered dynamic CRUD operations for employee records with instant SQLite schema persistence.',
      'Designed automated sequential Employee ID generation algorithm to prevent ID collisions.',
      'Implemented full Leave Approval Workflow: Pending, Approved, and Rejected status state machines.',
      'Built multi-filter search system (by Department, Role, Status, and Name substring query).',
      'Structured using clean Object-Oriented Programming (OOP) class hierarchies for maintainability.'
    ],
    architecture: {
      frontend: 'Python Tkinter GUI with custom styled widget components & modal dialogs',
      backend: 'Python 3 Standard Library with modular OOP service layers',
      database: 'SQLite local database with indexed schemas for employees and leave transactions',
      keyAlgorithms: ['Auto-incrementing formatted ID parser', 'Search regex query pipeline', 'Status state machine validator']
    }
  },
  {
    id: 'painting-services-web',
    title: 'AROMIN Painting Services & Supplies',
    subtitle: 'Web Systems / Commercial Business Portal',
    description: 'A multi-page commercial website designed for a residential and commercial painting contractor and supplies distributor. Features interactive service portfolios, supply product cards, quotation forms, and mobile-friendly responsive navigation.',
    status: 'Completed',
    category: 'Web Systems',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Form Handling'],
    githubUrl: 'https://github.com/jherizalyn/aromin-painting-services',
    liveUrl: 'https://jherizalyn.github.io/aromin-painting-services/',
    featured: true,
    highlightPoints: [
      'Constructed a multi-page responsive web platform optimized for desktop and mobile viewports.',
      'Engineered an interactive paint quantity & quotation calculator with dynamic pricing estimation.',
      'Implemented structured product catalog grid showcasing supplies, safety gear, and finishings.',
      'Designed accessible contact and service booking forms with client-side input validation.'
    ],
    architecture: {
      frontend: 'Semantic HTML5, CSS Grid / Flexbox layout with vanilla JavaScript DOM manipulation',
      backend: 'Client-side script engine with dynamic state calculation',
      keyAlgorithms: ['Area square-footage paint estimation algorithm', 'Dynamic product filter engine']
    }
  },
  {
    id: 'dhey-isp-billing',
    title: 'DHEY: ISP Billing & Subscriber Platform',
    subtitle: 'Full-Stack Capstone / System Design',
    description: 'Co-architected an ISP subscriber management and billing system. Encompasses subscriber onboarding, automated Statement of Account (SOA) generation, an administrative analytics dashboard, and role-based access control.',
    status: 'Completed',
    category: 'Full-Stack',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Billing Engine', 'MERN Stack'],
    githubUrl: 'https://github.com/jherizalyn/dhey-isp-billing-system',
    featured: true,
    highlightPoints: [
      'Co-designed full-stack architecture for high-volume internet subscriber lifecycle management.',
      'Built automated Statement of Account (SOA) generator calculating monthly bandwidth tiers & penalties.',
      'Implemented Role-Based Access Control (RBAC) separating Super Admin, Technician, and Billing Clerk privileges.',
      'Created real-time revenue analytics charts and overdue account tracking tables.'
    ],
    architecture: {
      frontend: 'React SPA with administrative dashboard tables and data visualization',
      backend: 'Express.js RESTful API endpoints handling subscriber queries and transaction batches',
      database: 'MongoDB document collections with indexed subscriber IDs and invoice receipts'
    }
  },
  {
    id: 'account-password-locker',
    title: 'Account Password Locker (APWL)',
    subtitle: 'Security & Local Storage Utility',
    description: 'A Python-based credential metadata tracker and security posture auditor. Employs a strict zero-plaintext architecture, tracking account risk levels, 2FA status, and password rotation schedules.',
    status: 'In Progress',
    category: 'Security & Tools',
    tags: ['Python', 'SQLite', 'Cryptography', 'Security Audit', 'Zero-Plaintext'],
    githubUrl: 'https://github.com/jherizalyn/account-password-locker',
    featured: false,
    highlightPoints: [
      'Zero-plaintext metadata design ensuring passwords are never stored in raw readable format.',
      'Automated password age auditor prompting 90-day rotation alerts for high-security accounts.',
      'Multi-factor authentication (2FA) verification tracker with risk scoring per credential entity.'
    ],
    architecture: {
      frontend: 'Python CLI / Tkinter mini-dashboard',
      backend: 'Python Cryptography module with salted hash verification',
      database: 'Encrypted SQLite local store'
    }
  },
  {
    id: 'remote-job-tracker',
    title: 'Remote Job Application Tracker',
    subtitle: 'Workflow Automation Script',
    description: 'A planned automation tool to record, synchronize, and monitor remote job submissions across Upwork, Freelancer, Fiverr, and Indeed with scheduled follow-up notifications and response analytics.',
    status: 'Concept / Future',
    category: 'Security & Tools',
    tags: ['Python', 'Google Sheets API', 'Workflow Automation', 'Job Analytics'],
    githubUrl: 'https://github.com/jherizalyn/remote-job-tracker',
    featured: false,
    highlightPoints: [
      'Automated synchronization with Google Sheets API to maintain a centralized recruiter pipeline.',
      'Scheduled email reminder triggers for following up with hiring managers after 5 business days.',
      'Interview conversion rate and job application analytics reporting.'
    ],
    architecture: {
      backend: 'Python automation script with Google Sheets v4 API OAuth integration',
      database: 'Cloud-synced Google Sheets database'
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'it-support',
    name: 'IT Support & Systems Administration',
    iconName: 'Server',
    skills: [
      { name: 'Windows 10 / 11 / 7 Deployment', level: 'Expert', highlight: true, description: 'Clean installs, upgrading, unattended scripts, driver configurations' },
      { name: 'PC Hardware Assembly & Diagnostics', level: 'Expert', highlight: true, description: 'Motherboard, RAM, PSU, GPU testing, replacement, and thermal maintenance' },
      { name: 'Hardware Troubleshooting', level: 'Expert', highlight: true, description: 'POST beep diagnostics, boot repair, component stress testing' },
      { name: 'OS Cloning & Disk Partitioning', level: 'Expert', highlight: true, description: 'Drive imaging, GPT/MBR partition tables, disk formatting, backup recovery' },
      { name: 'Device Driver Configuration', level: 'Expert', highlight: false, description: 'Chipset, display, network adapter driver rollbacks and signing' },
      { name: 'Preventive Maintenance', level: 'Expert', highlight: false, description: 'Defrag, registry cleanup, dust clearing, cooling thermal paste repasting' },
      { name: 'Basic Networking & LAN Setup', level: 'Proficient', highlight: false, description: 'Ethernet crimping, router/switch config, IP assignment, subnetting' },
      { name: 'Active Directory & User Policies', level: 'Proficient', highlight: false, description: 'User group creation, permission controls, domain joining' },
    ]
  },
  {
    id: 'programming-db',
    name: 'Programming & Database Architecture',
    iconName: 'Code',
    skills: [
      { name: 'Python 3', level: 'Proficient', highlight: true, description: 'Object-Oriented Programming, automation scripting, data processing' },
      { name: 'Tkinter GUI Framework', level: 'Proficient', highlight: true, description: 'Desktop UI design, event handlers, modal dialogues, custom canvas widgets' },
      { name: 'SQLite & SQL Queries', level: 'Proficient', highlight: true, description: 'Schema normalization, CRUD commands, joins, aggregations, data constraints' },
      { name: 'Relational Database Design', level: 'Proficient', highlight: true, description: 'ERD mapping, foreign keys, primary keys, indexing' },
      { name: 'HTML5 & CSS3', level: 'Proficient', highlight: false, description: 'Semantic structure, Flexbox, CSS Grid, mobile responsive layouts' },
      { name: 'JavaScript Fundamentals', level: 'Familiar', highlight: false, description: 'DOM manipulation, event listeners, client-side validation' },
      { name: 'Java OOP Basics', level: 'Familiar', highlight: false, description: 'Classes, inheritance, polymorphism, standard I/O' },
      { name: 'CRUD Application Architecture', level: 'Proficient', highlight: true, description: 'End-to-end data flow from UI forms to database storage' },
    ]
  },
  {
    id: 'va-admin',
    name: 'Technical VA & Administrative Workflows',
    iconName: 'Briefcase',
    skills: [
      { name: 'MS Excel (Formulas & Data Tables)', level: 'Expert', highlight: true, description: 'VLOOKUP, INDEX/MATCH, data formatting, conditional logic, shortcuts' },
      { name: 'MS Word (Professional Formatting)', level: 'Expert', highlight: true, description: 'Legal briefs, contract formatting, table of authorities, mail merge' },
      { name: 'Google Workspace (Docs, Sheets, Drive)', level: 'Expert', highlight: true, description: 'Cloud document management, shared folder access hierarchies' },
      { name: 'BIR ORUS Online Transactions', level: 'Expert', highlight: true, description: 'Taxpayer registration, online filings, zero-compliance-error rate' },
      { name: 'Government Portals (SSS, PhilHealth, Pag-IBIG)', level: 'Proficient', highlight: false, description: 'Member registration, online payment verification, claims status' },
      { name: 'Executive Calendar & Appointment Scheduling', level: 'Expert', highlight: false, description: 'Time-zone coordination, conflict resolution, meeting invites' },
      { name: 'Confidential Legal Documentation', level: 'Expert', highlight: false, description: 'Filing legal records, contract compliance, NDA protocol adherence' },
      { name: 'Customer Care & Email Support', level: 'Expert', highlight: false, description: 'Professional correspondence, ticketing triage, empathetic tone' },
    ]
  },
  {
    id: 'tools-workflows',
    name: 'Developer Tools & Platforms',
    iconName: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 'Proficient', highlight: true, description: 'Branch management, commit hygiene, pull requests, GitHub Pages' },
      { name: 'Visual Studio Code', level: 'Expert', highlight: false, description: 'Extensions, debugging environment, workspace settings' },
      { name: 'Canva Pro Tools', level: 'Proficient', highlight: false, description: 'Graphic creation, marketing materials, slide presentation decks' },
      { name: 'Command Line / Terminal', level: 'Proficient', highlight: false, description: 'PowerShell, Windows CMD, Bash navigation, script execution' },
      { name: 'Android Studio Basics', level: 'Familiar', highlight: false, description: 'Emulator setup, basic XML UI layouts, project compilation' },
      { name: 'Troubleshooting Methodologies', level: 'Expert', highlight: true, description: 'Root-cause analysis, step-by-step isolation, technical logging' },
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'fairbanks',
    role: 'Information Technology Intern',
    company: 'Fairbanks Business Consultancy Services',
    location: 'Laguna / Remote',
    period: '2026',
    hours: '486 Hours Completed',
    type: 'Internship',
    highlights: [
      'Completed 486 rigorous hours of technical and administrative internship, optimizing digital documentation and client workflow tracking systems.',
      'Assisted corporate and individual clients with critical online government transactions, including BIR ORUS registration and portal submissions with a 100% compliance accuracy record.',
      'Managed digital document repositories and client appointment calendars, eliminating scheduling conflicts across executive consultants.',
      'Streamlined internal spreadsheet tracking models using advanced Excel formulas for daily client operational audits.'
    ],
    tags: ['BIR ORUS', 'Digital Documentation', 'MS Excel', 'Workflow Optimization', 'Client Scheduling']
  },
  {
    id: 'mrreyes-law',
    role: 'Law Firm Secretary',
    company: 'MRREYES & Associates (One Corporate Plaza, Makati City)',
    location: 'Makati City, Philippines',
    period: 'Apr 2018 – Apr 2020',
    type: 'Full-Time',
    highlights: [
      'Drafted, formatted, organized, and archived confidential legal documents, contracts, pleadings, and case files in physical archives and secure cloud storage.',
      'Managed high-volume executive email correspondence, telephone inquiries, calendar appointments, and court personnel communications.',
      'Prepared detailed case status briefs and maintained strict client confidentiality adhering to legal standards.'
    ],
    tags: ['Legal Documentation', 'Confidential Filing', 'Calendar Management', 'Executive Communication', 'MS Word Expert']
  },
  {
    id: 'intelenet',
    role: 'Hotel Representative & Customer Care',
    company: 'Intelenet Global Inc. (McKinley Hill, Taguig City)',
    location: 'Taguig City, Philippines',
    period: '2016 – 2017',
    type: 'Customer Support',
    highlights: [
      'Delivered first-line customer service and reservation support for international clients with high customer satisfaction ratings.',
      'Handled rapid resolution of booking adjustments, cancellation policies, and specialized client requests across digital and voice channels.'
    ],
    tags: ['Customer Support', 'International Client Care', 'Conflict Resolution', 'Phone & Digital Communication']
  },
  {
    id: 'cyber-one',
    role: 'Junior Computer Technician & Attendant',
    company: 'Cyber One Internet Café',
    location: 'Laguna, Philippines',
    period: '2006 – 2007',
    type: 'Technical',
    highlights: [
      'Installed, configured, and maintained Windows operating systems, device drivers, and network peripherals across 20+ desktop workstations.',
      'Performed hands-on PC hardware assembly, disk partitioning, OS cloning, preventive maintenance, and real-time user troubleshooting.'
    ],
    tags: ['PC Hardware Assembly', 'Windows OS Deployment', 'OS Cloning', 'Disk Partitioning', 'Network Peripherals']
  },
  {
    id: 'abacus',
    role: 'Sales Associate / Store Operations',
    company: 'ABACUS Book Corp. / SM Metro Manila Shopping Mecca Corp.',
    location: 'Metro Manila, Philippines',
    period: '2007 – 2008',
    type: 'Operations',
    highlights: [
      'Conducted daily point-of-sale store operations, inventory audits, and customer service inquiries with meticulous financial reconciliation.'
    ],
    tags: ['Inventory Auditing', 'POS Systems', 'Customer Service', 'Store Operations']
  }
];

export const EDUCATIONS: EducationItem[] = [
  {
    id: 'sti-carmona',
    degree: 'Bachelor of Science in Information Technology (BSIT)',
    institution: 'STI College Carmona',
    period: '2022 – 2026',
    location: 'Carmona, Cavite, Philippines',
    description: 'Graduated Batch 2026. Comprehensive academic and laboratory curriculum covering Object-Oriented Programming, Database Management Systems, Systems Administration, Web Systems, Network Fundamentals, and Human-Computer Interaction.',
    highlights: [
      'Capstone Project Co-Architect: DHEY ISP Billing & Subscriber Platform',
      'Desktop Software Project: AROMIN HR Mini System (Python/Tkinter/SQLite)',
      'Coursework: OOP (Java/Python), Relational DB (SQL/MongoDB), Network Topologies, Systems Admin'
    ]
  },
  {
    id: 'ieti',
    degree: 'Information Technology Coursework & Diagnostics',
    institution: 'IETI – International Electronics and Technical Institute',
    period: '2008 – 2009',
    location: 'Alabang, Muntinlupa',
    description: 'Foundational studies in programming logic, hardware diagnostics, circuit basics, and computer system architectures.'
  },
  {
    id: 'alc',
    degree: 'Computer Technician Certificate (Operating Systems)',
    institution: 'Alternative Learning Center (ALC)',
    period: '2005',
    location: 'San Pedro, Laguna',
    description: 'Vocational training in system unit repair, reformatting, hardware troubleshooting, disk partitioning, and Windows operating system setup.'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'ibm-sql',
    title: 'SQL and Relational Databases 101',
    issuer: 'IBM Cognitive Class',
    year: '2026',
    iconName: 'Database',
    details: 'Relational database design, table relationships, SQL queries, inner/outer joins, and schema normalization techniques.',
    verifiedBadge: 'Verified Credential'
  },
  {
    id: 'sysadmin',
    title: 'Systems Administration Certification',
    issuer: 'STI College',
    year: 'June 2023',
    iconName: 'Server',
    details: 'Windows server configuration, Active Directory fundamentals, user group policy management, and domain permissions.',
    verifiedBadge: 'Verified Academic'
  },
  {
    id: 'tefl',
    title: '120-Hour TEFL Certification (High Distinction)',
    issuer: 'International TEFL Accreditation',
    year: 'Certified',
    iconName: 'Globe',
    details: 'Teaching English as a Foreign Language, intercultural business communications, grammar structures, and instruction design.',
    verifiedBadge: 'High Distinction'
  },
  {
    id: 'sap-hana',
    title: 'Introduction to SAP S/4HANA',
    issuer: 'SAP University Alliances',
    year: '2024',
    iconName: 'Layers',
    details: 'Enterprise resource planning (ERP), global supply chain navigation, and SAP core business process architectures.',
    verifiedBadge: 'SAP Alliance'
  },
  {
    id: 'ms-office',
    title: 'Microsoft Office Core Specialist (Word & Excel)',
    issuer: 'Certified Microsoft Expert Standard',
    year: '2019 / Certified',
    iconName: 'FileSpreadsheet',
    details: 'Advanced document formatting, data tables, VLOOKUP/INDEX, spreadsheet mathematical models, and keyboard shortcuts.',
    verifiedBadge: 'Core Specialist'
  },
  {
    id: 'comp-tech',
    title: 'Certified Computer Technician (Windows OS)',
    issuer: 'Alternative Learning Center (ALC)',
    year: 'Certified',
    iconName: 'Cpu',
    details: 'Hands-on hardware assembly, OS reformatting, partitioning, driver installation, and systematic unit troubleshooting.',
    verifiedBadge: 'Technical Trade'
  }
];

export const ATS_RESUME_TEXT = `JOAN JHERIZALYN R. AROMIN
Biñan, Laguna, Philippines • +63 956 092 1316 • jherizalyn@gmail.com
LinkedIn: linkedin.com/in/atearomin • GitHub: github.com/jherizalyn
Portfolio: https://jherizalyn.github.io/

PROFESSIONAL SUMMARY
Bachelor of Science in Information Technology graduate from STI College Carmona (Batch 2026) with academic and practical experience building Python and SQLite desktop applications. Hands-on background in Windows OS deployment, PC hardware assembly and troubleshooting, digital documentation, and online government transactions (BIR ORUS, SSS, PhilHealth). Proven track record across legal administration, IT consultancy internship (486 hours), and customer care. Seeking a remote IT Support, Technical Virtual Assistant, or Junior Python Developer position.

TECHNICAL & PROFESSIONAL SKILLS
• IT Support & Systems: Windows installation & configuration (10/11/7), PC hardware assembly, hardware diagnostics, OS cloning, disk partitioning, formatting, device driver configuration, preventive maintenance, basic networking & LAN, Active Directory basics.
• Programming & Databases: Python 3, Tkinter GUI, SQLite, SQL, Relational Database Design, OOP Architecture, HTML5, CSS3, JavaScript basics, Java basics, Git & GitHub.
• Administrative & Technical VA: Microsoft Excel (VLOOKUP, formulas, data modeling), Microsoft Word (advanced formatting, legal documentation), Google Workspace (Docs, Sheets, Drive), BIR ORUS online registration & transactions, government portal filings (SSS, PhilHealth, Pag-IBIG), calendar management, client scheduling, email & phone support.

TECHNICAL PROJECTS
AROMIN HR Mini System | Python 3, Tkinter, SQLite, OOP
• Engineered a desktop Human Resources and Leave Tracker desktop application to eliminate manual paperwork.
• Developed full CRUD operations for employee records with instant SQLite schema persistence and search filtering.
• Programmed automated sequential Employee ID generation and complete leave request approval/rejection lifecycle.

AROMIN Painting Services & Supplies Portal | HTML5, CSS3, JavaScript
• Designed a responsive commercial website with interactive service portfolios, supply catalogs, and quote estimation forms.

DHEY: ISP Subscriber Management & Billing System | MongoDB, Express.js, React.js, Node.js
• Co-architected a full-stack billing platform supporting subscriber onboarding, automated Statement of Account (SOA) generation, and role-based access control.

PROFESSIONAL EXPERIENCE
Information Technology Intern | Fairbanks Business Consultancy Services (2026, 486 Hours)
• Completed 486 hours supporting digital documentation, spreadsheet tracking models, and online government transactions including BIR ORUS filings with 100% compliance accuracy.
• Coordinated executive calendars and client appointments to prevent scheduling conflicts.

Secretary | MRREYES & Associates, Law Firm (Apr 2018 – Apr 2020)
• Prepared and formatted legal pleadings, contracts, and confidential case files in physical and digital storage.
• Managed executive email correspondence, court personnel communications, and client inquiry triage.

Hotel Representative & Customer Care | Intelenet Global Inc. (2016 – 2017)
• Delivered front-line reservation support and resolved service inquiries for international clients.

Junior Computer Technician | Cyber One Internet Cafe (2006 – 2007)
• Installed Windows OS, drivers, and software across 20+ workstations; assembled PCs, partitioned drives, and cloned operating systems.

EDUCATION
Bachelor of Science in Information Technology (BSIT) | STI College Carmona (2022 – 2026, Batch 2026)
Information Technology Coursework | IETI Alabang (2008 – 2009)
Computer Technician Certificate | Alternative Learning Center (2005)

CERTIFICATIONS
• SQL and Relational Databases 101 – IBM Cognitive Class (2026)
• Systems Administration – STI College (2023)
• 120-Hour TEFL Certification (High Distinction)
• Introduction to SAP S/4HANA – SAP University Alliances (2024)
• Microsoft Office Core Specialist (Word & Excel)
• Certified Computer Technician (Windows OS)`;
