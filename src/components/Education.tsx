
import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "M.Tech. in Artificial Intelligence",
      institution: "IIT-Hyderabad",
      period: "July 2021 – July 2023",
      grade: "CGPA: 8.33",
      highlights: ["Reliance Foundation Scholar", "2nd Rank in Sem 1 with 9.0/10.0 CGPA"]
    },
    {
      degree: "B.E. in Information Technology",
      institution: "Gujarat Technological University",
      period: "July 2017 - July 2021",
      grade: "CGPA: 9.4",
      highlights: ["Winner of Final Year Project Fair", "Placement Coordinator"]
    },
    {
      degree: "Class XII",
      institution: "Kendriya Vidyalaya Rajkot (CBSE Board)",
      period: "June 2015 - June 2017",
      grade: "Percentage: 85.6%",
      highlights: []
    },
    {
      degree: "Class X",
      institution: "Kendriya Vidyalaya Rajkot (CBSE Board)",
      period: "June 2013 - May 2017",
      grade: "CGPA: 9.0",
      highlights: []
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-700 transition-colors border border-slate-600"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-lg text-blue-400 mb-2">{edu.institution}</h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={16} />
                      <span className="font-medium">{edu.grade}</span>
                    </div>
                  </div>

                  {edu.highlights.length > 0 && (
                    <div>
                      <h5 className="text-sm font-semibold text-blue-400 mb-2">Highlights</h5>
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Academic Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">GATE Qualified</span>
              </div>
              <p className="text-slate-300">All India Rank (AIR) 1922 in GATE CSE with 98.11 percentile (2021)</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">Teaching Assistant</span>
              </div>
              <p className="text-slate-300">TA for DBMS-I and DBMS-II at IIT Hyderabad (2022)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
