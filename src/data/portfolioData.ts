import { SkillItem, ExperienceItem, EducationItem, FeaturedProjectConfig, CertificationItem, AwardItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Shaik Umar Basha",
  shortName: "Umar Basha",
  headline: "Aspiring Software Engineer | Backend Developer Intern @ DropXCorp | B.Tech IT '26",
  roleStatus: "Fresher & Entry-Level Software Engineer",
  location: "Hyderabad, Telangana, India",
  openRoles: ["Software Engineer", "Backend Developer", "Python / Django Developer"],
  phone: "+91 9640517558",
  email: "shaikumarbasha19@gmail.com",
  githubUsername: "Basha15",
  githubUrl: "https://github.com/Basha15",
  linkedinUrl: "https://linkedin.com/in/shaik-umar-basha-28b07b320",
  heroSubtitle: "Building reliable backends. Crafting scalable APIs and data-driven systems.",
  heroSummary: "Information Technology undergraduate (May 2026) and Backend Developer Intern at DropXCorp. Experienced in Django, TypeScript REST APIs, PostgreSQL, and Machine Learning workflows. Seeking entry-level Software Engineering and Backend Development roles.",
  careerObjective: "Passionate about building production-ready REST APIs, efficient database architectures, and data pipelines. Looking to contribute as an entry-level Software Engineer, Backend Developer, or Python Engineer.",
  availabilityStatus: "Fresher (2026 Batch) • Open for Full-Time Entry-Level Roles",
  resumePath: "/resume.pdf",
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    organization: "DropXCorp Pvt Ltd",
    designation: "Backend Developer Intern",
    location: "Hyderabad, India",
    period: "Sep 2026 – Present",
    isCurrent: true,
    statusText: "Active Internship",
    description: "Contributing as a backend developer intern on flagship multi-tenant SaaS ERP platforms, building REST APIs, managing database schemas, and setting up automated workflows.",
    technologies: ["TypeScript", "REST APIs", "PostgreSQL", "Prisma", "Next.js", "JWT", "Razorpay", "Vercel"],
    responsibilities: [
      "Engineered backend features for DropXcutz (a multi-tenant salon ERP platform) with TypeScript REST API and PostgreSQL managed through Prisma ORM.",
      "Implemented secure JWT authentication, encrypted payment credential storage, and Razorpay online payment integration.",
      "Developed scheduled email reminders, automated webhooks, and deployment setups for APIs and Vercel-hosted front ends with wildcard and custom salon domains.",
      "Contributed to EduCore (school ERP & student-success platform), developing workflows for attendance, fee management, exam results, assignments, and offline attendance sync across multi-role apps."
    ]
  },
  {
    organization: "Amdox Technologies",
    designation: "Data Analyst Intern",
    location: "Hyderabad, India",
    period: "Oct 2025 – Dec 2025",
    isCurrent: false,
    statusText: "Completed",
    description: "Analyzed structured enterprise datasets, built automated data validation routines in Python, and produced business analytical reports.",
    technologies: ["Python", "Pandas", "NumPy", "SQL", "Data Cleaning", "Agile"],
    responsibilities: [
      "Processed and analyzed structured datasets of 10,000+ records using Python, Pandas, NumPy, and SQL to support business intelligence reporting.",
      "Performed data cleaning, preprocessing, and validation routines to eliminate anomalies and ensure reporting consistency.",
      "Automated repetitive data processing workflows using modular Python scripts, significantly cutting manual processing time.",
      "Collaborated in Agile sprints to ship reusable Python modules and exploratory data visualizations."
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Technology",
    field: "Information Technology",
    institution: "Malla Reddy College of Engineering",
    location: "Hyderabad, Telangana, India",
    graduationDate: "Nov 2022 – May 2026",
    score: "CGPA: 7.9 / 10",
    highlights: [
      "Core coursework: Software Development, Object-Oriented Programming (OOP), Database Management Systems (DBMS), and Software Development Life Cycle (SDLC)",
      "Winner of college-level Internal Smart India Hackathon (SIH 2025)",
      "Team lead for 4-member Django and ML application development projects"
    ]
  },
  {
    degree: "Intermediate (MPC)",
    field: "Mathematics, Physics, and Chemistry",
    institution: "Sri Chaitanya Junior College",
    location: "Hyderabad, India",
    graduationDate: "Jul 2020 – May 2022",
    score: "882 / 1000 (88.2%)",
    highlights: [
      "Strong foundation in analytical mathematics, problem-solving, and computational logic"
    ]
  },
  {
    degree: "Secondary School Certificate (SSC)",
    field: "Class 10th",
    institution: "Sai English High School",
    location: "Hyderabad, India",
    graduationDate: "Jun 2019 – Mar 2020",
    score: "GPA: 9.2 / 10",
    highlights: [
      "Consistent academic performance with distinction in mathematics and science"
    ]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: "Prompt Design in Vertex AI",
    issuer: "Google Cloud Skills Boost",
    badge: "Cloud AI"
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    badge: "Analytics"
  },
  {
    title: "Cyber Security Essentials",
    issuer: "Cisco Networking Academy",
    badge: "Security"
  }
];

