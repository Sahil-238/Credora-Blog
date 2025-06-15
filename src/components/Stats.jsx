import React from 'react';
import { Book, Users, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    { number: "100+", label: "Expert Courses", icon: <Book className="w-6 h-6 sm:w-8 sm:h-8" />, color: "from-blue-500 to-cyan-500" },
    { number: "50K+", label: "Active Students", icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />, color: "from-purple-500 to-pink-500" },
    { number: "200+", label: "Industry Experts", icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />, color: "from-green-500 to-emerald-500" }
  ];

  return (
    <div className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur"></div>
              <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center space-x-4 sm:space-x-6">
                  <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${stat.color} text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats; 