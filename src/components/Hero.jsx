import React, { useState } from 'react';
import { Search, Play, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import heroBg from '../video/hero-bg.mp4';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
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

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 text-center leading-tight">
          Master <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Code</span>
          <br />Build <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Future</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-12 text-center max-w-3xl text-gray-300 leading-relaxed">
          Transform your career with hands-on programming courses designed by industry experts. Learn by building real projects that matter.
        </p>
        
        {/* Enhanced Search Bar */}
        <div className="w-full max-w-3xl mb-12">
          <div className="relative group">
            <input
              type="text"
              placeholder="What do you want to learn today?"
              className="w-full px-6 sm:px-8 py-4 sm:py-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-base sm:text-lg transition-all duration-300 group-hover:bg-white/15"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <Search className="text-white/60 w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 hover:shadow-2xl">
            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Start Learning Free</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl border border-white/20 transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105">
            <span>Explore Courses</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 