// CaloriesDashboard.jsx
import React, { useState, useEffect } from 'react';

const CaloriesDashboard = () => {
  const [meals, setMeals] = useState([]);
  const [newMeal, setNewMeal] = useState({ name: '', foodItems: '', calories: '' });
  const [dailyGoal, setDailyGoal] = useState(2000);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    // Load meals from localStorage
    const savedMeals = JSON.parse(localStorage.getItem('meals')) || [];
    setMeals(savedMeals);
  }, []);

  useEffect(() => {
    // Save meals to localStorage
    localStorage.setItem('meals', JSON.stringify(meals));
  }, [meals]);

  const handleAddMeal = (e) => {
    e.preventDefault();
    if (newMeal.name && newMeal.foodItems && newMeal.calories) {
      const updatedMeals = [...meals, { ...newMeal, date: selectedDate.toISOString() }];
      setMeals(updatedMeals);
      setNewMeal({ name: '', foodItems: '', calories: '' });
    }
  };

  const getTotalCalories = (date) => {
    return meals
      .filter(meal => new Date(meal.date).toDateString() === date.toDateString())
      .reduce((sum, meal) => sum + parseInt(meal.calories), 0);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Calories Dashboard</h1>
      
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Real-Time Calorie Tracker</h2>
        <div className="text-4xl font-bold mb-2">
          {getTotalCalories(selectedDate)} / {dailyGoal} kcal
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${Math.min((getTotalCalories(selectedDate) / dailyGoal) * 100, 100)}%`}}></div>
        </div>
        <input
          type="number"
          value={dailyGoal}
          onChange={(e) => setDailyGoal(parseInt(e.target.value))}
          className="mt-4 p-2 border rounded"
          placeholder="Set daily calorie goal"
        />
      </div>

      <form onSubmit={handleAddMeal} className="space-y-4">
        <input
          type="text"
          value={newMeal.name}
          onChange={(e) => setNewMeal({ ...newMeal, name: e.target.value })}
          placeholder="Meal name"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={newMeal.foodItems}
          onChange={(e) => setNewMeal({ ...newMeal, foodItems: e.target.value })}
          placeholder="Food items"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          value={newMeal.calories}
          onChange={(e) => setNewMeal({ ...newMeal, calories: e.target.value })}
          placeholder="Calories"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Add Meal</button>
      </form>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Today's Meals</h2>
        {meals.filter(meal => new Date(meal.date).toDateString() === selectedDate.toDateString()).map((meal, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{meal.name}</h3>
            <p>{meal.foodItems}</p>
            <p>{meal.calories} kcal</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Calorie History</h2>
        {[...new Set(meals.map(meal => new Date(meal.date).toDateString()))].map(date => (
          <div key={date} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{formatDate(date)}</h3>
            <p>Total Calories: {getTotalCalories(new Date(date))} kcal</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaloriesDashboard;