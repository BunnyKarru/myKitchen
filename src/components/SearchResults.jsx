import React, { useState, useEffect, useContext } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';

function SearchResults() {


  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate =useNavigate();
const {str}= useParams('str')
console.log(str)
const query=str

  useEffect(() => {
    async function fetchResults() {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const result = await response.json();
        if (result.meals) {
          setResults(result.meals);
        } else {
          setResults([]);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    }

 
    if (query) {
      fetchResults();
    } else {
      navigate('/')
    }
  }, [query]);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center">
      <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-orange-400"></div>
    </div>
    );
  }

  if (results.length === 0) {
    navigate('/noresults')
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Search Results for "{query}"</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {results.map((meal) => (
          <div key={meal.idMeal} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-95 transition-transform" onClick={()=>navigate(`/fooditem/${meal.idMeal}`)}>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-800">{meal.strMeal}</h2>
              <p className="text-gray-600">{meal.strCategory}</p>
              <p className="text-gray-600">{meal.strArea}</p>
              <p className="text-blue-500 hover:text-blue-700 mt-4 inline-block cursor-pointer">
              View Recipe

              </p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
