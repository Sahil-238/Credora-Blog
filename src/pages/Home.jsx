import React, { useState, useEffect } from 'react';
import heroBg from '../video/hero-bg.mp4';

import { 
  Search, 
  Book, 
  Users, 
  Award, 
  Monitor, 
  Target, 
  Code, 
  Check, 
  TrendingUp,
  Play,
  ArrowRight,
  Star,
  ChevronRight,
  Sparkles,
  Trophy,
  Globe,
  Zap
} from 'lucide-react';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const stats = [
    { number: "100+", label: "Expert Courses", icon: <Book className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
    { number: "50K+", label: "Active Students", icon: <Users className="w-8 h-8" />, color: "from-purple-500 to-pink-500" },
    { number: "200+", label: "Industry Experts", icon: <Award className="w-8 h-8" />, color: "from-green-500 to-emerald-500" }
  ];

  const features = [
    {
      icon: <Monitor className="w-10 h-10" />,
      title: "Interactive Learning",
      description: "Hands-on coding with real-time feedback and interactive exercises",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals with years of experience",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50"
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Project-Based Learning",
      description: "Build real-world projects that showcase your skills",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer at Google",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "Credora transformed my career. The hands-on approach and expert mentorship helped me land my dream job at Google in just 6 months!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "AI Engineer at Tesla",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "The AI & ML courses are incredibly comprehensive. The practical projects gave me the confidence to transition into AI engineering.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      text: "Best investment I've made in my career. The community support and real-world projects made all the difference.",
      rating: 5
    }
  ];

  const benefits = [
    "Personalized learning paths tailored to your career goals",
    "Real-world projects with practical industry applications",
    "1-on-1 mentorship from industry professionals",
    "Flexible schedule that adapts to your lifestyle",
    "Career support with job placement assistance",
    "Access to exclusive developer community network"
  ];

  const achievements = [
    {
      number: "95%",
      label: "Job Placement Rate",
      description: "Our graduates successfully land tech jobs within 6 months",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      number: "4.9/5",
      label: "Student Rating",
      description: "Consistently rated as the top programming education platform",
      icon: <Star className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "500+",
      label: "Partner Companies",
      description: "Leading tech companies actively hire our graduates",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const webDevCourses = [
    { 
      title: "HTML & CSS Mastery", 
      path: "/courses/html-css",
      level: "Beginner",
      duration: "8 weeks",
      projects: "5 projects"
    },
    { 
      title: "Modern JavaScript", 
      path: "/courses/javascript",
      level: "Intermediate",
      duration: "12 weeks",
      projects: "8 projects"
    },
    { 
      title: "React Development", 
      path: "/courses/react",
      level: "Intermediate",
      duration: "10 weeks",
      projects: "6 projects"
    },
    { 
      title: "Node.js Backend", 
      path: "/courses/nodejs",
      level: "Advanced",
      duration: "14 weeks",
      projects: "10 projects"
    }
  ];

  const aiMlCourses = [
    { 
      title: "Python for AI", 
      path: "/courses/python-ai",
      level: "Beginner",
      duration: "10 weeks",
      projects: "7 projects"
    },
    { 
      title: "Machine Learning", 
      path: "/courses/machine-learning",
      level: "Intermediate",
      duration: "16 weeks",
      projects: "12 projects"
    },
    { 
      title: "Deep Learning", 
      path: "/courses/deep-learning",
      level: "Advanced",
      duration: "18 weeks",
      projects: "15 projects"
    },
    { 
      title: "Data Science", 
      path: "/courses/data-science",
      level: "Intermediate",
      duration: "14 weeks",
      projects: "10 projects"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (

    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Video */}
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover z-0"
>
  <source src={heroBg} type="video/mp4" />
</video>

        {/* Animated Background */}
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>


        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative z-10 h-screen flex flex-col items-center justify-center text-white px-4">
          {/* Hero Badge */}
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Join 50,000+ successful developers</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-center leading-tight">
            Master <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Code</span>
            <br />Build <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-center max-w-3xl text-gray-300 leading-relaxed">
            Transform your career with hands-on programming courses designed by industry experts. Learn by building real projects that matter.
          </p>
          
          {/* Enhanced Search Bar */}
          <div className="w-full max-w-3xl mb-12">
            <div className="relative group">
              <input
                type="text"
                placeholder="What do you want to learn today?"
                className="w-full px-8 py-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-lg transition-all duration-300 group-hover:bg-white/15"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                <Search className="text-white/60 w-6 h-6" />
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center space-x-3 transform hover:scale-105 hover:shadow-2xl">
              <Play className="w-5 h-5" />
              <span>Start Learning Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl border border-white/20 transition-all duration-300 flex items-center space-x-3 transform hover:scale-105">
              <span>Explore Courses</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <main className="relative bg-white">
        {/* Enhanced Stats Section */}
        <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="flex items-center space-x-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${stat.color} text-white transform group-hover:scale-110 transition-transform duration-300`}>
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-gray-900 mb-1">{stat.number}</div>
                        <div className="text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Why Credora Leads the Way
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience the future of programming education with our innovative approach to learning
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className={`group relative p-8 ${feature.bgColor} rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced About Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-50/50 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-50/50 to-transparent rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Transform Your Career Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Join thousands of successful developers who've accelerated their careers through our comprehensive, project-based learning approach
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                    alt="Students learning programming"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-8 max-w-sm border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">45K+</div>
                      <div className="text-gray-600 font-medium">Active Learners</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900">
                  Your Success Story Starts Here
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience learning that adapts to you. Our platform combines cutting-edge technology with proven teaching methods to ensure your success in the tech industry.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="p-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${achievement.color} text-white mb-4`}>
                      {achievement.icon}
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-xl font-semibold text-gray-800 mb-3">
                      {achievement.label}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Course Sections */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Web Development Section */}
            <div className="mb-20">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Web Development</h2>
                  <p className="text-xl text-gray-600">Build modern, responsive web applications</p>
                </div>
                <button className="group flex items-center space-x-2 text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-6 py-3 rounded-xl transition-all duration-300">
                  <span className="font-semibold">Explore All Courses</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {webDevCourses.map((course, index) => (
                  <div key={index} className="group bg-white border border-gray-200 hover:border-blue-300 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {course.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {course.projects}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-blue-600 font-semibold group-hover:text-blue-700">Learn More</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI ML Section */}
            <div className="py-12">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">AI & Machine Learning</h2>
                  <p className="text-xl text-gray-600">Master the future of technology</p>
                </div>
                <button className="group flex items-center space-x-2 text-purple-600 hover:text-purple-700 bg-purple-50 hover:bg-purple-100 px-6 py-3 rounded-xl transition-all duration-300">
                  <span className="font-semibold">Explore All Courses</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {aiMlCourses.map((course, index) => (
                  <div key={index} className="group bg-white border border-gray-200 hover:border-purple-300 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">{course.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        {course.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {course.projects}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-purple-600 font-semibold group-hover:text-purple-700">Learn More</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Testimonials Section */}
        <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories That Inspire</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hear from graduates who've transformed their careers with Credora
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-2xl text-gray-800 font-medium leading-relaxed mb-8">
                    "{testimonials[activeTestimonial].text}"
                  </blockquote>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-16 h-16 rounded-full border-4 border-gray-100"
                  />
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-gray-600 font-medium">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial Navigation */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Join thousands of students who are already building their dream careers in tech
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-gray-900 font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-all duration-300 flex items-center space-x-3 transform hover:scale-105 shadow-xl">
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-3 transform hover:scale-105">
                <span>View Pricing</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Newsletter Section */}
        <div className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-8">
              <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-4">Stay Ahead of the Curve</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Get the latest programming trends, exclusive content, and early access to new courses
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                Subscribe Now
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              Join 25,000+ developers already subscribed. Unsubscribe anytime.
            </p>
          </div>
        </div>

        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            {/* Bottom Footer */}
            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 mb-4 md:mb-0">
                  © 2024 Credora. All rights reserved. Crafted with ❤️ for developers worldwide.
                </div>
                <div className="flex items-center space-x-6 text-gray-400">
                  <span className="hover:text-white cursor-pointer transition-colors duration-300">Privacy</span>
                  <span className="hover:text-white cursor-pointer transition-colors duration-300">Terms</span>
                  <span className="hover:text-white cursor-pointer transition-colors duration-300">Cookies</span>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span className="hover:text-white cursor-pointer transition-colors duration-300">English</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Home;