// Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Footer Links */}
          <div className="space-x-6">
            <Link to="/terms" className="hover:text-gray-300">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact Support</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
          </div>

          {/* Social Media Icons */}
          <div className="space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} GameTracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
