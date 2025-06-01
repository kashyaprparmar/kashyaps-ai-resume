
import React from 'react';
import { Code, Database, Cloud, Cpu, Brain, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI/ML Technologies",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Python", "SLMs", "LLMs", "NLP", "CUDA", "Machine Learning", "Transformers", "Huggingface"]
    },
    {
      title: "AI Frameworks",
      icon: <Zap className="w-6 h-6" />,
      skills: ["Langchain", "Llama-Index", "Ollama", "AI Agents", "OpenAI API", "FastAPI", "Streamlit"]
    },
    {
      title: "Databases & Storage",
      icon: <Database className="w-6 h-6" />,
      skills: ["Vector DB", "MongoDB", "NoSQL", "SQL", "Firebase", "Pinecone", "ChromaDB"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS Cloud", "Docker", "MLflow", "DVC", "Apache Airflow", "GitHub CI/CD", "UNIX"]
    },
    {
      title: "Programming",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "C", "C++", "Java", "Git", "OOP", "Data Structures", "Algorithms"]
    },
    {
      title: "Analytics & Viz",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Data Science", "Data Analysis", "PowerBI", "MS Excel", "Statistical Analysis", "Jupyter"]
    }
  ];

  const specializations = [
    "Small Language Models (SLMs)",
    "Large Language Models (LLMs)",
    "Supervised Fine-Tuning (SFT)",
    "Group Relative Policy Optimization (GRPO)",
    "Retrieval-Augmented Generation (RAG)",
    "Model Deployment & Optimization",
    "GPU-based Fine-tuning",
    "Vector Databases & Embeddings"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800 transition-colors border border-slate-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600/20 p-2 rounded-lg text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-blue-600/20 hover:text-blue-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">AI/ML Specializations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-4 rounded-lg text-center hover:bg-slate-700 transition-colors"
              >
                <span className="text-slate-300 font-medium">{spec}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Open Source Contribution</h3>
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h4 className="text-xl font-semibold text-blue-400 mb-4">PipeLM</h4>
            <p className="text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Created PipeLM—a comprehensive CLI+FastAPI toolkit for Hugging Face SLMs/LLMs featuring GPU acceleration, 
              4/8-bit quantization, Docker support, HF_TOKEN authentication, interactive chat, REST APIs (health/generate), 
              session history, and one-click model switching, deployment and chatting.
            </p>
            <a
              href="https://github.com/kashyaprparmar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
