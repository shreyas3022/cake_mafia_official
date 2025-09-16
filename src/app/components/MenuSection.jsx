'use client';

import React from 'react';

const MenuSection = ({ menuItems }) => {
  return (
    <section id="menu" className="py-14 md:py-20 px-4 bg-gradient-to-br from-slate-800 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-blue-300 text-base md:text-lg mb-3 md:mb-4">Special selection</p>
          <div className="w-20 md:w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 md:mb-8"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Our Signature & Best Sellers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-700/30 to-blue-800/30 backdrop-blur-sm border border-blue-500/20 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex-1">
                <h5 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 group-hover:text-blue-400 transition-colors">
                  {item.name}
                </h5>
                <p className="text-blue-200 text-sm sm:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;