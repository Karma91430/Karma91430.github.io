export type Project = {
  title: string;
  category: 'Process Mining' | 'LLM / Agentic' | 'ML / Forecasting' | 'Fintech' | 'NLP' | 'Computer Vision';
  description: string;
  impact: string;
  tech: string[];
  image?: string;
  href?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Processco',
    category: 'Process Mining',
    description:
      'In-browser process intelligence. Upload an event log CSV, get KPIs, a process flow map, variant analysis and case-level browsing — all client-side, no server round-trip.',
    impact:
      'Lets analysts explore an event log in minutes without IT setup, on-premise data, or a Celonis licence.',
    tech: ['React', 'TypeScript', 'Vite', 'Process Mining'],
    image: '/images/processco.png',
    href: 'https://processco.vercel.app',
    featured: true,
  },
  {
    title: 'INSYTH',
    category: 'Fintech',
    description:
      'Self-hosted financial platform: worldwide stock forecasting, news sentiment, LLM-generated market briefs and real-time tickers. Designed to run 24/7 from a home server.',
    impact:
      'A personal investing cockpit that surfaces what matters across thousands of tickers without a Bloomberg subscription.',
    tech: ['FastAPI', 'Transformers', 'Next.js', 'Docker'],
    image: '/images/insyth_screenshot.png',
    href: 'https://www.predistocks.com',
    featured: true,
  },
  {
    title: 'Complaint Prioritisation LLM',
    category: 'LLM / Agentic',
    description:
      'LLM + business-rules pipeline for ticket triage, fully integrated inside Celonis. Reads the complaint, classifies severity and routes it to the right team.',
    impact:
      'Cut manual triage time and helped Allianz avoid regulatory penalties on response-time SLAs.',
    tech: ['Python', 'FastAPI', 'Celonis', 'LLM'],
  },
  {
    title: 'Insurance Claims Forecasting',
    category: 'ML / Forecasting',
    description:
      'ML model predicting claims activity for resource allocation and team planning across a multi-week horizon.',
    impact:
      'Used by operations to anticipate staffing needs and balance load across teams week to week.',
    tech: ['Scikit-learn', 'FastAPI'],
  },
  {
    title: 'Verbatim Sentiment Analysis',
    category: 'NLP',
    description:
      'NLP on open-text customer feedback to measure sentiment and identify where the claims journey breaks down.',
    impact:
      'Surfaced specific friction points along the claims flow that quantitative KPIs were hiding.',
    tech: ['Transformers', 'SpaCy', 'BERT', 'Streamlit'],
  },
  {
    title: 'Claims Handling Time',
    category: 'ML / Forecasting',
    description:
      'LSTM-based predictive model for total claims processing time and cash-flow estimation, refreshed on a regular schedule.',
    impact:
      'Gave business teams a forward-looking view of processing load and cash needs.',
    tech: ['Deep Learning', 'LSTM', 'Dash'],
  },
  {
    title: 'Complaint Forecasting',
    category: 'ML / Forecasting',
    description:
      'Pipeline predicting customer complaints from historical claims lifecycle features, deployed in production.',
    impact:
      'Lets customer-service teams anticipate complaint volumes and act on at-risk cases earlier.',
    tech: ['Python', 'ML'],
  },
  {
    title: 'OCR Fraud Detection',
    category: 'Computer Vision',
    description:
      'Vision + OCR pipeline to surface fraudulent patterns in scanned claim documents.',
    impact:
      'Reduced manual document-validation time and flagged suspicious cases for review.',
    tech: ['OpenCV', 'Tesseract', 'PyTorch'],
  },
  {
    title: 'Home AI Assistant',
    category: 'LLM / Agentic',
    description:
      'Fully offline personal AI — Ollama, LangGraph, LangFlow — wired into home automation APIs and served from a home server.',
    impact:
      'A private assistant that controls the house and answers questions without sending data to a third party.',
    tech: ['Ollama', 'LangGraph', 'LangFlow'],
  },
];

export const projectCategories: Project['category'][] = [
  'Process Mining',
  'LLM / Agentic',
  'ML / Forecasting',
  'Fintech',
  'NLP',
  'Computer Vision',
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  stack?: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Data Scientist · Tech Lead Process Mining, Data & AI',
    company: 'SILAMIR Group',
    location: 'Paris',
    period: '2025 — present',
    description:
      'Tech Lead for Process Mining, Data and AI inside the Process Intelligence Lab. I design and ship agentic AI and process intelligence systems for clients across insurance, health and industry.',
    stack: ['Python', 'FastAPI', 'LangGraph', 'Dataiku', 'Celonis', 'Docker'],
  },
  {
    role: 'Data Scientist',
    company: 'Allianz France',
    location: 'Paris',
    period: '2023 — 2025',
    description:
      'Two years building ML systems for one of France\'s largest insurers — Process & Task Mining, plus predictive models across the claims lifecycle. Finalist of the Allianz × Celonis international hackathon.',
    stack: ['Python', 'Scikit-learn', 'Transformers', 'Celonis', 'FastAPI', 'Streamlit'],
  },
  {
    role: 'Software Engineer · Apprenticeship',
    company: 'Thales',
    location: 'Limours',
    period: '2021 — 2023',
    description:
      'Two-year apprenticeship inside Thales\' radar systems division. Tracking-data analysis algorithms, batch-validation automation and synthetic-data generation for simulation pipelines.',
    stack: ['C++', 'Python', 'Matlab'],
  },
  {
    role: 'Project Manager',
    company: 'Junior ISEP',
    location: 'Paris',
    period: '2020 — 2021',
    description:
      "One year leading consulting missions inside ISEP's Junior Enterprise — client scoping, team staffing, delivery and follow-up.",
  },
];

export const stack: { area: string; items: string }[] = [
  { area: 'ML & AI', items: 'Scikit-learn, PyTorch, Transformers, LangGraph, Ollama, LSTM, BERT.' },
  { area: 'Data & Process', items: 'Celonis, Dataiku, Process & Task Mining, Spark, SQL.' },
  { area: 'Engineering', items: 'FastAPI, Docker, MCP, Streamlit, Dash, Next.js, python-pptx.' },
  { area: 'Domains', items: 'Insurance, fintech, industrial, health, radar systems.' },
];

export const partners = [
  'Allianz France',
  'Thales',
  'SILAMIR Group',
  'Celonis',
  'Dataiku Advanced Designer',
];

export type BeyondCard = {
  emoji: string;
  title: string;
  tagline: string;
  description: string;
  facts: { key: string; value: string }[];
  image: string;
};

export const beyond: BeyondCard[] = [
  {
    emoji: '🧗',
    title: 'Rock climbing',
    tagline: 'Bouldering · 6b+',
    description:
      'Climbing taught me that every complex problem decomposes into manageable moves. Patience, multiple approaches, calculated risk — the same mindset I bring to debugging a model at 2am.',
    facts: [
      { key: 'Style', value: 'Bouldering' },
      { key: 'Since', value: '1.5 years' },
      { key: 'Top grade', value: '6b+' },
      { key: 'Mental link', value: 'Problem-solving' },
    ],
    image: '/images/climbing.png',
  },
  {
    emoji: '⛩️',
    title: 'Japanese craft',
    tagline: 'Kaizen · wabi-sabi · shokunin',
    description:
      'Operating principles, not slogans: continuous model improvement, finding signal in imperfect data, and craftsman-level attention to the pipelines no one sees.',
    facts: [
      { key: 'Visits', value: '2 times' },
      { key: 'Language', value: 'Beginner → Intermediate' },
      { key: 'Philosophy', value: 'Kaizen' },
      { key: 'Favourites', value: 'Temples · Ramen · Deer' },
    ],
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=800&fit=crop',
  },
];
