import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube,FaCamera } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 pt-12 pb-8 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          {/* About Section */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-display">Alpha Albums</h3>
            <p className="text-gray-600 text-sm mb-4">
              The most beautiful way to preserve your wedding memories. 
              Premium albums crafted with love and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-pink-600">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600">
                <FaPinterest className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 font-sans">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pink-600 text-sm">Company</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 text-sm">History</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 text-sm">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pink-600 text-sm">Album Design</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 text-sm">Printing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 text-sm">Custom Covers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 text-sm">Digital Copies</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pink-600 text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 text-sm">Terms</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 text-sm">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Secondary Footer */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <FaCamera className="h-6 w-6 text-pink-600" />
              <span className="text-lg font-semibold text-gray-900">Alpha Albums</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="#" className="text-gray-600 hover:text-pink-600 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-pink-600 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-pink-600 text-sm">Cookie Policy</a>
              <a href="#" className="text-gray-600 hover:text-pink-600 text-sm">GDPR</a>
            </div>
            
            <p className="text-gray-500 text-sm mt-4 md:mt-0">
              © {new Date().getFullYear()} Alpha Albums. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;