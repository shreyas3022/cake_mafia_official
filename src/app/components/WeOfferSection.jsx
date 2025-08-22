'use client';

import React from 'react';

const WeOfferSection = ({ offers }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-800 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-300 text-lg mb-4">Flavour for royalty</p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">We Offer Top Notch</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            At Cake Mafira, we believe that life is sweeter with cake. Step into our world of decadent flavours, 
            irresistible taste, and stunning designs as we invite you to indulge in the ultimate cake experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700/50 to-blue-800/50 backdrop-blur-sm border border-blue-500/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-center">{offer.title}</h3>
                <div className="text-center">
                  <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300">
                    Order Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeOfferSection;