// src/components/GoalPage.jsx
import React, { useState } from 'react';

const GoalPage = () => {
  const [goals, setGoals] = useState([]);
  const [goalDescription, setGoalDescription] = useState('');
  const [targetWeight, setTargetWeight] = useState('');
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState('In Progress');

  const handleAddGoal = (e) => {
    e.preventDefault();
    const newGoal = { goalDescription, targetWeight, deadline, status };
    setGoals([...goals, newGoal]);
    setGoalDescription('');
    setTargetWeight('');
    setDeadline('');
  };

  return (
    <div>
      <h2>Fitness Goals</h2>
      <form onSubmit={handleAddGoal}>
        <input
          type="text"
          placeholder="Goal Description"
          value={goalDescription}
          onChange={(e) => setGoalDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Target Weight"
          value={targetWeight}
          onChange={(e) => setTargetWeight(e.target.value)}
          required
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="In Progress">In Progress</option>
          <option value="Achieved">Achieved</option>
        </select>
        <button type="submit">Add Goal</button>
      </form>

      <h3>Your Goals</h3>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>
            {goal.goalDescription} - Target Weight: {goal.targetWeight} lbs, Deadline: {goal.deadline}, Status: {goal.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalPage;
