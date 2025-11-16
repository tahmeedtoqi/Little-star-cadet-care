
import React from 'react';
import { executives } from '../constants';

const Executives: React.FC = () => {
  return (
    <section id="executives" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">MEET OUR EXECUTIVES</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-2"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {executives.map((exec, index) => (
            <div key={index} className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={exec.imageUrl} 
                  alt={exec.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800">{exec.name}</h3>
              <p className="text-blue-600">{exec.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Executives;
