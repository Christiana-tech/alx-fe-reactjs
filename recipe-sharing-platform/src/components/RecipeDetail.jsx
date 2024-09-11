import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import recipesData from '../data.json'; 

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

 
  useEffect(() => {
    const selectedRecipe = recipesData.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <img className="w-full max-w-lg mx-auto mb-6 rounded-md shalow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out" src={recipe.image} alt={recipe.title} />
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-lg">{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-lg mb-2">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
