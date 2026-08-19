export const profile = {
  name: "Kashyap Parmar",
  initials: "KP",
  role: "AI/ML Engineer",
  tagline: "Agentic AI · LLMs · Voice AI · AIOps",
  degree: "M.Tech (AI) — IIT Hyderabad",
  summary:
    "AI/ML Engineer and technical advisor with 3+ years building and productionizing LLM-based and voice AI systems across cloud and on-prem GPU environments. I design agentic systems, enterprise AI agents, voice bots and scalable RAG applications with low latency, tight cost control and real MLOps discipline.",
  email: "kashyaprparmar@gmail.com",
  phone: "+91-9426036146",
  location: "India · Remote",
  resumeUrl:
    "https://drive.google.com/file/d/1tA4kAWJM2NBay8lwr1nplKEWCg_em0oC/view?usp=drive_link",
  links: {
    github: "https://github.com/kashyaprparmar",
    linkedin: "https://www.linkedin.com/in/kashyaprparmar/",
    youtube: "https://www.youtube.com/@data.decode",
    medium: "https://medium.com/@kashyaprparmar",
  },
};

export const stats = [
  { value: "3+", label: "Years in production AI" },
  { value: "1000+", label: "Concurrent chat sessions served" },
  { value: "300", label: "Simultaneous voice calls" },
  { value: "100K+", label: "Transcripts evaluated at scale" },
];

export const experience = [
  {
    company: "Voicing AI",
    title: "AI & ML Engineer",
    location: "Bengaluru (Remote)",
    period: "Sept 2025 — Present",
    current: true,
    items: [
      {
        head: "Spanish Voice IVR Bot",
        body: "Production-grade Spanish voice assistant on an end-to-end STT → LLM → TTS pipeline with multi-node conversational workflows. RAG retrieval over 2000+ curated Q&A entries using Qdrant with semantic search, LLM reranking and auth-aware filtering. Server-side guardrails, business-hours routing, live-agent transfer, and post-call sentiment/intent analytics.",
      },
      {
        head: "Agentic Bot-Building Platform",
        body: "Agent-first internal platform where bots are created through natural language instead of dashboards or code. Built the Smart Tool Builder and MCP server integration exposing enterprise APIs as standardized agent tools, with multi-step API orchestration, live-response testing and document-ingestion RAG.",
      },
      {
        head: "Voice Agent Transcript Evaluation",
        body: "Automated LLM-as-Judge QA platform scoring voice conversations across 12+ metrics (script adherence, tone, hallucination, context retention, compliance) with DeepEval. Multi-tenant backend, versioned prompts, resume-on-failure CSV ingestion at 100K+ scale, Grafana monitoring and Kubernetes CI/CD.",
      },
    ],
    tech: ["OpenAI Agents SDK", "LangGraph", "Qdrant", "DeepEval", "Kubernetes", "Grafana"],
  },
  {
    company: "GoBubble AI",
    title: "AI & ML Engineer",
    location: "UK & Dubai (Remote)",
    period: "July 2024 — July 2025",
    items: [
      {
        head: "Agentic Salesbot",
        body: "Multi-agent, voice- and chat-enabled conversational engine for automated sales, serving 1000+ simultaneous chat customers and 300 concurrent calls as multi-tenant SaaS with per-client personas. Tenant-isolated RAG, cost-optimized multi-model LLM routing, context summarization, and Docling-based website/document ETL for AI-ready knowledge bases.",
      },
      {
        head: "Toxicity Detection Pipeline",
        body: "Fine-tuned Llama-3.2 3B (SFT) plus a custom FastText language detector that outperformed Google Translate on transliterated text. Served optimized models via vLLM and Docker with MLflow tracking and Grafana performance monitoring.",
      },
    ],
    tech: ["vLLM", "MLflow", "Docling", "Llama-3.2", "FastText", "Docker"],
  },
  {
    company: "Blend360",
    title: "Data Scientist",
    location: "Hyderabad, IN",
    period: "Oct 2023 — July 2024",
    items: [
      {
        head: "Client AI delivery",
        body: "RAG-enabled insurance recommendation chatbot with LangChain, HuggingFace and Claude-3-Sonnet on AWS Bedrock, shipped with Streamlit UI, Flask REST APIs and EC2 deployment. Also built NLP resume screening with feedback analytics and a RAG browser extension using ChromaDB for in-page contextual answers.",
      },
    ],
    tech: ["LangChain", "AWS Bedrock", "ChromaDB", "Streamlit", "Power BI"],
  },
  {
    company: "JobTwine",
    title: "AI-ML Intern",
    location: "Bangalore (Remote)",
    period: "July 2023 — Sept 2023",
    items: [
      {
        head: "GenAI interviewing platform",
        body: "Python + LangChain platform using the OpenAI API for sentiment and key-moment detection with live, topic-specific question generation — streamlining sessions and reducing interviewer bias.",
      },
    ],
    tech: ["OpenAI API", "LangChain", "Python"],
  },
  {
    company: "Jio Telecommunications",
    title: "SDE Intern",
    location: "Mumbai (Remote)",
    period: "May 2023 — July 2023",
    items: [
      {
        head: "Log operations utility",
        body: "Java utility for automated log-file purging and date-range downloads, deployed into production systems.",
      },
    ],
    tech: ["Java", "JSP"],
  },
];

