import React from 'react';

export default function AlbumsGallery() {
  return (
    <div className="px-6 py-16 md:py-24 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Title Section */}
          <div className="md:col-span-1 mb-8 md:mb-0 -mt-4">
            <div className="max-w-md">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Cherish Your Wedding Memories
              </h2>
            </div>
          </div>

          {/* First Album Image (Square) */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img 
              src="/images/album6.jpg" 
              loading="lazy" 
              alt="Elegant wedding album design" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="text-white">
                <p className="text-sm opacity-80">Classic Leather Album</p>
                <h3 className="text-xl font-semibold">Timeless Elegance</h3>
              </div>
            </div>
          </div>

          {/* Second Album Image (Tall) */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg md:row-span-2">
            <img 
              src="/images/album5.jpg" 
              loading="lazy" 
              alt="Modern wedding album" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="text-white">
                <p className="text-sm opacity-80">Premium Layflat Album</p>
                <h3 className="text-xl font-semibold">Modern Luxury</h3>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="flex flex-col justify-between">
            <div className="max-w-sm">
              <p className="text-gray-700 mb-6">
                <strong>Albums by Zerogravity</strong> preserves your most precious moments in 
                stunning albums that tell your unique love story. Our community 
                of photographers creates heirloom-quality albums you'll cherish forever.
              </p>
              <div className="h-6"></div>
            </div>
            <a 
              href="#" 
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium group transition-colors"
            >
              Discover beautiful albums
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
              >
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* First Testimonial */}
          <div className="bg-pink-50 rounded-xl p-6 flex items-start">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Sarah J." 
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <p className="font-medium text-gray-900">Sarah J.</p>
              <p className="text-gray-600 mt-1">
                "Our wedding album is absolutely stunning! The quality exceeded our 
                expectations and perfectly captures our special day."
              </p>
            </div>
          </div>

          {/* Second Testimonial (with Pro badge) */}
          <div className="bg-purple-50 rounded-xl p-6 flex items-start relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Michael T." 
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <p className="font-medium text-gray-900">Michael T.</p>
              <p className="text-gray-600 mt-1">
                "As a wedding photographer, I only trust Albums by Zerogravity
                for my 
                clients' albums. The premium quality makes my work shine."
              </p>
            </div>
            <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-xs font-bold text-purple-700 border border-purple-200">
              PHOTOGRAPHER
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}