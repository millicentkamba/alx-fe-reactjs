import React, { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim() || ingredients.split(",").length < 2)
      newErrors.ingredients = "At least 2 ingredients, separated by commas";
    if (!instructions.trim() || instructions.split("\n").length < 1)
      newErrors.instructions = "Instructions are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Prepare recipe object
    const newRecipe = {
      id: Date.now(), // simple unique ID
      title,
      summary: instructions.split("\n")[0], // first line as summary
      image: "https://via.placeholder.com/300x200", // placeholder image
      ingredients: ingredients.split(",").map((ing) => ing.trim()),
      instructions: instructions.split("\n").map((step) => step.trim()),
    };

    // Pass new recipe to parent handler
    if (onAddRecipe) onAddRecipe(newRecipe);

    // Clear form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Add New Recipe
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Recipe Title</label>
          <input
            type="text"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Ingredients (comma separated)</label>
          <textarea
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={3}
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Instructions (line break separated)</label>
          <textarea
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.instructions ? "border-red-500" : "border-gray-300"
            }`}
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows={5}
          />
          {errors.instructions && <p className="text-red-500 text-sm">{errors.instructions}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
