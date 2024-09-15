import { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [Steps, setSteps] = useState('');
  const [errors, setErrors] = useState({}); // State to store validation errors

  // Validation function
  const validate = () => {
    const newErrors = {};
    
    if (!title) {
      newErrors.title = 'Title is required';
    }
    if (!ingredients) {
      newErrors.ingredients = 'Ingredients are required';
    } else if (ingredients.split('\n').length < 2) {
      newErrors.ingredients = 'Please provide at least two ingredients';
    }
    if (!instructions) {
      newErrors.instructions = 'Instructions are required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // If valid, create the new recipe object
    const newRecipe = {
      title,
      ingredients: ingredients.split('\n'),
      instructions: instructions.split('\n'),
    };

    // Here you would typically send the newRecipe to your server or state management
    console.log(newRecipe);

    // Reset form fields and errors
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="title">Recipe Title</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>} {/* Display title error */}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="ingredients">Ingredients (one per line)</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            id="ingredients"
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>} {/* Display ingredients error */}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="instructions">Instructions (one per line)</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            id="instructions"
            rows="4"
            value={instructions}
            onChange={(e) => setSteps(e.target.value)}
          />
          {errors.instructions && <p className="text-red-500">{errors.instructions}</p>} {/* Display instructions error */}
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
