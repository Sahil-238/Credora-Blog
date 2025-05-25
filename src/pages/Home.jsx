import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import backgroundVideo from '../video/83274-581386222.mp4';

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
    "Go",
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
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Courses</h2>
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Home;