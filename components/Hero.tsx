import React from 'react';
// Import a background image from the assets folder. Replace with your image filename.
import hero from '../assets/p1.jpg';
import { socialLinks } from '../constants';
import { FacebookIcon, InstagramIcon, TwitterIcon, WhatsAppIcon } from './Icons';

const iconMap: { [key: string]: React.ElementType } = {
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    twitter: TwitterIcon,
    whatsapp: WhatsAppIcon,
};

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg"
        style={{ backgroundImage: `url(${hero})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-wider leading-tight">
          Education Meets Excellence.
        </h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-200 mt-6 mb-8">
          Little Star and Cadet Care is a popular coaching centre in Faridpur, we ensure quality education to our students.
        </p>
        <a href="#about" className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
          Admission
        </a>
      </div>

      <div className="absolute bottom-10 left-10 z-10 hidden md:flex flex-col space-y-4">
        {socialLinks.map((link) => {
            const IconComponent = iconMap[link.icon];
            return (
              <a key={link.name} href={link.href} className="text-white hover:text-gray-400 transition-colors">
                <IconComponent className="h-6 w-6" />
              </a>
            );
        })}
      </div>
    </section>
  );
};

export default Hero;
