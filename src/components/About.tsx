
import React from 'react';
import { Award, BookOpen, Code, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Open Source Contributor",
      description: "Created PipeLM—a CLI+FastAPI toolkit for Hugging Face SLMs/LLMs"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "IIT Hyderabad Graduate",
      description: "M.Tech in AI with expertise in cutting-edge ML technologies"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Content Creator",
      description: "YouTuber sharing knowledge about AI, ML, and Data Science"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Reliance Scholar",
      description: "Reliance Foundation Scholar for academic excellence"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Passionate AI Engineer with expertise in Large Language Models, fine-tuning, 
            and deployment. I specialize in building end-to-end AI solutions and have 
            experience working with cutting-edge technologies at leading companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-700/50 p-6 rounded-xl hover:bg-slate-700 transition-colors group"
            >
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Core Expertise</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">AI/ML Technologies</h4>
              <ul className="text-slate-300 space-y-1">
                <li>• SLMs & LLMs (GPT, BERT, Llama)</li>
                <li>• Fine-tuning (SFT, GRPO)</li>
                <li>• RAG Systems & Vector Databases</li>
                <li>• Model Deployment & Optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Technical Skills</h4>
              <ul className="text-slate-300 space-y-1">
                <li>• Python, CUDA, FastAPI</li>
                <li>• LangChain, LlamaIndex</li>
                <li>• AWS Cloud, Docker, MLOps</li>
                <li>• MongoDB, Vector DBs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
