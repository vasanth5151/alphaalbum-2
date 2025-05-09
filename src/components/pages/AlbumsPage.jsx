import React, { useState } from 'react';
import { FaSearch, FaFilter, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const AlbumsPage = () => {
  // Sample album data
  const [albums, setAlbums] = useState([
    { 
      id: 1, 
      title: 'Sarah & Michael Wedding Album', 
      photos: 24, 
      date: '2023-06-15', 
      cover: '/images/album2.jpg',
      images: Array(24).fill().map((_, i) => ({
        id: i + 1,
        url: `/images/album${(i % 5) + 1}.jpg`, // Sample images 1-5
        caption: `Summer photo ${i + 1}`
      }))
    },
    { 
      id: 2, 
      title: 'Wedding Custom Album', 
      photos: 20, 
      date: '2023-05-20', 
      cover: '/images/album4.jpg',
      images: Array(20).fill().map((_, i) => ({
        id: i + 1,
        url: `/images/album${(i % 5) + 1}.jpg`,
        caption: `Wedding photo ${i + 1}`
      }))
    },
    { 
      id: 3, 
      title: 'Anitha & John Wedding Album', 
      photos: 18, 
      date: '2024-05-20', 
      cover: '/images/album8.jpg',
      images: Array(20).fill().map((_, i) => ({
        id: i + 1,
        url: `/images/album${(i % 5) + 1}.jpg`,
        caption: `Wedding photo ${i + 1}`
      }))
    },
    { 
      id: 4, 
      title: 'Arun & Priya Wedding Album', 
      photos: 20, 
      date: '2025-03-20', 
      cover: '/images/album9.jpg',
      images: Array(20).fill().map((_, i) => ({
        id: i + 1,
        url: `/images/album${(i % 5) + 1}.jpg`,
        caption: `Wedding photo ${i + 1}`
      }))
    },
    { 
      id: 5, 
      title: 'Gokul & Priya Wedding Album', 
      photos: 22, 
      date: '2025-03-20', 
      cover: '/images/album11.jpg',
      images: Array(20).fill().map((_, i) => ({
        id: i + 1,
        url: `/images/album${(i % 5) + 1}.jpg`,
        caption: `Wedding photo ${i + 1}`
      }))
    },
    { 
      id: 6, 
      title: 'John & Sarah Wedding Album', 
      photos: 25, 
      date: '2025-03-20', 
      cover: '/images/album12.jpg',
      images: Array(20).fill().map((_, i) => ({
        id: i + 1,
        url: `/images/album${(i % 5) + 1}.jpg`,
        caption: `Wedding photo ${i + 1}`
      }))
    },
    { 
      id: 6, 
      title: 'John & Sarah Wedding Album', 
      photos: 25, 
      date: '2025-03-20', 
      cover: '/images/album12.jpg',
      images: Array(20).fill().map((_, i) => ({
        id: i + 1,
        url: `/images/album${(i % 5) + 1}.jpg`,
        caption: `Wedding photo ${i + 1}`
      }))
    },
  ]);

  // State for selected album
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const albumsPerPage = 6;
  const totalPages = Math.ceil(albums.length / albumsPerPage);

  // Sort options
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  // Search functionality
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered and sorted albums
  const filteredAlbums = albums
    .filter(album => album.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'title') {
        return sortOrder === 'asc' 
          ? a.title.localeCompare(b.title) 
          : b.title.localeCompare(a.title);
      } else {
        return sortOrder === 'asc' 
          ? new Date(a.date) - new Date(b.date) 
          : new Date(b.date) - new Date(a.date);
      }
    });

  // Pagination logic
  const indexOfLastAlbum = currentPage * albumsPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
  const currentAlbums = filteredAlbums.slice(indexOfFirstAlbum, indexOfLastAlbum);

  // Handle album selection
  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  // Close photo gallery view
  const handleCloseGallery = () => {
    setSelectedAlbum(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {selectedAlbum ? (
        // Photo Gallery View
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedAlbum.title} - {selectedAlbum.photos} photos
            </h2>
            <button 
              onClick={handleCloseGallery}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              <FaTimes className="text-gray-600" size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {selectedAlbum.images.map((image) => (
              <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <p className="text-sm text-gray-600">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Albums List View
        <>
          {/* Header Section */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Albums Collection</h1>
            
            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="relative w-full md:w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search albums..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <span className="mr-2 text-gray-600">Sort by:</span>
                  <select
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="date">Date</option>
                    <option value="title">Title</option>
                  </select>
                </div>
                
                <button
                  className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors"
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                >
                  <FaFilter />
                  <span>{sortOrder === 'asc' ? 'A-Z' : 'Z-A'}</span>
                </button>
              </div>
            </div>
          </header>

          {/* Albums Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentAlbums.map((album) => (
              <div 
                key={album.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => handleAlbumClick(album)}
              >
                <div className="relative">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-70 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg">{album.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>{album.photos} photos</span>
                    <span>{new Date(album.date).toLocaleDateString()}</span>
                  </div>
                  <button className="mt-3 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg transition-colors duration-200">
                    View Album
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'}`}
            >
              <FaChevronLeft />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full ${currentPage === i + 1 ? 'bg-pink-600 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
              >
                {i + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'}`}
            >
              <FaChevronRight />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AlbumsPage;