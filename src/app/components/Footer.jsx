'use client';

import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 to-blue-950 border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Cake Mafira
            </h2>
            <div className="space-y-4 text-blue-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span>Shop 15, MG Complex, Main Road, Near Metro Station, Mumbai, Maharashtra 400001</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@cakemafira.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>Open: 9:00 AM to 11:00 PM (All Days)</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <div className="space-y-3">
                <a href="#home" className="block text-blue-200 hover:text-blue-400 transition-colors">Home</a>
                <a href="#about" className="block text-blue-200 hover:text-blue-400 transition-colors">About Us</a>
                <a href="#menu" className="block text-blue-200 hover:text-blue-400 transition-colors">Menu</a>
                <a href="#gallery" className="block text-blue-200 hover:text-blue-400 transition-colors">Gallery</a>
                <a href="#contact" className="block text-blue-200 hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
              <div className="space-y-3">
                <a href="#" className="block text-blue-200 hover:text-blue-400 transition-colors">Instagram</a>
                <a href="#" className="block text-blue-200 hover:text-blue-400 transition-colors">Facebook</a>
                <a href="#" className="block text-blue-200 hover:text-blue-400 transition-colors">Google Map</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-500/20 pt-8">
          <div className="text-center text-blue-300">
            <p>&copy; 2024 Cake Mafira. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;