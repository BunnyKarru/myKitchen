import React from 'react';
import { Link } from 'react-router-dom';
import Body from './Body';

function Home() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-orange-50 to-white min-h-screen p-4">
      <header className="w-full text-center py-8">
        <h1 className="text-3xl font-bold text-orange-600">Welcome to Recipe Haven</h1>
        <p className="text-lg text-gray-700 mt-2">Discover Delicious Recipes</p>
      </header>
      
      <section className="w-full sm:w-3/4 lg:w-1/2 bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          At Recipe Haven, we believe that cooking should be an enjoyable and creative experience. Whether you're a beginner or a seasoned chef, our curated collection of recipes will inspire you to create delicious meals with ease.
        </p>
      </section>

      <Body/>

      <Link to="/recipes" className="mt-6 inline-block bg-orange-600 text-white text-lg font-semibold py-2 px-4 rounded-full shadow-md hover:bg-orange-700 transition duration-300">
        Explore Recipes
      </Link>
    </div>
  );
}

export default Home;