export const AWARDS_DATA: AwardItem[] = [
  {
    title: "Winner, Internal Smart India Hackathon (SIH)",
    event: "Smart India Hackathon 2025",
    year: "2025",
    description: "Recognized for architecting and presenting a software innovation challenge solution evaluated on technical depth, feasibility, and clean system design."
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  { name: "Python", category: "Programming", level: "Proficient", iconName: "Terminal", description: "Primary language for backend APIs, data pipelines, automation scripting, and ML models" },
  { name: "JavaScript", category: "Programming", level: "Working Knowledge", iconName: "FileCode", description: "Modern ES6+ frontend interactivity, async calls, DOM handling, and full-stack scripts" },
  { name: "TypeScript", category: "Programming", level: "Working Knowledge", iconName: "FileCode", description: "Type-safe REST API development with Node.js, Next.js, and Prisma ORM at DropXCorp" },
  { name: "Java", category: "Programming", level: "Foundational", iconName: "Coffee", description: "Object-oriented software development and algorithmic problem solving" },
  { name: "C", category: "Programming", level: "Foundational", iconName: "Cpu", description: "Foundational programming logic, memory layout, and systems understanding" },
  { name: "Node.js", category: "Programming", level: "Working Knowledge", iconName: "Server", description: "Backend runtime environment for REST API services and build automation" },

  // Backend & Web
  { name: "Django", category: "Backend & Web", level: "Proficient", iconName: "Server", description: "Production web applications, ORM models, auth, and MVC patterns" },
  { name: "REST APIs", category: "Backend & Web", level: "Proficient", iconName: "Network", description: "API endpoints, request validation, JWT authentication, and JSON contract design" },
  { name: "Next.js", category: "Backend & Web", level: "Working Knowledge", iconName: "Layout", description: "React-based full-stack framework used for ERP dashboards and public salon portals" },
  { name: "HTML5 & CSS3", category: "Backend & Web", level: "Proficient", iconName: "Code2", description: "Semantic markup, modern styling, Flexbox, Grid, and mobile responsiveness" },

  // Databases & ORM
  { name: "SQL", category: "Databases & ORM", level: "Proficient", iconName: "Database", description: "Relational queries, table joins, aggregations, indexing, and data modeling" },
  { name: "PostgreSQL", category: "Databases & ORM", level: "Working Knowledge", iconName: "Database", description: "Production database used with Prisma in the DropXcutz multi-tenant platform" },
  { name: "Prisma ORM", category: "Databases & ORM", level: "Working Knowledge", iconName: "Layers", description: "Type-safe database client, schema migrations, and relational queries" },
  { name: "MySQL", category: "Databases & ORM", level: "Working Knowledge", iconName: "Database", description: "Relational schema design, normalization, and relational integrity" },
  { name: "SQLite", category: "Databases & ORM", level: "Proficient", iconName: "HardDrive", description: "Lightweight database used across Django web applications and testing" },

  // Data & ML
  { name: "Pandas", category: "Data & ML", level: "Proficient", iconName: "Table", description: "Data wrangling, cleaning, validation, and feature preparation on 10,000+ records" },
  { name: "NumPy", category: "Data & ML", level: "Proficient", iconName: "Binary", description: "Vectorized array computation, numerical transforms, and mathematical matrix ops" },
  { name: "Matplotlib", category: "Data & ML", level: "Working Knowledge", iconName: "LineChart", description: "Data distribution plots, trend visualization, and churn analytics charts" },
  { name: "Random Forest & ML", category: "Data & ML", level: "Working Knowledge", iconName: "BrainCircuit", description: "Supervised classification pipelines achieving 89% and 84% accuracy rates" },

  // Tools & Practices
  { name: "Git & GitHub", category: "Tools & Practices", level: "Proficient", iconName: "GitMerge", description: "Version control, branching, PR workflows, and repository management (@Basha15)" },
  { name: "Postman", category: "Tools & Practices", level: "Proficient", iconName: "Waypoints", description: "REST API testing, endpoint payload validation, and request debugging" },
  { name: "VS Code", category: "Tools & Practices", level: "Proficient", iconName: "Boxes", description: "Daily IDE for Python, TypeScript, and full-stack development" },
  { name: "Docker", category: "Tools & Practices", level: "Foundational", iconName: "Boxes", description: "Containerizing applications and building repeatable development environments" },
  { name: "SDLC & OOP", category: "Tools & Practices", level: "Proficient", iconName: "Component", description: "Object-oriented design patterns, modular architecture, and Agile sprint cycles" }
];

export const FEATURED_PROJECTS_CONFIG: FeaturedProjectConfig[] = [
  {
    repoName: "Customer-Churn-Prediction-Through-Usage-Patterns-and-Demographics",
    title: "Customer Churn Prediction Platform",
    tagline: "Full-Stack Django & Machine Learning Application (89% Accuracy)",
    description: "Built the backend and database layer in a 4-member team Django web application. Implemented user authentication, role-based access for 4 user roles, and SQLite database operations. Designed Django models, views, URL routes, and REST API endpoints. Processed 10,000+ records with Pandas and NumPy, visualized results with Matplotlib, and integrated a machine-learning model achieving 89% accuracy.",
    keyFeatures: [
      "Engineered backend & database layer supporting 4 distinct user roles and authentication workflows",
      "Designed REST API endpoints for user data ingestion, model inference requests, and report retrieval",
      "Processed customer-behavior datasets of 10,000+ records with Pandas and NumPy",
      "Integrated machine-learning prediction model achieving verified 89% accuracy with visual dashboards"
    ],
    technologies: ["Python", "Django", "REST APIs", "SQLite", "Pandas", "NumPy", "Matplotlib", "Machine Learning"],
    githubUrl: "https://github.com/Basha15/Customer-Churn-Prediction-Through-Usage-Patterns-and-Demographics",
    liveUrl: undefined,
    featured: true,
    category: "Backend & ML",
    accuracy: "89% Accuracy",
    teamSize: "Team of 4"
  },
  {
    repoName: "Digital-Currency-Management-and-Analysis-Platform",
    title: "Digital Currency Management & Analysis Platform",
    tagline: "Economic Analytics & Random Forest Prediction Engine (84% Accuracy)",
    description: "Developed authentication, session management, and database operations in a 4-member team. Built REST API endpoints and the database layer across 4 user roles. Developed a data-preparation and Random Forest prediction pipeline on 10,000+ records of historical economic data, achieving 84% accuracy with an interactive currency-trend dashboard.",
    keyFeatures: [
      "Built authentication, session management, and relational database operations for multi-role workflows",
      "Engineered Random Forest prediction pipeline processing 10,000+ historical economic data points",
      "Achieved 84% model prediction accuracy with interactive trend visualization dashboards",
      "Implemented clean Django REST API endpoints for real-time querying and data filtering"
    ],
    technologies: ["Python", "Django", "REST APIs", "Random Forest", "SQL", "Pandas", "Data Visualization"],
    githubUrl: "https://github.com/Basha15/Digital-Currency-Management-and-Analysis-Platform",
    liveUrl: undefined,
    featured: true,
    category: "Backend & ML",
    accuracy: "84% Accuracy",
    teamSize: "Team of 4"
  },
  {
    repoName: "DropXcutz-ERP",
    title: "DropXcutz Multi-Tenant SaaS ERP",
    tagline: "Production Salon Management Platform (Internship Project @ DropXCorp)",
    description: "Engineered backend services for a multi-tenant salon ERP with a TypeScript REST API and PostgreSQL database managed through Prisma ORM. Scope covers JWT authentication, scheduled email reminders, automated webhooks, encrypted payment credentials, and Razorpay online payments, alongside Vercel multi-tenant routing.",
    keyFeatures: [
      "Architected TypeScript REST APIs with PostgreSQL database managed via Prisma ORM",
      "Implemented secure JWT auth, encrypted payment credential storage, and Razorpay payment gateways",
      "Designed automated webhook handlers and scheduled email notifications",
      "Supported multi-tenant wildcard domain routing deployed on Vercel"
    ],
    technologies: ["TypeScript", "REST APIs", "PostgreSQL", "Prisma", "Next.js", "JWT", "Razorpay"],
    githubUrl: "https://github.com/Basha15",
    liveUrl: undefined,
    featured: false,
    category: "Web & Tools",
    teamSize: "DropXCorp Team"
  },
  {
    repoName: "Groundwater-Resource-Evaluation-Dashboard",
    title: "Groundwater Resource Evaluation Dashboard",
    tagline: "Urban Hydrological Risk Analysis & Sensor Data Portal",
    description: "A Python and web-based hydrological evaluation system designed to assess urban groundwater sensor data, identify potential depletion risks, and provide analytical charts for municipal planning in Hyderabad.",
    keyFeatures: [
      "Data ingestion layer parsing regional groundwater sensor observations",
      "Calculates risk metrics and depletion thresholds across urban zones",
      "Presents diagnostic reports and trend curves for resource assessment"
    ],
    technologies: ["Python", "HTML5", "Data Analytics", "Hydrological Risk Modeling"],
    githubUrl: "https://github.com/Basha15/Groundwater-Resource-Evaluation-Dashboard",
    liveUrl: undefined,
    featured: false,
    category: "Data & Analytics"
  },
  {
    repoName: "Job_search_Engine",
    title: "AI Job Search Platform",
    tagline: "Automated Job Listing Scraper & Query Engine",
    description: "Automated scraping and search indexing engine built in Python to aggregate, categorize, and filter software developer employment listings with keyword parsers.",
    keyFeatures: [
      "Automated extraction and indexing of job listing metadata across technical domains",
      "Keyword matching algorithms and filtering by stack, location, and role requirements",
      "Clean lightweight interface for querying fresh tech opportunities"
    ],
    technologies: ["Python", "JavaScript", "Web Scraping", "Data Indexing"],
    githubUrl: "https://github.com/Basha15/Job_search_Engine",
    liveUrl: undefined,
    featured: true,
    category: "Web & Tools"
  }
];
