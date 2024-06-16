import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/sadplate.png';

const NoResultsPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">No Results Found</h2>
        <p className="text-lg text-gray-600 mb-4">We couldn{"'"}t find any recipes matching your search criteria.</p>
        <ul className="text-left text-gray-600 mb-4">
          <li>Check for spelling errors or typos in your search.</li>
          <li>Try searching for different keywords or categories.</li>
          <li>Our database might not have the recipe you are looking for.</li>
        </ul>
        <p className="text-lg text-gray-600">Please <Link to="/" className="text-blue-500 hover:text-blue-700">go back to home</Link> and try again.</p>
      </div>
    </div>
  );
}

export default NoResultsPage;
