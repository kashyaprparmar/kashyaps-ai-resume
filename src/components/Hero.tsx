
import React from 'react';
import { Github, Linkedin, Youtube, Mail, Phone, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              KP
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Kashyap Parmar
            </h1>
            <div className="text-2xl md:text-3xl text-blue-400 mb-6 font-medium">
              AI Engineer | SLMs, LLMs, SFT, GRPO, ML
            </div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              AI Engineer with 2+ years of experience specializing in SLMs & LLMs with expertise in 
              AI orchestration frameworks, model deployment and end-to-end GPU-based fine-tuning of language models.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="mailto:kashyaprparmar@gmail.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Mail size={20} />
              Contact Me
            </a>
            <a
              href="tel:+919426036146"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Phone size={20} />
              Call Me
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/kashyaprparmar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/kashyaprparmar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://www.youtube.com/@data.decode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Youtube size={28} />
            </a>
            <a
              href="https://medium.com/@kashyaprparmar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FileText size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
