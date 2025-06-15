import React from 'react';
import { Sparkles } from 'lucide-react';

const Newsletter = () => {
  return (
    <div className="py-16 sm:py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Stay Ahead of the Curve</h3>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Get the latest programming trends, exclusive content, and early access to new courses
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm sm:text-base"
          />
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl">
            Subscribe Now
          </button>
        </div>
        
        <p className="text-gray-400 text-xs sm:text-sm mt-4">
          Join 25,000+ developers already subscribed. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default Newsletter; 