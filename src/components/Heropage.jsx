import React from 'react';
import { FaSearch, FaHeart, FaArrowRight } from 'react-icons/fa';

export default function Heropage() {
  return (
    <section className="bg-gradient-to-br from-[#fff5f5] via-[#fff1f1] to-[#ffe4e6] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Side - Content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              The Best Place to Find <span className="text-pink-600">Albums</span> Online
            </h1>
            
            <p className="text-lg text-gray-600 font-script">
              Discover beautiful wedding albums from top photographers. 
              Preserve your precious memories in stunning designs that last a lifetime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <input 
                  type="text" 
                  placeholder="Search wedding albums..." 
                  className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <FaSearch className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center justify-center gap-2">
                Explore <FaArrowRight />
              </button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                />
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                />
                <img 
                  src="https://randomuser.me/api/portraits/women/68.jpg" 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                />
              </div>
              <div>
                <div className="flex items-center">
                  <FaHeart className="text-pink-600 mr-1" />
                  <span className="font-medium text-gray-700">4.8</span>
                  <span className="text-gray-500 ml-1">(2.5k+ Reviews)</span>
                </div>
                <p className="font-display text-sm text-gray-500">Trusted by thousands of couples</p>
              </div>
            </div>
          </div>
          
          {/* Right Side - Images */}
          <div className="w-full h-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              {/* First Image (larger) */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg  aspect-[3/4]">
                <img 
                  src="src/images/album2.jpg" 
                  alt="Wedding Album" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Classic Leather</h3>
                    <p className="text-pink-200">Starting at $199</p>
                  </div>
                </div>
              </div>
              
              {/* Second Image (smaller) */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg mt-18">
                <img 
                  src="src/images/album1.jpg" 
                  alt="Wedding Album" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Modern Design</h3>
                    <p className="text-pink-200">Starting at $249</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-pink-200 opacity-20 -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-purple-200 opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}