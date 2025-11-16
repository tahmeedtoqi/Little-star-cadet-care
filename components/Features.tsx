import React from 'react';
import { featuresItems } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Features</h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto mt-2"></div>
           <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the core pillars of our educational approach.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a 
                key={index}
                href={item.href}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center block"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gray-100 p-4 rounded-full">
                    <Icon className="h-10 w-10 text-gray-800" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
