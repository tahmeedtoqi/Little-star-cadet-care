import React from 'react';
import { galleryImages } from '../constants';

const Gallery: React.FC = () => {
  // Duplicate the images to create a seamless loop
  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Memorable Events</h2>
        <div className="w-24 h-1 bg-gray-800 mx-auto mt-2 mb-12"></div>
      </div>
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-scroll">
          {duplicatedImages.map((src, index) => (
            <li key={index} className="flex-shrink-0">
              <img 
                src={src} 
                alt={`Event gallery image ${index + 1}`} 
                className="w-[250px] h-[200px] object-cover rounded-lg shadow-lg"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
