import React from 'react';
import { Monitor, Target, Code } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Monitor className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Interactive Learning",
      description: "Hands-on coding with real-time feedback and interactive exercises",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      icon: <Target className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals with years of experience",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50"
    },
    {
      icon: <Code className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Project-Based Learning",
      description: "Build real-world projects that showcase your skills",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50"
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Why Credora Leads the Way
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of programming education with our innovative approach to learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`group relative p-6 sm:p-8 ${feature.bgColor} rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-4 sm:mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 