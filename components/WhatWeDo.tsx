
import React from 'react';
import { whatWeDoItems } from '../constants';

const WhatWeDo: React.FC = () => {
  return (
    <section id="what-we-do" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">WHAT WE DO</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-2"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whatWeDoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
