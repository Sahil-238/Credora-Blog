import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const CTA = () => {
  return (
    <div className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 leading-relaxed">
          Join thousands of students who are already building their dream careers in tech
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <button className="bg-white text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 shadow-xl">
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <button className="bg-transparent border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105">
            <span>View Pricing</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA; 