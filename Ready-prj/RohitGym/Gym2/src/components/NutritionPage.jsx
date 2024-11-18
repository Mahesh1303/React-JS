import React, { useState } from 'react';

const NutritionPage = () => {
  const [mealData, setMealData] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
    date: '',
  });

  const [meals, setMeals] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMealData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMeals([...meals, { ...mealData, id: Date.now() }]);
    setMealData({
      name: '',
      calories: '',
      protein: '',
      carbs: '',
      fats: '',
      date: '',
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Nutrition Tracking</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Meal Name"
            value={mealData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded"
            required
          />
          <input
            type="number"
            name="calories"
            placeholder="Calories"
            value={mealData.calories}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded"
            required
          />
          <input
            type="number"
            name="protein"
            placeholder="Protein (g)"
            value={mealData.protein}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded"
          />
          <input
            type="number"
            name="carbs"
            placeholder="Carbs (g)"
            value={mealData.carbs}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded"
          />
          <input
            type="number"
            name="fats"
            placeholder="Fats (g)"
            value={mealData.fats}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded"
          />
          <input
            type="date"
            name="date"
            value={mealData.date}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-gray-700 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Log Meal
          </button>
        </div>
      </form>

      <h3 className="text-xl font-bold mb-4">Meal History</h3>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meal Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Calories</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Protein (g)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carbs (g)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fats (g)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {meals.map((meal) => (
              <tr key={meal.id}>
                <td className="px-6 py-4 whitespace-nowrap">{meal.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{meal.calories} cal</td>
                <td className="px-6 py-4 whitespace-nowrap">{meal.protein} g</td>
                <td className="px-6 py-4 whitespace-nowrap">{meal.carbs} g</td>
                <td className="px-6 py-4 whitespace-nowrap">{meal.fats} g</td>
                <td className="px-6 py-4 whitespace-nowrap">{meal.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NutritionPage;
