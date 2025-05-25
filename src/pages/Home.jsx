import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import ExploreCards from '../components/ExploreCards';
import backgroundVideo from '../video/83274-581386222.mp4';
import Cards from '../components/Cards';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const languages = [
    "JavaScript",
    "Python", 
    "Java",
    "C++",
    "Ruby",
    "C",
    "SQL",
    "Dart",
    "R"
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLanguageClick = (language) => {
    if (language === "JavaScript") {
      navigate('/introduction');
    }
  };

  const webDevCourses = [
    { title: "JavaScript", path: "/javascript" },
    { title: "HTML", path: "/html" },
    { title: "CSS", path: "/css" },
    { title: "ReactJS", path: "/react" },
    { title: "Node.js", path: "/nodejs" },
    { title: "Django", path: "/django" },
    { title: "Frontend Development", path: "/frontend" },
    { title: "Backend Development", path: "/backend" }
  ];

  const aiMlCourses = [
    { title: "Machine Learning", path: "/machine-learning" },
    { title: "Data Science", path: "/data-science" },
    { title: "Data Analysis", path: "/data-analysis" },
    { title: "Data Visualization", path: "/data-visualization" },
    { title: "Deep Learning", path: "/deep-learning" },
    { title: "Natural Language Processing", path: "/nlp" },
    { title: "Computer Vision", path: "/computer-vision" },
    { title: "Artificial Intelligence", path: "/ai" }
  ];

  return (
    <div className="min-h-screen">
      {/* Video Background Section */}
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay with content */}
        <div className="relative z-10 h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Learn Programming with Credora
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
            Master coding skills with our comprehensive tutorials and hands-on practice
          </p>          <button
            onClick={() => navigate('/introduction')}
            className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center border-2 border-white"
          >
            Get Started
            <svg
              className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Rest of your content */}
      <div className="pt-32 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Web Development</h2>
            <button className="rounded-full border border-gray-300 px-4 py-1 text-gray-600 hover:bg-gray-50">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {webDevCourses.map((course, index) => (
              <div 
                key={index}
                onClick={() => navigate(course.path)}
                className="bg-[#4B89DC] hover:bg-blue-600 text-white rounded-lg p-6 cursor-pointer transition duration-300 flex justify-between items-center"
              >
                <span className="text-2xl font-medium">{course.title}</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI ML & Data Science Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">AI ML & Data Science</h2>
            <button className="rounded-full border border-gray-300 px-4 py-1 text-gray-600 hover:bg-gray-50">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiMlCourses.map((course, index) => (
              <div 
                key={index}
                onClick={() => navigate(course.path)}
                className="bg-[#A98AD0] hover:bg-purple-600 text-white rounded-lg p-6 cursor-pointer transition duration-300 flex justify-between items-center"
              >
                <span className="text-2xl font-medium">{course.title}</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Programming Languages section */}
      <div className="popular-languages">
        <div className="carousel-container">
          <h2>Popular Courses</h2>
          <Carousel />
          <Cards/>
        </div>
      </div>

      {/* Add Explore Cards Section */}
      <ExploreCards />
    </div>
  );
}

export default Home;