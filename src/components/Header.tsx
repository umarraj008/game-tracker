// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isAuthenticated: boolean; // Whether the user is logged in or not
  onLogout: () => void; // Function to handle logout
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout }) => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold hover:text-gray-300">
            GameTracker
          </Link>

          {/* Navigation Links */}
          <nav className="space-x-6 hidden md:flex">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/explore" className="hover:text-gray-300">Explore</Link>
            <Link to="/games" className="hover:text-gray-300">My Games</Link>
            <Link to="/wishlist" className="hover:text-gray-300">Wishlist</Link>
            <Link to="/profile" className="hover:text-gray-300">Profile</Link>
          </nav>

          {/* Authentication Links */}
          <div className="space-x-4">
            {isAuthenticated ? (
              <button
                onClick={onLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Log Out
              </button>
            ) : (
              <>
                <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Sign In
                </Link>
                <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
