import { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

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
    if (!steps) {
      newErrors.steps = 'Steps are required';
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

    // Process new recipe submission
    const newRecipe = {
      title,
      ingredients: ingredients.split('\n'),
      steps: steps.split('\n'), // Changed to steps
    };

    console.log(newRecipe);

    // Reset the form after submission
    setTitle('');
    setIngredients('');
    setSteps(''); // Changed to steps
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
          {errors.title && <p className="text-red-500">{errors.title}</p>}
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
          {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="steps">Steps (one per line)</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            id="steps"
            rows="4"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          {errors.steps && <p className="text-red-500">{errors.steps}</p>}
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
