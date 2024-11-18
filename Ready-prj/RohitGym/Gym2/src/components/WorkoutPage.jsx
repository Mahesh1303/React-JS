// WorkoutPage.jsx
import React, { useState } from 'react';

const WorkoutPage = () => {
  const [workoutData, setWorkoutData] = useState({
    workoutName: '',
    duration: '',
    calories: '',
    intensity: '',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkoutData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save workout data
    console.log('Workout logged:', workoutData);
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl mb-4">Log Workout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="workoutName"
          placeholder="Workout Name"
          value={workoutData.workoutName}
          onChange={handleInputChange}
          className="mb-3 w-full"
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          value={workoutData.duration}
          onChange={handleInputChange}
          className="mb-3 w-full"
        />
        <input
          type="number"
          name="calories"
          placeholder="Calories Burnt"
          value={workoutData.calories}
          onChange={handleInputChange}
          className="mb-3 w-full"
        />
        <input
          type="text"
          name="intensity"
          placeholder="Intensity Level"
          value={workoutData.intensity}
          onChange={handleInputChange}
          className="mb-3 w-full"
        />
        <input
          type="date"
          name="date"
          value={workoutData.date}
          onChange={handleInputChange}
          className="mb-3 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Log Workout
        </button>
      </form>
      {/* Summary of past workouts can be displayed here */}
    </div>
  );
};

export default WorkoutPage;