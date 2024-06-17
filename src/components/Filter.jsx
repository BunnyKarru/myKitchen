import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';

function Filter() {
  const [activeFilter, setActiveFilter] = useState('Chicken');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const filters = [
    'Breakfast', 'Vegetarian', 'Chicken', 'Lamb',
    'Dessert', 'Miscellaneous', 'Starter', 'Seafood', 'Side'
  ];

  async function callFilters() {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeFilter}`);
      const result = await response.json();
      
      setData(result.meals);
      setIsLoading(false);
      
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    callFilters();
  }, [activeFilter]);

  return (
    <div className='container mx-auto px-4 mt-6'>
      <div className="flex mb-6">
        <p className="font-bold font-sans text-2xl text-gray-900 pl-4 md:pl-0">
          Food is my love language. What's yours?
        </p>
      </div>

      <div className="bg-white flex flex-col">
        {/* For large screens */}
        <div className="hidden md:flex space-x-3 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`${
                activeFilter === filter
                  ? 'border-orange-500 font-semibold shadow-sm shadow-orange-100'
                  : 'border-gray-200 shadow-sm shadow-gray-100'
              } text-gray-700 px-3 py-1 shadow-sm transition duration-200 ease-in-out hover:bg-orange-200 bg-white rounded-3xl border-2`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* For small screens */}
        <div className="md:hidden w-full">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md w-full text-left flex justify-between items-center"
          >
            {activeFilter} <span className="ml-auto">&#9660;</span>
          </button>
          <div
            className={`mt-2 bg-white border border-gray-300 rounded-md shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
              isDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setIsDropdownOpen(false);
                }}
                className={`${
                  activeFilter === filter
                    ? 'bg-orange-200 font-semibold'
                    : 'bg-white'
                } text-gray-700 px-4 py-2 w-full text-left`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 justify-center items-center">
        {isLoading ? (
          <div className="w-full flex justify-center items-center">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-orange-400"></div>
          </div>
        ) : (
          data.map((meal, index) => (
            <FoodCard
              key={index}
              image={meal.strMealThumb}
              name={meal.strMeal}
              category={activeFilter}
              id={meal.idMeal}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Filter;

