import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import ExploreCards from '../components/ExploreCards';
import backgroundVideo from '../video/83274-581386222.mp4';
import Cards from '../components/Cards';
import { FiSearch, FiBook, FiUsers, FiAward, FiMonitor, FiTarget, FiCode, FiCheck, FiTrendingUp, FiGlobe } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
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
      navigate('/javascript-course');
    }
  };

  const handleCourseClick = (path) => {
    navigate(path);
  };

  const webDevCourses = [
    { title: "JavaScript", path: "/javascript-course" },
    { title: "HTML", path: "/html" },
    { title: "CSS", path: "/css-course" },
    { title: "ReactJS", path: "/react-course" },
    { title: "Node.js", path: "/nodejs-course" },
    { title: "Java", path: "/java-course" },
    { title: "Django", path: "/django" },
    { title: "Frontend Development", path: "/frontend" },
    { title: "Backend Development", path: "/backend" },
    { title: 'jQuery', description: 'Learn jQuery, the fast and feature-rich JavaScript library designed to simplify HTML DOM manipulation, event handling, animations, and Ajax interactions.', image: '/images/jquery-logo.png', href: '/jquery-course', level: 'Beginner to Advanced', duration: '20-25 hours', topics: ['DOM Manipulation', 'Events', 'Effects', 'AJAX', 'Traversing'] }
  ];

  const aiMlCourses = [
    { title: "Machine Learning", path: "/machine-learning" },
    { title: "Data Science", path: "/tech-stack/courses/data-science" },
    { title: "Data Analysis", path: "/data-analysis" },
    { title: "Data Visualization", path: "/data-visualization" },
    { title: "Deep Learning", path: "/deep-learning" },
    { title: "Natural Language Processing", path: "/nlp" },
    { title: "Computer Vision", path: "/computer-vision" },
    { title: "Artificial Intelligence", path: "/ai" }
  ];

  const stats = [
    { number: "100+", label: "Courses", icon: <FiBook className="w-6 h-6" /> },
    { number: "50K+", label: "Students", icon: <FiUsers className="w-6 h-6" /> },
    { number: "200+", label: "Instructors", icon: <FiAward className="w-6 h-6" /> }
  ];

  const features = [
    {
      icon: <FiMonitor className="w-8 h-8" />,
      title: "Interactive Learning",
      description: "Learn by doing with hands-on coding exercises"
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals"
    },
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Project-Based",
      description: "Build real-world projects"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "Credora helped me transition from a beginner to a professional developer in just 6 months."
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "The AI & ML courses are comprehensive and practical. Highly recommended!"
    }
  ];

  const achievements = [
    {
      number: "98%",
      label: "Success Rate",
      description: "Of our students successfully transition to tech careers"
    },
    {
      number: "250+",
      label: "Industry Partners",
      description: "Leading tech companies hire our graduates"
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Of excellence in programming education"
    }
  ];

  const benefits = [
    "Personalized learning paths tailored to your goals",
    "Real-world projects with practical applications",
    "Industry-expert mentorship and guidance",
    "Flexible learning schedule that fits your lifestyle",
    "Career support and job placement assistance",
    "Access to a thriving developer community"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen mb-16">
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

        <div className="relative z-10 h-full bg-gradient-to-b from-black/70 to-black/50 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center leading-tight">
            Master <span className="text-blue-400">Programming</span><br />with Credora
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl text-gray-200">
            Join over 50,000 learners mastering programming through interactive courses and real-world projects
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-2xl mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for courses..."
                className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
            </div>
          </div>

          <button
            onClick={() => navigate('/introduction')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
          >
            <span>Start Learning Now</span>
            <svg
              className="w-5 h-5 ml-2"
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

      <main className="relative z-20 bg-white">
        {/* Stats Section */}
        <div className="py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center justify-center space-x-4 p-8 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-blue-600">{stat.icon}</div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Why Choose Credora?</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Experience a modern approach to learning programming with our unique features
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl opacity-60 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-purple-50 to-transparent rounded-full blur-3xl opacity-60 transform translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4">
            {/* About Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Transform Your Career with Credora
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                We're on a mission to revolutionize programming education by making it accessible, practical, and engaging for everyone.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Left Column - Image */}
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="Students learning programming"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Stats Overlay */}
                <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-center space-x-4">
                    <FiTrendingUp className="w-8 h-8 text-blue-600" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">45K+</div>
                      <div className="text-sm text-gray-600">Active Learners</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  Your Journey to Success Starts Here
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  At Credora, we believe in learning by doing. Our platform combines expert-led instruction with hands-on practice to ensure you master programming concepts effectively.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <FiCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Categories Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Popular Course Categories</h2>
            <p className="text-gray-600 text-center mb-12">Choose from our wide range of courses</p>
            
            {/* Web Development Courses */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8">Web Development</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {webDevCourses.map((course, index) => (
                  <Link
                    key={index}
                    to={course.path}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer p-6"
                  >
                    <h4 className="text-lg font-semibold mb-2">{course.title}</h4>
                    <p className="text-gray-600">Learn {course.title}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* AI & ML Courses */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">AI & Machine Learning</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {aiMlCourses.map((course, index) => (
                  <Link
                    key={index}
                    to={course.path}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer p-6"
                  >
                    <h4 className="text-lg font-semibold mb-2">{course.title}</h4>
                    <p className="text-gray-600">Learn {course.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Programming Languages section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Programming Languages</h2>
            <Cards />
          </div>
        </div>

        {/* Explore More Section */}
        <ExploreCards />
      </main>
    </div>
  );
}

export default Home;