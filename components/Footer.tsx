import React from 'react';
import { navLinks, socialLinks } from '../constants';
import { FacebookIcon, InstagramIcon, TwitterIcon, WhatsAppIcon, MailIcon, PhoneIcon, LocationMarkerIcon } from './Icons';

const iconMap: { [key: string]: React.ElementType } = {
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    twitter: TwitterIcon,
    whatsapp: WhatsAppIcon,
};

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/assets/logo.png" alt="Little Star And Cadet Care Logo" className="h-12 w-12" />
              <span className="font-bold text-lg text-white">Little Star And Cadet Care</span>
            </div>
            <p className="text-gray-400">
              Nurturing young minds for a brighter future through academic excellence and disciplined care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <LocationMarkerIcon className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-gray-400" />
                <span>Lalbihari Sarak, Faridpur-Sadar, Faridpur</span>
              </li>
              <li className="flex items-start">
                <LocationMarkerIcon className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-gray-400" />
                <span>Shingpara Sarak, Faridpur-Sadar, Faridpur</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 flex-shrink-0 text-gray-400" />
                <a href="tel:+2341234567890" className="hover:text-white">01775-01674</a>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-3 flex-shrink-0 text-gray-400" />
                 <a href="mailto:info@littlestarandcadetcare.com" className="hover:text-white">info@littlestarandcadetcare.com</a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
             <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
             <div className="flex space-x-4">
                {socialLinks.map((link) => {
                    const IconComponent = iconMap[link.icon];
                    return (
                        <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full">
                            <IconComponent className="h-5 w-5" />
                        </a>
                    );
                })}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Little Star And Cadet Care. All Rights Reserved 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
