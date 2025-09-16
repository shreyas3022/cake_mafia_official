'use client';

import React from 'react';

const CustomCakesSection = ({ customCakes }) => {
  return (
    <section id="about" className="py-14 md:py-20 px-4 bg-gradient-to-br from-blue-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <div className="w-20 md:w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 md:mb-8"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Customised Cake</h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-200 px-2">Cake Mafira offers a unique and exceptional twist on traditional cakes.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-10 md:mb-12">
          {customCakes.map((cake, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <img 
                  src={cake.image} 
                  alt={cake.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="mt-3 sm:mt-4 text-center">
                <h3 className="text-xl sm:text-2xl font-bold">{cake.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
            WhatsApp us for customised cakes
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomCakesSection;