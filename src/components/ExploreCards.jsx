import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

function ExploreCards() {
  const navigate = useNavigate();

  const exploreCards = [
    {
      title: "Data Structures & Algorithms",
      description: "Master DSA fundamentals and problem solving",
      icon: "🎯",
      path: "/dsa",
      color: "from-blue-400 to-blue-600",
      students: "50K+"
    },
    {
      title: "Python Programming",
      description: "Learn Python from basics to advanced concepts",
      icon: "🐍",
      path: "/python",
      color: "from-green-400 to-green-600",
      students: "75K+"
    },
    {
      title: "Machine Learning",
      description: "Explore AI, ML algorithms and data science",
      icon: "🤖",
      path: "/machine-learning",
      color: "from-purple-400 to-purple-600",
      students: "40K+"
    },
    {
      title: "Web Development",
      description: "Build modern websites with HTML, CSS, and JavaScript",
      icon: "🌐",
      path: "/web-development",
      color: "from-pink-400 to-pink-600",
      students: "100K+"
    },
    {
      title: "Backend Development",
      description: "Create servers and APIs with Node.js and databases",
      icon: "⚙️",
      path: "/backend",
      color: "from-yellow-400 to-yellow-600",
      students: "45K+"
    },
    {
      title: "DevOps & Tools",
      description: "Learn Git, Docker, and CI/CD pipelines",
      icon: "🔧",
      path: "/devops",
      color: "from-red-400 to-red-600",
      students: "30K+"
    }
  ];

  return (
    <div className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Explore More <span className="text-blue-600">Topics</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dive into our comprehensive collection of courses and start your learning journey today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exploreCards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.path)}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${card.color}`}></div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {card.students} students
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {card.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span className="mr-2">Learn More</span>
                  <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreCards;