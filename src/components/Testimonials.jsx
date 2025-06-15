import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Success Stories That Inspire</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from graduates who've transformed their careers with Credora
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex flex-row justify-center items-center space-x-1 sm:space-x-2 mb-4 w-full overflow-x-auto">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-yellow-400 fill-current transform hover:scale-110 transition-transform inline-block" 
                  />
                ))}
              </div>
              <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-6 sm:mb-8 px-2 sm:px-4">
                "{testimonials[activeTestimonial].text}"
              </blockquote>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="relative">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 border-gray-100 shadow-lg transform hover:scale-105 transition-transform"
                />
                <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full p-1 sm:p-1.5">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">
                  {testimonials[activeTestimonial].role}
                </p>
              </div>
            </div>
          </div>
          
          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-3 mt-8 sm:mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 