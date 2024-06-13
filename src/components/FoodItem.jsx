import React, { useState, useEffect, useContext } from 'react';
import IdContext from '../Context/IdContext';

function FoodItem() {
  const { id } = useContext(IdContext);
  const [foodDetails, setFoodDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const result = await response.json();
        if (result.meals && result.meals.length > 0) {
          setFoodDetails(result.meals[0]);
        } else {
          console.error('No meal found');
        }
      } catch (error) {
        console.error('Error fetching food details:', error);
      }
    }

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!foodDetails) {
    return (
      <div className="w-full flex justify-center items-center">
      <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-orange-400"></div>
    </div>
    );
  }

  // Extract ingredients and measurements
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = foodDetails[`strIngredient${i}`];
    const measure = foodDetails[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  // Split the recipe instructions into steps
  const recipeSteps = foodDetails.strInstructions.split('.').filter(step => step.trim() !== '');

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-7xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="relative">
            <img src={foodDetails.strMealThumb} alt={foodDetails.strMeal} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center">{foodDetails.strMeal}</h1>
            </div>
          </div>
          <div className="p-6 md:bg-gradient-to-r from-white to-orange-50">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Recipe Details</h2>
            <p className="text-lg text-gray-600 mb-1">Name  : {foodDetails.strMeal}</p>
            <p className="text-lg text-gray-600 mb-1">Category: {foodDetails.strCategory}</p>
            <p className="text-lg text-gray-600 mb-1">Cuisine: {foodDetails.strArea}</p>
            <a href={foodDetails.strYoutube} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-lg mt-2 block">
              Watch Recipe Video
            </a>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-600">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="mb-1">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Recipe</h2>
            <ol className="list-decimal list-inside text-gray-600 leading-relaxed">
              {recipeSteps.map((step, index) => (
                <li key={index} className="mb-4">{step.trim()}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
