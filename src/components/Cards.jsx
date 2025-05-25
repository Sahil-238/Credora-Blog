import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava } from 'react-icons/fa';

const languages = [
  {
    name: 'HTML',
    icon: <FaHtml5 />,
    description: 'Markup language for creating web pages.',
    color: 'bg-orange-500'
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt />,
    description: 'Style sheet language for designing websites.',
    color: 'bg-blue-500'
  },
  {
    name: 'JavaScript',
    icon: <FaJs />,
    description: 'Programming language for web development.',
    color: 'bg-yellow-400'
  },
  {
    name: 'React',
    icon: <FaReact />,
    description: 'JavaScript library for building user interfaces.',
    color: 'bg-cyan-500'
  },
  {
    name: 'Python',
    icon: <FaPython />,
    description: 'High-level programming language for general-purpose coding.',
    color: 'bg-green-600'
  },
  {
    name: 'Java',
    icon: <FaJava />,
    description: 'Popular general-purpose programming language.',
    color: 'bg-red-600'
  }
];

const Cards = () => {
  return (
    <div className="min-h-screen px-4 sm:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
          Programming Languages
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Explore the technologies that power modern web development
        </p>
      </div>

      {/* Cards Grid - 2 Columns */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl duration-500 hover:scale-[1.02] hover:-translate-y-2"
            style={{
              animationDelay: `${index * 0.1}s`,
              animation: 'fadeInUp 0.6s ease-out forwards'
            }}
          >
            {/* Solid Background that fades on hover */}
            <div className={`absolute inset-0 ${lang.color} opacity-100 group-hover:opacity-80 transition-opacity duration-300`}></div>

            {/* Optional Glow on hover */}
            <div className={`absolute -inset-1 ${lang.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

            {/* Card Content */}
            <div className="relative p-8 h-[160px] flex flex-col justify-center items-center text-center">
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300 text-white">
                {lang.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                {lang.name}
              </h3>
              <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">
                {lang.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Cards;
