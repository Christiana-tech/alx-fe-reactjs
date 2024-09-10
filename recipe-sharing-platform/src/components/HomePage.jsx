import React, { useState, useEffect }from 'react'
import data from '../data.json';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        setRecipes(data);
      }, []);

      return (
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center my-8">Recipe Sharing Platform</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                  <p className="text-gray-600 mb-4">{recipe.summary}</p>
                  <a href={`/recipe/${recipe.id}`} className="text-indigo-500 hover:text-indigo-700">
                    View Recipe
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default HomePage;