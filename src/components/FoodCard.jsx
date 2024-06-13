import React, { useState } from 'react';
import { useContext } from 'react';
import IdContext from '../Context/IdContext';
import {Link} from 'react-router-dom'


function FoodCard({ image, name, category ,id }) {


  const {setId} = useContext(IdContext);
  
  

   function fetchFoodDetails() {
    setId(id)
   
  }

  return (
    <Link to='/foodItem'>

    
    <div 
      className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4 w-76 h-80 shadow-orange-100 hover:shadow-xl transform transition-transform hover:scale-105 duration-300"
      onClick={fetchFoodDetails}
    >
      <div className="relative h-2/3">
        <img className="absolute inset-0 w-full h-full object-cover" src={image} alt={name} />
      </div>
      <div className="p-4 h-1/3 pl-7 bg-gradient-to-r from-white to-orange-50">
        <h2 className="text-xl font-semibold text-gray-800 truncate">{name}</h2>
        <p className="text-gray-600">{category}</p>
      </div>
    </div>
    </Link>
  );
}

export default FoodCard;
