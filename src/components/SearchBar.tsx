import React, { useState } from 'react';

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className = '' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  // Navigation logic for search
  const handleSearchAndNavigate = () => {
    const keyword = searchTerm.trim().toLowerCase();
    if (!keyword) return;
    if (["home", "/", "index"].includes(keyword)) {
      window.location.href = "/";
      return;
    }
    if (["services", "service"].includes(keyword)) {
      window.location.href = "/services";
      return;
    }
    if (["about", "about us"].includes(keyword)) {
      window.location.href = "/about";
      return;
    }
    if (["portfolio", "projects", "project"].includes(keyword)) {
      window.location.href = "/portfolio";
      return;
    }
    if (["contact", "contact us"].includes(keyword)) {
      window.location.href = "/contact";
      return;
    }
    if (["blog"].includes(keyword)) {
      alert("No direct blog page. Use navigation links.");
      return;
    }
    alert("No matching page found.");
  };

  return (
    <>
      <button
        className={`ml-4 text-black text-lg p-2 rounded-full hover:bg-gray-200 transition-colors focus:outline-none ${className}`}
        onClick={() => setShowSearch((prev) => !prev)}
        aria-label="Toggle search"
        style={{ lineHeight: 1 }}
      >
        <i className="fas fa-search"></i>
      </button>
      {showSearch && (
        <div className="absolute right-0 top-12 bg-white shadow-2xl rounded-xl flex items-center px-4 py-3 w-72 z-50 animate-fade-in-up border border-gray-200">
          <input
            type="text"
            placeholder="Type to search..."
            className="bg-transparent outline-none px-2 py-2 text-gray-900 font-semibold text-md w-full"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleSearchAndNavigate(); }}
            autoFocus
          />
          <button
            className="ml-2 text-black text-lg px-1 focus:outline-none"
            onClick={handleSearchAndNavigate}
            aria-label="Search"
          >
            <i className="fas fa-search"></i>
          </button>
          <button
            className="ml-2 text-gray-400 hover:text-gray-700 text-lg px-1 focus:outline-none"
            onClick={() => { setShowSearch(false); setSearchTerm(""); }}
            aria-label="Close search"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default SearchBar;
