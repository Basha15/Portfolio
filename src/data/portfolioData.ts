import { SkillItem, ExperienceItem, EducationItem, FeaturedProjectConfig } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Shaik Umar Basha",
  shortName: "Umar Basha",
  headline: "Backend Engineer | Software Developer | Python & Web Technologies",
  location: "Hyderabad, Telangana, India",
  email: "shaikumarbasha19@gmail.com",
  githubUsername: "Basha15",
  githubUrl: "https://github.com/Basha15",
  linkedinUrl: "https://linkedin.com/in/shaik-umar-basha",
  heroSubtitle: "Building reliable software. Creating meaningful digital experiences.",
  heroSummary: "Backend Engineer currently contributing at DropXcorp with a rigorous foundation in Information Technology. Focused on robust REST APIs, high-throughput Python backends, and maintainable software systems.",
  careerObjective: "Seeking full-time roles and high-impact opportunities in Software Development, Backend Development, Python Engineering, and Associate Software Engineering.",
  availabilityStatus: "Open to Software & Backend Engineering Opportunities",
  resumePath: "/resume.pdf",
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    organization: "DropXcorp",
    designation: "Backend Engineer",
    location: "Hyderabad, India",
    period: "Current Engagement",
    isCurrent: true,
    statusText: "Active Role",
    description: "Contributing to backend engineering and software development initiatives, focusing on scalable architecture, clean API contract design, and reliable data flow.",
    technologies: ["Python", "Django", "Django REST Framework", "MySQL", "RESTful APIs", "Git"],
    responsibilities: [
      "Architect and maintain robust backend services and RESTful APIs for production workflows.",
      "Collaborate with engineering teams on database schema design, query optimization, and data consistency.",
      "Implement secure business logic, API validation layers, and modular software design principles.",
      "Participate in code reviews, testing, and backend system debugging to improve uptime and maintainability."
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Technology",
    field: "Information Technology",
    institution: "Malla Reddy College of Engineering",
    location: "Hyderabad, Telangana, India",
    graduationDate: "Graduating May 2026",
    score: "CGPA: 7.9 / 10",
    highlights: [
      "Rigorous core curriculum in Data Structures, Algorithms, Database Management Systems, and Software Engineering",
      "Lead developer on academic and research software development projects",
      "Active participant in technical symposiums and competitive hackathons"
    ]
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  { name: "Python", category: "Programming", level: "Proficient", iconName: "Terminal", description: "Primary language for backend systems, scripting, and data pipelines" },
  { name: "Java", category: "Programming", level: "Working Knowledge", iconName: "Coffee", description: "Object-oriented software development and core algorithmic implementations" },
  { name: "C", category: "Programming", level: "Foundational", iconName: "Cpu", description: "Low-level systems programming, memory management fundamentals" },

  // Backend & Databases
  { name: "Django", category: "Backend & Databases", level: "Proficient", iconName: "Server", description: "Production web applications, ORM models, auth, and MVC patterns" },
  { name: "Django REST Framework", category: "Backend & Databases", level: "Proficient", iconName: "Network", description: "Modular API serialization, viewsets, authentication, and token handlers" },
  { name: "MySQL", category: "Backend & Databases", level: "Working Knowledge", iconName: "Database", description: "Relational database schema design, joins, indexing, and data normalization" },
  { name: "SQLite", category: "Backend & Databases", level: "Proficient", iconName: "HardDrive", description: "Lightweight transactional storage, testing fixtures, and rapid prototyping" },

  // Frontend
  { name: "HTML5", category: "Frontend", level: "Proficient", iconName: "Code2", description: "Semantic markup, web accessibility standards, and SEO layout structure" },
  { name: "CSS3 / SCSS", category: "Frontend", level: "Working Knowledge", iconName: "Palette", description: "Modern responsive layouts, Flexbox, Grid, transitions, and style modularity" },
  { name: "JavaScript (ES6+)", category: "Frontend", level: "Working Knowledge", iconName: "FileCode", description: "DOM manipulation, asynchronous fetch APIs, event loops, and client state" },

  // Data & Libraries
  { name: "Pandas", category: "Data & Libraries", level: "Working Knowledge", iconName: "Table", description: "Data cleaning, feature engineering, aggregation, and tabular data analysis" },
  { name: "NumPy", category: "Data & Libraries", level: "Working Knowledge", iconName: "Binary", description: "Vectorized numerical operations, array transformations, and matrix math" },
  { name: "Matplotlib", category: "Data & Libraries", level: "Working Knowledge", iconName: "LineChart", description: "Exploratory data visualization, trend plots, and statistical charting" },

  // Core Concepts
  { name: "Data Structures & Algorithms", category: "Core Concepts", level: "Working Knowledge", iconName: "Boxes", description: "Time & space complexity, trees, graphs, sorting, and search mechanics" },
  { name: "Object-Oriented Programming", category: "Core Concepts", level: "Proficient", iconName: "Component", description: "Encapsulation, inheritance, polymorphism, abstraction, and SOLID principles" },
  { name: "REST API Development", category: "Core Concepts", level: "Proficient", iconName: "Waypoints", description: "HTTP semantics, status codes, payload contracts, idempotency, and routing" },
  { name: "SDLC & Agile Methodologies", category: "Core Concepts", level: "Working Knowledge", iconName: "GitMerge", description: "Sprint workflows, iterative delivery, code versioning, and continuous improvement" }
];

