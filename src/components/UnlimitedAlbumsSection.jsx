import React from 'react';

const UnlimitedAlbumsSection = () => {
  // Sample album images - replace these with your actual image paths
  const albumImages = [
    {
      id: 1,
      src: "/images/album1.webp",
      alt: "Classic leather wedding album",
      title: "Classic Leather"
    },
    {
      id: 2,
      src: "/images/album10.webp",
      alt: "Modern acrylic wedding album",
      title: "Modern Acrylic"
    },
    {
      id: 3,
      src: "/images/album4.webp",
      alt: "Vintage velvet wedding album",
      title: "Vintage Velvet"
    },
    {
      id: 4,
      src: "/images/album5.webp",
      alt: "Layflat wedding album",
      title: "Layflat Design"
    },
    {
      id: 5,
      src: "/images/album2.webp",
      alt: "Premium wedding album box set",
      title: "Premium Box Set"
    },
    {
      id: 6,
      src: "/images/album9.webp",
      alt: "Custom embossed wedding album",
      title: "Custom Embossed"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white font-[Outfit]">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Heading */}
          <div className="flex flex-col">
            <div className="flex items-start mb-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mr-4">Unlimited</h2>
              
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Possibilities</h2>
          </div>

          {/* Middle Column - Description */}
          <div className="flex flex-col justify-between">
            <div className="max-w-md">
              <p className="text-gray-700 mb-6">
                Unlimited design options. Unlimited cover materials. Unlimited personalization. 
                Our <span className="font-bold text-pink-600">Premium Design Service</span> lets you create 
                the perfect album with no compromises.
              </p>
              <div className="h-6"></div>
            </div>
            <a 
              href="/premium" 
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium group transition-colors"
            >
              Explore Premium Options
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

          {/* Right Column - Image Grid */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="grid grid-cols-3 gap-4">
              {albumImages.slice(0, 6).map((album) => (
                <div key={album.id} className="relative group overflow-hidden rounded-lg aspect-square">
                  <img
                    src={album.src}
                    alt={album.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                    <span className="text-white text-xs font-medium truncate w-full text-center">{album.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width Image Grid Below */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {albumImages.map((album) => (
            <div key={`full-${album.id}`} className="relative group overflow-hidden rounded-lg aspect-square">
              <img
                src={album.src}
                alt={album.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">{album.title}</span>
              </div>
            </div>
          ))}
          {/* Duplicate to fill the grid if needed */}
          {albumImages.slice(0, 6).map((album) => (
            <div key={`dup-${album.id}`} className="relative group overflow-hidden rounded-lg aspect-square">
              <img
                src={album.src}
                alt={`${album.alt} (secondary)`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">{album.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnlimitedAlbumsSection;