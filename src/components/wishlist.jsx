import React, { useContext } from 'react'
import Cart from '../Context/Cart'
import { useNavigate } from 'react-router-dom'

function Wishlist() {
  const navigator = useNavigate()
    const {cart} = useContext(Cart)
  if( cart.length>0){
    return (
        <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Your Whish List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cart.map((meal) => (
            <div key={meal.idMeal} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-95 transition-transform" onClick={()=>navigator(`/fooditem/${meal.idMeal}`)}>
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
    )

  }
  else{
    return(
      <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Your Whish List</h1>
</div>
    )
  }
}

export default Wishlist
