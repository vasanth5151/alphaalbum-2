import React, { useState, useEffect, useRef } from 'react';
import { FaCamera, FaSearch, FaUser, FaHeart, FaBell, FaBars, FaChevronDown, FaPlus } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [createMenuOpen, setCreateMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const userMenuRef = useRef();
  const createMenuRef = useRef();
  const mobileMenuRef = useRef();
  
  // Handle click outside for all menus
  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
      if (createMenuRef.current && !createMenuRef.current.contains(event.target)) {
        setCreateMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
         
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <FaCamera className="text-pink-600 text-2xl" />
              <span className="ml-2 text-xl font-bold text-pink-600">Alpha Albums</span>
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink 
                to="/explore" 
                className={({ isActive }) => 
                  `font-medium transition-colors ${
                    isActive ? 'text-pink-600' : 'text-gray-700 hover:text-pink-600'
                  }`
                }
              >
                Explore
              </NavLink>
              <NavLink 
                to="/albums" 
                className={({ isActive }) => 
                  `font-medium transition-colors ${
                    isActive ? 'text-pink-600' : 'text-gray-700 hover:text-pink-600'
                  }`
                }
              >
                Albums
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `font-medium transition-colors ${
                    isActive ? 'text-pink-600' : 'text-gray-700 hover:text-pink-600'
                  }`
                }
              >
                Contact
              </NavLink>
              
              {/* Create Dropdown */}
              <div className="relative" ref={createMenuRef}>
                <button 
                  onClick={() => setCreateMenuOpen(!createMenuOpen)}
                  className="flex items-center text-gray-700 hover:text-pink-600 font-medium focus:outline-none"
                >
                  <span>Create</span>
                  <FaChevronDown className={`ml-1 text-xs transition-transform duration-200 ${createMenuOpen ? 'transform rotate-180' : ''}`} />
                </button>
                
                {createMenuOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link 
                      to="/create-album" 
                      className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                      onClick={() => setCreateMenuOpen(false)}
                    >
                      New Album
                    </Link>
                    <Link 
                      to="/upload-photos" 
                      className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                      onClick={() => setCreateMenuOpen(false)}
                    >
                      Upload Photos
                    </Link>
                    <Link 
                      to="/create-story" 
                      className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                      onClick={() => setCreateMenuOpen(false)}
                    >
                      Create Story
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Search and User Section */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-pink-500 focus-within:bg-white">
              <FaSearch className="text-gray-500 mr-2" />
              <input 
                type="text" 
                placeholder="Search weddings, albums..." 
                className="bg-transparent border-none focus:outline-none text-sm w-64 placeholder-gray-400"
              />
            </div>
            
            
            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/favorites')}
                className="text-gray-700 hover:text-pink-600 relative transition-colors duration-200"
              >
                <FaHeart className="text-xl" />
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
              </button>
              <button 
                onClick={() => navigate('/notifications')}
                className="text-gray-700 hover:text-pink-600 relative transition-colors duration-200"
              >
                <FaBell className="text-xl" />
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">5</span>
              </button>
              
              {/* User Dropdown */}
              <div className="relative" ref={userMenuRef}>
                <button 
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center text-gray-700 hover:text-pink-600 focus:outline-none transition-colors duration-200"
                >
                  <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition-colors duration-200">
                    <FaUser className="text-pink-600" />
                  </div>
                </button>
                
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Your Profile
                    </Link>
                    <Link 
                      to="/help" 
                      className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Help
                    </Link>
                    <div className="border-t border-gray-100"></div>
                    <button 
                      onClick={() => {
                        // Handle sign out logic
                        navigate('/login');
                        setUserMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-700 hover:text-pink-600 focus:outline-none transition-colors duration-200"
              >
                <FaBars className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Search */}
        <div className="mt-3 md:hidden">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-pink-500 focus-within:bg-white">
            <FaSearch className="text-gray-500 mr-2" />
            <input 
              type="text" 
              placeholder="Search weddings, albums..." 
              className="bg-transparent border-none focus:outline-none text-sm w-full placeholder-gray-400"
            />
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div ref={mobileMenuRef}>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-3">
              <NavLink 
                to="/explore" 
                className={({ isActive }) => 
                  `block py-2 font-medium transition-colors duration-200 ${
                    isActive ? 'text-pink-600' : 'text-gray-700 hover:text-pink-600'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Explore
              </NavLink>
              <NavLink 
                to="/albums" 
                className={({ isActive }) => 
                  `block py-2 font-medium transition-colors duration-200 ${
                    isActive ? 'text-pink-600' : 'text-gray-700 hover:text-pink-600'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Albums
              </NavLink>
              <NavLink 
                to="/photographers" 
                className={({ isActive }) => 
                  `block py-2 font-medium transition-colors duration-200 ${
                    isActive ? 'text-pink-600' : 'text-gray-700 hover:text-pink-600'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Photographers
              </NavLink>
              
              <div className="mt-2 pt-2 border-t border-gray-200">
                <Link 
                  to="/create-album" 
                  className="block py-2 text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  New Album
                </Link>
                <Link 
                  to="/upload-photos" 
                  className="block py-2 text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Upload Photos
                </Link>
              </div>
              
              <div className="mt-2 pt-2 border-t border-gray-200">
                <Link 
                  to="/profile" 
                  className="block py-2 text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Your Profile
                </Link>
                <Link 
                  to="/settings" 
                  className="block py-2 text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Account Settings
                </Link>
                <button 
                  onClick={() => {
                    // Handle sign out logic
                    navigate('/login');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200"
                >
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}