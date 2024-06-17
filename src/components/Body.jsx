import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

function Body() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const meals = [];
        for (let index = 0; index < 4; index++) {
          const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/random.php"
          );
          const result = await response.json();
          meals.push(result.meals[0]);
        }
        setData(meals);
        setIsLoading(false);
      } catch (error) {
        console.log("There was an error", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="container mx-auto px-4 mt-6">
      <div className="mb-4">
        <p className="font-bold text-2xl text-gray-900 text-center md:text-left">
          My kitchen's a little lonely. Maybe you could spice things up?
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
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
              category={meal.strCategory}
              id={meal.idMeal}
            />
          ))
        )}
      </div>
      <div className="w-full h-px bg-gray-300 mt-8 mb-3"></div>
    </section>
  );
}

export default Body;
