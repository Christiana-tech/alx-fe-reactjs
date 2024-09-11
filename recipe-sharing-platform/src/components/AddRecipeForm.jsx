
import { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !instructions) {
      setError('All fields are required');
      return;
    }

    // Further validation: Check that ingredients are in a list format
    const ingredientList = ingredients.split('\n');
    if (ingredientList.length < 2) {
      setError('Please provide at least two ingredients');
      return;
    }

    // Create the new recipe object
    const newRecipe = {
      title,
      ingredients: ingredientList,
      instructions: instructions.split('\n'), // Split instructions into an array
    };

    // Here you would typically send the newRecipe to your server or state management
    console.log(newRecipe);
    
    // Reset the form
    setTitle('');
    setIngredients('');
    setInstructions('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Add a New Recipe</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="title">Recipe Title</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="ingredients">Ingredients (one per line)</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            id="ingredients"
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="instructions">Instructions (one per line)</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            id="instructions"
            rows="4"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          type="submit"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
