import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent mb-6">
            Devantics
          </div>
          <p className="text-gray-400 mb-6">
            Transforming businesses through innovative digital solutions and cutting-edge technology.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-6">Services</h3>
          <ul className="space-y-3">
            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Mobile App Development</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</Link></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Strategy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">IT Consulting</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <i className="fas fa-map-marker-alt text-blue-400 mt-1 mr-3"></i>
              <span className="text-gray-400">123 Innovation Drive, Tech City, CA 94043</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-phone-alt text-blue-400 mr-3"></i>
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-envelope text-blue-400 mr-3"></i>
              <span className="text-gray-400">devantics01@gmail.com</span>
            </li>
          </ul>
          <div className="mt-6">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Subscribe to our newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none border-none w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg cursor-pointer whitespace-nowrap">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Devantics. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