export const projects = [
  {
    name: "SLM Kit",
    kind: "Open source · Platform",
    period: "2026",
    body: "Full-stack platform for the end-to-end SLM lifecycle — pretraining, fine-tuning, evaluation, quantization and HF publishing — tuned for a single consumer GPU (RTX 4060 8GB). FastAPI backend with a GPU job queue, subprocess-isolated runs and live WebSocket streaming to a React + TypeScript frontend.",
    tech: ["Unsloth LoRA/QLoRA/DoRA", "FastAPI", "WebSockets", "Eval Lab"],
    href: "https://github.com/kashyaprparmar/slm-kit",
  },
  {
    name: "PipeLM Toolkit",
    kind: "Open source · CLI + API",
    period: "2025",
    body: "CLI + FastAPI toolkit for Hugging Face SLMs/LLMs with GPU acceleration, 4/8-bit quantization, Docker support, HF_TOKEN auth, interactive chat, REST endpoints, session history and one-click model switching.",
    tech: ["FastAPI", "Quantization", "Docker", "HuggingFace"],
    href: "https://github.com/kashyaprparmar/PipeLM",
  },
  {
    name: "Multi-Sheet Excel Chat Assistant",
    kind: "Project",
    period: "2024 — 2025",
    body: "Streamlit app for natural-language queries across multi-sheet Excel files using Gemini 2.5 Flash and PandasAI, with an LLM-as-Judge verification layer, quality scoring, conversation memory and intelligent query routing.",
    tech: ["PandasAI", "Gemini 2.5 Flash", "LLM-as-Judge"],
    href: "https://github.com/kashyaprparmar/multi-sheet-excel-chat-app",
  },
  {
    name: "Hindi Transcription API",
    kind: "Open source · Service",
    period: "2025",
    body: "FastAPI service for Hindi audio transcription built on NVIDIA NeMo automatic speech recognition models.",
    tech: ["NVIDIA NeMo", "ASR", "FastAPI"],
    href: "https://github.com/kashyaprparmar/hindi-transcribe-api",
  },
  {
    name: "Adaptive RAG with Web Fallback",
    kind: "Project",
    period: "2024",
    body: "Real-time information extraction pipeline combining Google Search APIs with custom SLM summarizers, NLP preprocessing, content filtering, rate limiting and graceful error handling.",
    tech: ["RAG", "SLM summarizers", "Search APIs"],
  },
];

export const skills = [
  {
    title: "Agentic & GenAI",
    items: [
      "OpenAI Agents SDK",
      "LangGraph",
      "LangChain",
      "LlamaIndex",
      "Google ADK",
      "Tool calling",
      "A2A protocol",
      "Agent-as-a-Tool",
      "Prompt engineering",
    ],
  },
  {
    title: "Voice AI",
    items: ["Pipecat", "LiveKit", "STT / TTS", "Barge-in handling", "Latency budgeting", "Post-call analytics"],
  },
  {
    title: "Modeling & Training",
    items: ["PyTorch", "HF Transformers", "SFT", "GRPO", "LoRA / QLoRA", "Quantization", "CUDA", "SLMs & LLMs"],
  },
  {
    title: "MLOps / LLMOps",
    items: ["MLflow", "Opik", "vLLM", "LiteLLM", "MCP", "Prometheus", "Grafana", "GitHub Actions", "GitLab CI", "Docker"],
  },
  {
    title: "Data & Storage",
    items: ["PostgreSQL / Neon", "MongoDB", "Qdrant", "Pinecone", "ChromaDB", "Milvus", "Azure AI Search", "Blob Storage"],
  },
  {
    title: "Engineering",
    items: ["Python", "FastAPI", "Flask", "Java", "Git", "UNIX", "AWS", "Azure", "React + TypeScript"],
  },
];

export const education = [
  {
    degree: "M.Tech. in Artificial Intelligence & Machine Learning",
    school: "IIT Hyderabad",
    period: "July 2021 — July 2023",
    grade: "CGPA 8.33",
    notes: ["Reliance Foundation Scholar", "2nd rank in Sem 1 (9.0/10.0)", "Teaching Assistant, DBMS I & II"],
  },
  {
    degree: "B.E. in Information Technology",
    school: "Gujarat Technological University",
    period: "July 2017 — July 2021",
    grade: "CGPA 9.4",
    notes: ["Winner, Final Year Project Fair", "Placement Coordinator"],
  },
];

export const achievements = [
  {
    title: "GATE CSE Qualified",
    body: "All India Rank 1922 with 98.11 percentile (2021).",
  },
  {
    title: "Reliance Foundation Scholar",
    body: "Awarded for academic excellence in AI & CSE at IIT Hyderabad (2022).",
  },
  {
    title: "YouTube — data.decode",
    body: "Breaking down Generative AI, ML and Python for practitioners.",
    href: "https://www.youtube.com/@data.decode",
  },
  {
    title: "Writing on Medium",
    body: "Long-form notes on LLM systems, agents and deployment practice.",
    href: "https://medium.com/@kashyaprparmar",
  },
];
