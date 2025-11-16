import React from 'react';
import school from '../assets/p2.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">ABOUT US</h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto mt-2"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <img 
              src={school}
              alt="Students at Little Star And Cadet Care" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Little Star And Cadet Care</h3>
            <p className="text-gray-600 leading-relaxed">
              Little Star And Cadet Care is a premier educational institution dedicated to providing a nurturing and disciplined environment for students. Our core mission is to foster academic excellence, character development, and leadership skills. We provide a supportive community that empowers students to achieve their full potential, preparing them to be responsible citizens and future leaders who will make a positive impact on the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
