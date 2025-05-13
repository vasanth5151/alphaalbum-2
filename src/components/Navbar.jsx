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
         
          <div className="flex items-center space-x-6 font-[Outfit]">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <FaCamera className="text-pink-600 text-3xl" />
              <span className="ml-2 text-xl font-bold text-pink-600">Albums by Zerogravity</span>
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
                to="/designinfo" 
                className={({ isActive }) => 
                  `font-medium transition-colors ${
                    isActive ? 'text-pink-600' : 'text-gray-700 hover:text-pink-600'
                  }`
                }
              >
                Design info
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `font-medium transition-colors ${
                    isActive ? 'text-pink-600' : 'text-gray-700 hover:text-pink-600'
                  }`
                }
              >
                About
              </NavLink>
              
              
              
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
            
            
            {/* contact us */}
            <div className="flex items-center space-x-4"> 
              
            <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block w-full text-center font-medium transition-colors px-4 py-3 rounded-md ${
                isActive ? 'bg-pink-600 text-white' : 'bg-pink-500 text-white hover:bg-pink-600'
              }`
            }
          >
            Contact
          </NavLink>
                
                     
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