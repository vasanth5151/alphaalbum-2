import React from 'react';

export default function PhotoGallery() {
  return (
    <section className="px-6 py-16 md:py-24 bg-white font-[Outfit]">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout - 3 columns on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Title Section */}
          <div className="md:col-span-1 mb-8 md:mb-0">
            <div className="max-w-md">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Wedding Memories, <span className="text-pink-600">Perfected</span>
              </h2>
            </div>
          </div>

          {/* First Wedding Photo (Square Aspect) */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img 
              src="/images/album3.jpg" 
              loading="lazy" 
              alt="Wedding couple portrait" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 933px) 100vw, 933px"
              
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="text-white">
                <p className="text-sm opacity-80">Classic Wedding Portrait</p>
                <h3 className="text-xl font-semibold">Timeless Elegance</h3>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="flex flex-col justify-between">
          <div className="max-w-sm">
  <p className="text-gray-700 mb-6">
    <strong>Albums by Zerogravity</strong> provides the perfect home for your precious moments. 
    Preserve, organize, and beautifully display your wedding memories in 
    stunning albums that tell your unique love story.
  </p>
  
  {/* Image with caption and hover effect */}
    <div className="mt-6 group">
        <div className="relative aspect-square w-full max-w-xs"> {/* Increased from w-32 h-32 */}
          <img 
              src="/images/album4.jpg" 
              alt="Sample wedding album cover" 
              className="w-full h-full object-cover rounded-lg shadow-md border-2 border-white group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-center">
              <p className="text-sm text-white font-medium">Sample Album Cover</p> {/* Increased text size */}
          </div>
        </div>
            
        </div>
  
         <div className="h-6"></div>
    </div>
            <a 
              href="/create-album" 
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium group transition-colors"
              aria-label="Create your wedding album"
            >
              Start your album journey
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

          {/* Second Wedding Photo (Full Width) */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-xl shadow-lg">
            <img 
              src="/images/album5.jpg" 
              loading="lazy" 
              alt="Wedding ceremony moment" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 786px) 100vw, 786px"
              
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="text-white">
                <p className="text-sm opacity-80">Emotional Ceremony Shot</p>
                <h3 className="text-xl font-semibold">Captured Forever</h3>
              </div>
             
            </div>
            
          </div>
                    <div className="mt-4 p-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-sm">
                        <p className="text-gray-700 text-sm md:text-base">
                            <span className="font-semibold text-pink-600">Heirloom Quality Albums:</span> Each page is 
                            handcrafted with premium materials to preserve your memories for generations. 
                            Choose from luxurious leather, silk, or modern acrylic covers.
                        </p>
                        <p className="mt-2 text-gray-600 text-xs md:text-sm">
                            Archival-grade paper protects your photos for 100+ years
                        </p>
                    </div>
        </div>
      </div>
    </section>
  );
}