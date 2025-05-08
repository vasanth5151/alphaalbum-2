import React, { useState } from 'react';
import { FaSearch, FaFilter, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AlbumsPage = () => {
  // Sample album data
  const [albums, setAlbums] = useState([
    { id: 1, title: 'Summer Vacation', photos: 24, date: '2023-06-15', cover: '/images/album2.jpg' },
    { id: 2, title: 'Wedding Day', photos: 56, date: '2023-05-20', cover: '/images/album4.jpg' },
    { id: 3, title: 'Family Reunion', photos: 42, date: '2023-04-10', cover: '/images/album5.jpg' },
    { id: 4, title: 'Mountain Trip', photos: 38, date: '2023-03-05', cover: '/images/album2.jpg' },
    { id: 5, title: 'Beach Party', photos: 31, date: '2023-02-18', cover: '/images/album8.jpg' },
    { id: 6, title: 'Birthday Celebration', photos: 27, date: '2023-01-12', cover: '/images/album9.jpg' },
  ]);

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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
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
          <div key={album.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
    </div>




        
  );
};

export default AlbumsPage;