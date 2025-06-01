
import React from 'react';
import { Trophy, Youtube, Award, Users, BookOpen, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Youtube className="w-8 h-8" />,
      title: "YouTube Content Creator",
      description: "YouTube Channel for informing about recent trends in Generative AI, ML, Data Science and Python Programming",
      category: "Content Creation",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Reliance Foundation Scholar",
      description: "Reliance Foundation Scholarship for PG students for academic excellence in AI & CSE (2022)",
      category: "Scholarship",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "2nd Rank with 9.0/10.0 CGPA in M.Tech. Sem 1 at IIT Hyderabad (2021)",
      category: "Academic",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "GATE Qualified",
      description: "All India Rank (AIR) 1922, Qualified Graduate Aptitude Test in Engineering (GATE) CSE with 98.11 percentile (2021)",
      category: "Competitive Exam",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Project Competition Winner",
      description: "Winner of Final Year Project Fair during B.E. (2021)",
      category: "Competition",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership Role",
      description: "Teaching Assistant for DBMS-I and DBMS-II at IIT Hyderabad, assessing students' academic performance (2022)",
      category: "Leadership",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const responsibilities = [
    {
      title: "Data Science Student Intern",
      organization: "Exposys Data Labs, Bengaluru",
      year: "2020"
    },
    {
      title: "Placement Coordinator",
      organization: "B.E. College",
      year: "2020"
    },
    {
      title: "Publicity Team Core Member",
      organization: "IEEE Entrepreneurship Event, B.E. College",
      year: "2018"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Achievements & Recognition</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 border border-slate-600 group"
            >
              <div className="flex items-start gap-4">
                <div className={`bg-gradient-to-r ${achievement.color} p-3 rounded-lg text-white group-hover:scale-110 transition-transform`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                    <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs">
                      {achievement.category}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Positions of Responsibility</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {responsibilities.map((role, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl text-center hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center justify-center mb-3">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{role.title}</h4>
                <p className="text-slate-300 text-sm mb-2">{role.organization}</p>
                <span className="text-blue-400 font-medium text-sm">{role.year}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Content Creation Impact</h3>
            <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Through my YouTube channel "Data Decode", I share knowledge about recent trends in Generative AI, 
              Machine Learning, Data Science, and Python Programming, helping fellow developers and students 
              stay updated with the latest technological advancements.
            </p>
            <a
              href="https://www.youtube.com/@data.decode"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              Visit YouTube Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
