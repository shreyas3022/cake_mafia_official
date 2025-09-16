'use client';

import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="py-14 md:py-20 px-4 bg-gradient-to-br from-blue-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-blue-300 text-base md:text-lg mb-3 md:mb-4">testimonials</p>
          <div className="w-20 md:w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 md:mb-8"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">What People Are Saying</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-700/50 to-blue-800/50 backdrop-blur-sm border border-blue-500/20 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-3xl sm:text-4xl text-blue-400 mb-3 sm:mb-4">"</div>
              <div className="flex mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-blue-200 mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;