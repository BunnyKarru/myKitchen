import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/icons8-heart-100.png';

function Header() {

  const [str, setStr] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (str.trim()) {
      
      navigate(`/searchResults/${str}`); // Update the context with the query string
    }
  };

  return (
    <header className="w-full h-fit flex justify-between p-4 md:px-6 bg-white shadow-md">
      {/* Logo and Brand */}
      <div className="flex items-center space-x-2 cursor-pointer md:w-auto">
        <Link to="/" className="flex items-center space-x-1 hover:text-orange-600">
          
          <span className="text-xl md:text-2xl font-bold text-gray-900">my</span>
          <span className="text-xl md:text-2xl font-bold text-orange-500">Kitchen</span>
        </Link>
      </div>

      {/* Search Form */}
      <form className="flex-grow md:max-w-sm ml-4 md:ml-6" onSubmit={handleSearch}>
        <div className=" flex items-center space-x-2">
          <input
            type="search"
            className="w-full p-2 pr-10 rounded border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={str}
            onChange={(e) => setStr(e.target.value)}
            placeholder="Search for a recipe..."
          />
          <button
            type="submit"
            className=" right-0 p-2 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Search
          </button>
        </div>
      </form>

      {/* Favorite Icon */}
      <div className="hidden md:flex items-center">
        <Link to="/WishList" className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition duration-300">
          <img src={logo}  className="w-6 h-6 bg-re" alt="Favorite" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
