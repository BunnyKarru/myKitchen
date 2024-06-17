import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import IdContext from '../Context/IdContext';

function FoodCard({ image, name, category, id }) {
  const { setId } = useContext(IdContext);

  function fetchFoodDetails() {
    setId(id);
  }

  return (
    <Link to='/foodItem'>
      <div
        className="w-full sm:w-full md:max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-2 sm:m-4 h-80 shadow-orange-100 hover:shadow-xl transform transition-transform hover:scale-105 duration-300"
        onClick={fetchFoodDetails}
      >
        <div className="relative h-2/3">
          <img className="absolute inset-0 w-full h-full object-cover" src={image} alt={name} />
        </div>
        <div className="p-3 sm:p-4 h-1/3 pl-5 sm:pl-7 bg-gradient-to-r from-white to-orange-50">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">{name}</h2>
          <p className="text-sm sm:text-base text-gray-600">{category}</p>
        </div>
      </div>
    </Link>
  );
}

export default FoodCard;
