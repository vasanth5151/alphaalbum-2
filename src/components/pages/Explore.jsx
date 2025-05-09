import React from 'react';

const Explore = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    {/* Page Header */}
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Albums</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Discover new albums, trending artists, and personalized recommendations
      </p>
    </div>

    {/* Search Bar */}
    <div className="max-w-xl mx-auto mb-12">
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search albums, artists, or genres..." 
          className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        />
        <button className="absolute right-3 top-3 text-gray-500 hover:text-pink-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>

    {/* Featured Section */}
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Albums</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Album Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <img 
            src="/images/album2.jpg" 
            alt="Album Cover" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-medium text-lg text-gray-900 mb-1">Album Title</h3>
            <p className="text-gray-600 text-sm">Artist Name</p>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-pink-600 font-medium">$9.99</span>
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded text-sm">
                Preview
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <img 
            src="/images/album3.jpg" 
            alt="Album Cover" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-medium text-lg text-gray-900 mb-1">Album Title</h3>
            <p className="text-gray-600 text-sm">Artist Name</p>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-pink-600 font-medium">$9.99</span>
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded text-sm">
                Preview
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <img 
            src="/images/album4.jpg" 
            alt="Album Cover" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-medium text-lg text-gray-900 mb-1">Album Title</h3>
            <p className="text-gray-600 text-sm">Artist Name</p>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-pink-600 font-medium">$9.99</span>
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded text-sm">
                Preview
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <img 
            src="/images/album6.jpg" 
            alt="Album Cover" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-medium text-lg text-gray-900 mb-1">Album Title</h3>
            <p className="text-gray-600 text-sm">Artist Name</p>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-pink-600 font-medium">$9.99</span>
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded text-sm">
                Preview
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <img 
            src="/images/album7.jpg" 
            alt="Album Cover" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-medium text-lg text-gray-900 mb-1">Album Title</h3>
            <p className="text-gray-600 text-sm">Artist Name</p>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-pink-600 font-medium">$9.99</span>
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded text-sm">
                Preview
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <img 
            src="/images/album8.jpg" 
            alt="Album Cover" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-medium text-lg text-gray-900 mb-1">Album Title</h3>
            <p className="text-gray-600 text-sm">Artist Name</p>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-pink-600 font-medium">$9.99</span>
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded text-sm">
                Preview
              </button>
            </div>
          </div>
        </div>
        
        {/* Repeat for 3 more album cards */}
      </div>
    </section>

    {/* Genre Categories */}
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Browse by Genre</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <a href="#" className="bg-gray-100 hover:bg-pink-100 rounded-lg p-4 text-center transition-colors">
          <div className="text-pink-600 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          </div>
          <span className="font-medium text-gray-800">Pop</span>
        </a>
      </div>
    </section>

    {/* New Releases */}
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">New Releases</h2>
        <a href="#" className="text-pink-600 hover:text-pink-700 font-medium">View All</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img 
            src="/images/album5.jpg" 
            alt="Album Cover" 
            className="w-16 h-16 rounded"
          />
          <div>
            <h3 className="font-medium text-gray-900">New Album</h3>
            <p className="text-sm text-gray-600">Artist Name</p>
            <div className="mt-1 flex items-center text-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs text-gray-600 ml-1">4.8 (120)</span>
            </div>
          </div>
        </div>


        <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img 
            src="/images/album5.jpg" 
            alt="Album Cover" 
            className="w-16 h-16 rounded"
          />
          <div>
            <h3 className="font-medium text-gray-900">New Album</h3>
            <p className="text-sm text-gray-600">Artist Name</p>
            <div className="mt-1 flex items-center text-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs text-gray-600 ml-1">4.8 (120)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default Explore; 