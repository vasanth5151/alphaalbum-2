import React from 'react';


const WeddingGallery = () => {
  const albums = [
    {
      id: 1,
      title: "Classic Leather Collection",
      desc: "Timeless elegance with hand-stitched binding",
      img: "/images/album7.jpg",
      type: "Premium"
    },
    {
      id: 2,
      title: "Modern Acrylic Series",
      desc: "Sleek contemporary designs with crystal-clear pages",
      img: "/images/album8.jpg",
      type: "Bestseller"
    },
    {
      id: 3,
      title: "Vintage Velvet Edition",
      desc: "Luxurious velvet covers with gold foil detailing",
      img: "/images/album9.jpg",
      type: "Luxury"
    },
    {
      id: 4,
      title: "Destination Wedding Package",
      desc: "Custom designs inspired by your wedding location",
      img: "/images/album10.jpg",
      type: "Popular"
    },
    {
      id: 5,
      title: "Parent Album Set",
      desc: "Matching smaller albums for family members",
      img: "/images/album11.jpg",
      type: "Bundle"
    },
    {
      id: 6,
      title: "Layflat Masterpiece",
      desc: "Seamless panoramic spreads with thick museum-grade pages",
      img: "/images/album12.jpg",
      type: "Premium"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fff5f5] via-[#fff1f1] to-[#ffe4e6]">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Wedding Album Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each album is crafted with premium materials and archival-quality printing to preserve your memories for generations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <div key={album.id} className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
              {/* Album Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={`${album.img}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`}
                  alt={album.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Album Badge */}
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-pink-600 shadow-sm">
                {album.type}
              </div>

           
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {/* <h3 className="text-xl font-semibold text-white">{album.title}</h3>
                <p className="text-sm text-gray-200 mt-1">{album.desc}</p> */}
                  <button className="cursor-pointer mt-3 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium rounded-full transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>

              {/* Album Info (Visible by default) */}
              <div className="bg-white p-5">
                <h3 className="text-lg font-semibold text-gray-900">{album.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{album.desc}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-pink-600 font-medium">From $50</span>
                  <button className="text-sm text-gray-700 hover:text-pink-600 flex items-center">
                    Quick View 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="cursor-pointer px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300">
            View All Collections
          </button>
          <p className="mt-4 text-lg text-gray-500">
            Custom album designs available - <a href="#" className="text-pink-600 hover:underline">Book a consultation</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeddingGallery;








