
import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 gradient-bg rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-poppins font-semibold text-xl text-brand-dark">SkillSpark</span>
            </div>
            <p className="text-gray-600">
              Empowering students and professionals with cutting-edge technology skills for the future workplace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand-purple">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-purple">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-brand-dark">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-brand-purple">Our Courses</Link>
              </li>
              <li>
                <Link to="/hackathons" className="text-gray-600 hover:text-brand-purple">Hackathons</Link>
              </li>
              <li>
                <Link to="/corporate" className="text-gray-600 hover:text-brand-purple">Corporate Training</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-purple">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-purple">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-brand-dark">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPinIcon size={20} className="text-brand-purple mt-1 flex-shrink-0" />
                <span className="text-gray-600">123 Tech Avenue, Innovation District, City, Country</span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon size={20} className="text-brand-purple flex-shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MailIcon size={20} className="text-brand-purple flex-shrink-0" />
                <span className="text-gray-600">info@skillspark.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-brand-dark">Stay Updated</h3>
            <p className="text-gray-600">Subscribe to our newsletter for the latest updates on courses, hackathons, and tech trends.</p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple" 
              />
              <button className="bg-brand-purple text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} SkillSpark Global Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-600 text-sm hover:text-brand-purple">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-600 text-sm hover:text-brand-purple">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-600 text-sm hover:text-brand-purple">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