export const FEATURED_PROJECTS_CONFIG: FeaturedProjectConfig[] = [
  {
    repoName: "Customer-Churn-Prediction-Through-Usage-Patterns-and-Demographics",
    title: "Customer Churn Prediction Engine",
    tagline: "ML-Powered Behavioral Churn Analytics & Web Dashboard (Major Project)",
    description: "End-to-end predictive software solution evaluating customer attrition likelihood based on historical demographic traits, contract durations, and usage metrics. Features predictive pipelines, dataset preprocessing, and an interactive reporting dashboard.",
    keyFeatures: [
      "Predictive model training pipeline with structured feature preprocessing and validation",
      "Interactive data dashboard displaying risk categorizations and demographic insights",
      "Engineered backend handlers in Python with modular reporting templates"
    ],
    technologies: ["Python", "SCSS", "JavaScript", "HTML5", "Pandas", "Scikit-Learn"],
    githubUrl: "https://github.com/Basha15/Customer-Churn-Prediction-Through-Usage-Patterns-and-Demographics",
    liveUrl: undefined,
    featured: true,
    category: "Backend & ML"
  },
  {
    repoName: "Job_search_Engine",
    title: "Job Search Engine & Aggregator",
    tagline: "Automated Job Listing Scraper & Query Engine",
    description: "A Python-powered job search engine designed to discover, aggregate, and filter employment listings across targeted tech sectors with query parsers and structured search criteria.",
    keyFeatures: [
      "Automated extraction and indexing of job listing metadata",
      "Keyword matching algorithms and filtering by tech stack and location",
      "Lightweight frontend interface for running dynamic role queries"
    ],
    technologies: ["Python", "JavaScript", "Web Scraping", "Data Parsing"],
    githubUrl: "https://github.com/Basha15/Job_search_Engine",
    liveUrl: undefined,
    featured: true,
    category: "Web & Tools"
  },
  {
    repoName: "Groundwater-Resource-Evaluation-Dashboard",
    title: "Groundwater Resource Evaluation Platform",
    tagline: "Hydrological Risk Assessment & Geospatial Dashboard",
    description: "Environmental monitoring system evaluating urban groundwater levels to analyze potential depletion risks, contamination hazards, and municipal resource allocation trends.",
    keyFeatures: [
      "Visual assessment metrics for city-wide water levels and risk indicators",
      "Clean Python backend data ingestion layer parsing geospatial sensor datasets",
      "Structured charting and diagnostic views for urban planning analysis"
    ],
    technologies: ["Python", "HTML5", "Data Visualization", "Environmental Analytics"],
    githubUrl: "https://github.com/Basha15/Groundwater-Resource-Evaluation-Dashboard",
    liveUrl: undefined,
    featured: true,
    category: "Data & Analytics"
  },
  {
    repoName: "Digital-Currency-Management-and-Analysis-Platform",
    title: "Digital Currency Management & Analytics",
    tagline: "Cryptocurrency Asset Tracking & Volatility Analysis",
    description: "Financial tracking and portfolio management portal providing real-time pricing telemetry, transaction accounting, and historical trend computation for digital currencies.",
    keyFeatures: [
      "Portfolio transaction ledger and asset balance calculations",
      "Time-series trend analysis and price fluctuation alerts",
      "Clean interface for monitoring multi-currency holdings"
    ],
    technologies: ["Python", "HTML5", "CSS3", "Financial Modeling"],
    githubUrl: "https://github.com/Basha15/Digital-Currency-Management-and-Analysis-Platform",
    liveUrl: undefined,
    featured: false,
    category: "Web & Tools"
  },
  {
    repoName: "Amdox-Internship",
    title: "Data Science & Analytics Case Studies",
    tagline: "Statistical Modeling & Enterprise Data Exploration",
    description: "Comprehensive data science and analytical project repository developed during Amdox training, implementing exploratory data analysis, predictive statistical models, and business intelligence insights.",
    keyFeatures: [
      "Advanced exploratory data analysis (EDA) across multi-dimensional enterprise datasets",
      "Statistical modeling and hypothesis testing with Pandas and NumPy",
      "Publication-grade Matplotlib data visualizations"
    ],
    technologies: ["Jupyter Notebook", "Python", "Pandas", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/Basha15/Amdox-Internship",
    liveUrl: undefined,
    featured: false,
    category: "Data & Analytics"
  }
];
