
import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer",
      company: "Product Development, GoBubble AI",
      location: "UK & Dubai (Remote)",
      period: "July 2024 - Present",
      achievements: [
        "Trained custom Llama-3.2 3B reasoning models using SFT and GRPO techniques on GPU",
        "Built a FastText language detector for transliterated text, outperforming Google Translate",
        "Tested and deployed SLMs on vLLM framework",
        "Assembled toxicity and multilingual sports datasets; fine-tuned ModernBERT, GPT-2, Llama 3.2",
        "Developed OpenAI-powered ad-script generator with web RAG using Pinecone Vector DB",
        "Implemented comprehensive LLM data cleaning and labelling methodologies",
        "Optimized LLM response times and costs through strategic caching and prompt engineering"
      ],
      tech: ["MLflow", "DVC", "Apache Airflow", "GitHub CI/CD", "Docker", "AWS", "MongoDB"]
    },
    {
      title: "Data Scientist",
      company: "Client Projects, Blend360",
      location: "Hyderabad",
      period: "October 2023 - July 2024",
      achievements: [
        "Developed RAG-enabled insurance recommendation chatbot using LangChain and Claude-3-Sonnet",
        "Built NLP-based resume screening and feedback system for recruiters using OpenAI API",
        "Developed a RAG-enabled browser extension with ChromaDB for contextual answers",
        "Deployed solutions on AWS EC2 with Streamlit UI"
      ],
      tech: ["LangChain", "HuggingFace", "AWS Bedrock", "Streamlit", "Power BI"]
    },
    {
      title: "AI/ML Intern",
      company: "JobTwine",
      location: "Remote",
      period: "July 2023 - September 2023",
      achievements: [
        "Developed intelligent interviewing platform integrating GenAI for sentiment analysis",
        "Created system for generating tailored interview questions during live sessions",
        "Implemented key moments detection using OpenAI API and few-shot learning"
      ],
      tech: ["OpenAI API", "Python", "LangChain", "Prompt Engineering"]
    },
    {
      title: "Software Development Intern",
      company: "Jio Telecommunications",
      location: "India",
      period: "May 2023 - July 2023",
      achievements: [
        "Developed Java utility for automated log file purging and date-range based downloads",
        "Deployed using JSP for enhanced system reliability and performance in production"
      ],
      tech: ["Java", "JSP", "System Architecture"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800 transition-colors border border-slate-700"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Building size={16} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-slate-300 flex items-start gap-2">
                      <span className="text-blue-400 mt-1.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
