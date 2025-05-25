import React from 'react';
import { useNavigate } from 'react-router-dom';

function ExploreCards() {
  const navigate = useNavigate();

  const exploreCards = [
    {
      title: "Data Structures & Algorithms",
      description: "Master DSA fundamentals and problem solving",
      icon: "🎯",
      path: "/dsa"
    },
    {
      title: "Python Programming",
      description: "Learn Python from basics to advanced concepts",
      icon: "🐍",
      path: "/python"
    },
    {
      title: "Machine Learning",
      description: "Explore AI, ML algorithms and data science",
      icon: "🤖",
      path: "/machine-learning"
    },
    {
      title: "Web Development",
      description: "Build modern websites with HTML, CSS, and JavaScript",
      icon: "🌐",
      path: "/web-development"
    },
    {
      title: "Backend Development",
      description: "Create servers and APIs with Node.js and databases",
      icon: "⚙️",
      path: "/backend"
    },
    {
      title: "DevOps & Tools",
      description: "Learn Git, Docker, and CI/CD pipelines",
      icon: "🔧",
      path: "/devops"
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Explore More</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exploreCards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.path)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 cursor-pointer p-6 border border-gray-100"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreCards;