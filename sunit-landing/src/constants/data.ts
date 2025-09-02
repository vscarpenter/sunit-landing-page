import { PersonalInfo, Experience, Education, Certification, Skill, Achievement } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Sunit S. Carpenter",
  title: "Principal Data Scientist & Solutions Architect",
  tagline: "Transforming complex business challenges into actionable insights through advanced analytics and machine learning",
  summary: "Accomplished Principal Data Scientist and Microsoft Solutions Architect with 25+ years of experience delivering data-driven solutions across enterprise software, government, and defense sectors. Proven expertise in machine learning, statistical analysis, and transforming complex business challenges into actionable insights through advanced analytics. Demonstrated success in customer-facing consulting, project delivery, and building scalable data science solutions that drive business impact. Deep Microsoft ecosystem knowledge with extensive SharePoint, Azure, and cloud computing experience.",
  location: "Henderson, Nevada",
  email: "sunitc@microsoft.com",
  phone: "(305) 753-5289",
  linkedIn: "https://www.linkedin.com/in/sunitcarpenter"
};

export const experiences: Experience[] = [
  {
    id: "ms-architect-copilot",
    title: "Architect - Microsoft 365 Copilot",
    company: "Microsoft Corporation",
    location: "Miami, Florida",
    startDate: "July 2024",
    endDate: "Present",
    current: true,
    description: [
      "Provide cutting edge AI solutions for the modern workplace, empowering customers to work smarter and faster with Microsoft 365 & Copilot"
    ],
    technologies: ["Microsoft 365", "Copilot", "Azure AI", "Machine Learning"]
  },
  {
    id: "ms-data-ai-architect",
    title: "Architect - Data and Artificial Intelligence",
    company: "Microsoft Corporation",
    location: "Miami, Florida",
    startDate: "August 2022",
    endDate: "July 2024",
    current: false,
    description: [
      "Provide solution architecture and technical consultation on data science, machine learning, and business intelligence for Microsoft Federal government customers",
      "Assist customers on their digital transformation both in the cloud and into machine learning on the Azure platform"
    ],
    technologies: ["Azure ML", "Data Science", "Business Intelligence", "Federal Solutions"]
  },
  {
    id: "ms-domain-delivery",
    title: "Domain Delivery Architect",
    company: "Microsoft Corporation",
    location: "Ft. Lauderdale, FL",
    startDate: "March 2019",
    endDate: "July 2022",
    current: false,
    description: [
      "Lead data-driven solution delivery for enterprise clients, applying statistical techniques and machine learning models to solve complex business problems",
      "Manage end-to-end project delivery including data analysis, predictive modeling, and statistical reporting for customer-facing initiatives",
      "Analyze large-scale structured and unstructured datasets to identify trends, optimize performance, and drive strategic decision-making",
      "Collaborate with cross-functional teams including product management, engineering, and business stakeholders to translate business requirements into data science solutions",
      "Deliver customer impact through advanced analytics, resulting in measurable improvements in system performance and user experience"
    ],
    technologies: ["Python", "Machine Learning", "Statistical Analysis", "Azure", "Big Data"]
  },
  {
    id: "ms-principal-consultant",
    title: "Principal Consultant",
    company: "Microsoft Corporation",
    location: "Ft. Lauderdale, FL",
    startDate: "January 2012",
    endDate: "February 2019",
    current: false,
    description: [
      "Architected and delivered data-intensive applications for non-profit grant management system serving NYC Comptroller's office",
      "Applied statistical analysis and predictive modeling to optimize alumni collaboration platform for MIT Sloan School of Business",
      "Managed project budgets and timelines while ensuring on-time delivery of complex data science initiatives",
      "Developed advanced analytics solutions that improved decision-making processes for educational institutions"
    ],
    technologies: ["SharePoint", "C#/.NET", "Statistical Analysis", "Data Analytics"]
  },
  {
    id: "dod-principal-consultant",
    title: "Principal Consultant and Data Scientist",
    company: "United States Department of Defense, US Southern Command",
    location: "Miami, Florida",
    startDate: "February 2013",
    endDate: "Present",
    current: true,
    description: [
      "Lead machine learning initiatives leveraging Azure Cognitive Services to automatically classify and sort millions of classified documents",
      "Develop anomaly detection models using advanced statistical techniques to identify unauthorized web server access patterns",
      "Implement automated content analysis using natural language processing and machine learning for metadata tagging systems",
      "Drive data-driven decision making for accountability, contracts management, and identity management applications",
      "Successfully migrated multiple on-premises systems to Microsoft Azure Cloud using data science best practices for optimization"
    ],
    technologies: ["Azure Cognitive Services", "Machine Learning", "Natural Language Processing", "Anomaly Detection"]
  },
  {
    id: "whitehouse-principal",
    title: "Principal Data Scientist and Architect",
    company: "The White House, Washington, DC",
    location: "Washington, DC",
    startDate: "August 2015",
    endDate: "Present",
    current: true,
    description: [
      "Lead data science initiatives for SharePoint records management solutions supporting White House Communications Agency",
      "Optimize Presidential Travel Portal using predictive analytics and statistical modeling for POTUS and VIP travel operations",
      "Develop automated machine learning solutions for records management compliance and schedule change detection",
      "Apply experimental design principles to improve government operational efficiency through data-driven insights"
    ],
    technologies: ["SharePoint", "Predictive Analytics", "Machine Learning", "Government Solutions"]
  }
];

export const education: Education[] = [
  {
    id: "ucb-ms-data-science",
    degree: "Master of Science",
    field: "Data Science and Machine Learning",
    institution: "University of California – UC Berkeley",
    graduationYear: 2022,
    location: "Berkeley, CA"
  },
  {
    id: "marquette-ms-ee",
    degree: "Master of Science",
    field: "Electrical Engineering",
    institution: "Marquette University",
    graduationYear: 1999,
    location: "Milwaukee, Wisconsin"
  },
  {
    id: "marquette-bs-bme",
    degree: "Bachelor of Science",
    field: "Biomedical Engineering",
    institution: "Marquette University",
    graduationYear: 1994,
    location: "Milwaukee, Wisconsin"
  }
];

export const certifications: Certification[] = [
  {
    id: "ts-sci",
    name: "Top Secret with Sensitive Compartmented Information (TS/SCI) Clearance",
    issuer: "US Government",
    year: 2012,
    current: true
  },
  {
    id: "yankee-white",
    name: "White House Clearance – Yankee White",
    issuer: "White House",
    year: 2015,
    current: true
  },
  {
    id: "azure-architect",
    name: "Microsoft Certified Azure Architect",
    issuer: "Microsoft",
    year: 2015,
    current: true
  },
  {
    id: "ms-solutions-developer",
    name: "Microsoft Certified Solutions Developer",
    issuer: "Microsoft",
    year: 2007,
    current: true
  },
  {
    id: "ms-sharepoint-specialist",
    name: "Microsoft Certified Technology Specialist – SharePoint",
    issuer: "Microsoft",
    year: 2007,
    current: true
  }
];

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", category: "programming", level: "expert" },
  { name: "R", category: "programming", level: "expert" },
  { name: "SQL", category: "programming", level: "expert" },
  { name: "C#", category: "programming", level: "advanced" },
  { name: "C/C++", category: "programming", level: "advanced" },
  { name: "PowerShell", category: "programming", level: "advanced" },
  
  // Machine Learning & AI
  { name: "Machine Learning", category: "technical", level: "expert" },
  { name: "Statistical Modeling", category: "technical", level: "expert" },
  { name: "Predictive Analytics", category: "technical", level: "expert" },
  { name: "Natural Language Processing", category: "technical", level: "expert" },
  { name: "Anomaly Detection", category: "technical", level: "expert" },
  { name: "Big Data Processing", category: "technical", level: "advanced" },
  
  // Tools & Frameworks
  { name: "PyTorch", category: "tools", level: "advanced" },
  { name: "TensorFlow", category: "tools", level: "advanced" },
  { name: "Keras", category: "tools", level: "advanced" },
  { name: "Scikit-Learn", category: "tools", level: "expert" },
  { name: "Hadoop", category: "tools", level: "advanced" },
  { name: "Spark", category: "tools", level: "advanced" },
  { name: "Power BI", category: "tools", level: "advanced" },
  { name: "Tableau", category: "tools", level: "advanced" },
  
  // Cloud & Microsoft Technologies
  { name: "Microsoft Azure", category: "cloud", level: "expert" },
  { name: "Azure ML Studio", category: "cloud", level: "expert" },
  { name: "Azure Cognitive Services", category: "cloud", level: "expert" },
  { name: "SharePoint", category: "cloud", level: "expert" },
  { name: "Office 365", category: "cloud", level: "expert" },
  { name: "Azure SQL Database", category: "cloud", level: "advanced" },
  
  // Soft Skills
  { name: "Customer-Facing Consulting", category: "soft", level: "expert" },
  { name: "Project Management", category: "soft", level: "expert" },
  { name: "Solution Architecture", category: "soft", level: "expert" },
  { name: "Stakeholder Communication", category: "soft", level: "expert" }
];

export const achievements: Achievement[] = [
  {
    id: "red-team-detection",
    title: "Built innovative machine learning solution detecting security breaches by Red Team",
    description: "Developed advanced anomaly detection system that successfully identified security vulnerabilities during penetration testing",
    year: 2015,
    organization: "US Southern Command Security Division"
  },
  {
    id: "automated-records",
    title: "Developed award-winning automated records management solution using advanced analytics",
    description: "Created intelligent document classification and management system that significantly improved operational efficiency",
    year: 2015,
    organization: "US Southern Command"
  },
  {
    id: "circle-excellence",
    title: "Microsoft Circle of Excellence Award – Presented by Steve Ballmer, CEO",
    description: "Recognized for outstanding data science contributions and exceptional customer service delivery",
    year: 2007,
    organization: "Microsoft Corporation"
  },
  {
    id: "multiple-ms-awards",
    title: "Multiple Microsoft Awards – Outstanding contributions in customer service and data-driven solution delivery",
    description: "Consistently recognized for excellence in technical delivery and customer satisfaction",
    year: 2023,
    organization: "Microsoft Corporation"
  }
];