import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-800 px-4 sm:px-6 lg:px-10 py-4">
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="flex items-center gap-2 lg:gap-3 text-white">
            <span className="material-symbols-outlined text-blue-600 text-2xl lg:text-3xl">
              sailing
            </span>
            <h1 className="text-white text-lg lg:text-xl font-bold">Cruise News Digest</h1>
          </div>
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm">
            <a className="text-gray-300 hover:text-white transition-colors" href="#">Home</a>
            <a className="text-white font-semibold" href="#">Top Stories</a>
            <a className="text-gray-300 hover:text-white transition-colors" href="#">Cruise Lines</a>
            <a className="text-gray-300 hover:text-white transition-colors" href="#">Topics</a>
            <a className="text-gray-300 hover:text-white transition-colors" href="#">About</a>
          </nav>
        </div>
        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center justify-center rounded-md h-10 w-10 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </header>

      {/* Mobile sidebar overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 md:hidden"
          onClick={closeMobileMenu}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50"></div>
          
          {/* Sidebar */}
          <div className="fixed left-0 top-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <div className="flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-blue-600 text-2xl">
                  sailing
                </span>
                <h2 className="text-lg font-bold">Menu</h2>
              </div>
              <button 
                onClick={closeMobileMenu}
                className="flex items-center justify-center rounded-md h-8 w-8 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
            
            <nav className="p-4">
              <div className="flex flex-col space-y-4">
                <a 
                  className="text-gray-300 hover:text-white transition-colors py-2 px-3 rounded-md hover:bg-gray-800" 
                  href="#"
                  onClick={closeMobileMenu}
                >
                  Home
                </a>
                <a 
                  className="text-white font-semibold py-2 px-3 rounded-md bg-gray-800" 
                  href="#"
                  onClick={closeMobileMenu}
                >
                  Top Stories
                </a>
                <a 
                  className="text-gray-300 hover:text-white transition-colors py-2 px-3 rounded-md hover:bg-gray-800" 
                  href="#"
                  onClick={closeMobileMenu}
                >
                  Cruise Lines
                </a>
                <a 
                  className="text-gray-300 hover:text-white transition-colors py-2 px-3 rounded-md hover:bg-gray-800" 
                  href="#"
                  onClick={closeMobileMenu}
                >
                  Topics
                </a>
                <a 
                  className="text-gray-300 hover:text-white transition-colors py-2 px-3 rounded-md hover:bg-gray-800" 
                  href="#"
                  onClick={closeMobileMenu}
                >
                  About
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
