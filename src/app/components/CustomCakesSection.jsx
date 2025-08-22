'use client';

import React from 'react';

const CustomCakesSection = ({ customCakes }) => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-blue-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Customised Cake</h2>
          <p className="text-xl text-blue-200">Cake Mafira offers a unique and exceptional twist on traditional cakes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {customCakes.map((cake, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <img 
                src={cake.image} 
                alt={cake.title}
                className="w-full h-80 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-2xl font-bold">{cake.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
            WhatsApp us for customised cakes
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomCakesSection;