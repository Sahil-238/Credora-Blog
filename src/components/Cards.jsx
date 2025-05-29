import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava } from 'react-icons/fa';
import { FiUsers, FiTrendingUp, FiAward, FiGlobe } from 'react-icons/fi';

const languages = [
  {
    name: 'HTML',
    icon: <FaHtml5 className="w-12 h-12" />,
    description: 'Markup language for creating web pages.',
    color: 'from-orange-400 to-orange-600',
    users: '94% of websites',
    ranking: '#1 in Web Technologies',
    jobs: '125K+ jobs',
    learning: 'Beginner Friendly',
    features: ['Semantic Elements', 'Forms & Validation', 'Multimedia Support']
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt className="w-12 h-12" />,
    description: 'Style sheet language for designing websites.',
    color: 'from-blue-400 to-blue-600',
    users: '96% of websites',
    ranking: '#1 in Styling',
    jobs: '115K+ jobs',
    learning: 'Beginner Friendly',
    features: ['Flexbox', 'Grid Layout', 'Animations']
  },
  {
    name: 'JavaScript',
    icon: <FaJs className="w-12 h-12" />,
    description: 'Programming language for web development.',
    color: 'from-yellow-400 to-yellow-600',
    users: '98% of websites',
    ranking: '#1 in Web Development',
    jobs: '250K+ jobs',
    learning: 'Intermediate',
    features: ['DOM Manipulation', 'Async Programming', 'ES6+ Features']
  },
  {
    name: 'React',
    icon: <FaReact className="w-12 h-12" />,
    description: 'JavaScript library for building user interfaces.',
    color: 'from-cyan-400 to-cyan-600',
    users: '40% of websites',
    ranking: '#1 in Frontend',
    jobs: '180K+ jobs',
    learning: 'Intermediate',
    features: ['Component-Based', 'Virtual DOM', 'React Hooks']
  },
  {
    name: 'Python',
    icon: <FaPython className="w-12 h-12" />,
    description: 'High-level programming language for general-purpose coding.',
    color: 'from-green-400 to-green-600',
    users: '8.2M+ developers',
    ranking: '#1 in Data Science',
    jobs: '200K+ jobs',
    learning: 'Beginner Friendly',
    features: ['AI & ML', 'Data Analysis', 'Web Development']
  },
  {
    name: 'Java',
    icon: <FaJava className="w-12 h-12" />,
    description: 'Popular general-purpose programming language.',
    color: 'from-red-400 to-red-600',
    users: '9M+ developers',
    ranking: '#1 in Enterprise',
    jobs: '220K+ jobs',
    learning: 'Intermediate',
    features: ['Enterprise Apps', 'Android Dev', 'Spring Framework']
  }
];

const Cards = () => {
  return (
    <div className="min-h-screen px-4 sm:px-8 py-16 bg-gray-50 relative">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Popular Programming Languages
        </h1>
        <p className="text-gray-600 text-xl max-w-3xl mx-auto">
          Master the most in-demand programming languages and boost your career opportunities
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
            style={{
              animationDelay: `${index * 0.1}s`,
              animation: 'fadeInUp 0.6s ease-out forwards'
            }}
          >
            {/* Card Header */}
            <div className={`p-8 bg-gradient-to-r ${lang.color} relative overflow-hidden`}>
              <div className="absolute top-0 right-0 mt-4 mr-4">
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {lang.learning}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                  {lang.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {lang.name}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {lang.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <FiUsers className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-gray-600">{lang.users}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiTrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">{lang.ranking}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiAward className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm text-gray-600">{lang.jobs}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiGlobe className="w-5 h-5 text-purple-500" />
                  <span className="text-sm text-gray-600">{lang.learning}</span>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {lang.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${lang.color} mr-2`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button className={`w-full py-3 px-4 bg-gradient-to-r ${lang.color} text-white rounded-xl font-medium hover:opacity-90 transition-opacity duration-200`}>
                Start Learning
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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
