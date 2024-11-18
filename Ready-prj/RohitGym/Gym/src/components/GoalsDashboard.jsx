// GoalsDashboard.jsx
import React, { useState, useEffect } from 'react';

const GoalsDashboard = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({ name: '', date: new Date().toISOString().split('T')[0] });
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    // Load goals from localStorage
    const savedGoals = JSON.parse(localStorage.getItem('goals')) || [];
    setGoals(savedGoals);
  }, []);

  useEffect(() => {
    // Save goals to localStorage
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (newGoal.name && newGoal.date) {
      const updatedGoals = [...goals, { ...newGoal, completed: false }];
      setGoals(updatedGoals);
      setNewGoal({ name: '', date: new Date().toISOString().split('T')[0] });
    }
  };

  const toggleGoalCompletion = (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].completed = !updatedGoals[index].completed;
    setGoals(updatedGoals);
  };

  const getGoalsForDate = (date) => {
    return goals.filter(goal => new Date(goal.date).toDateString() === date.toDateString());
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Goals Dashboard</h1>
      
      <div className="flex space-x-2 overflow-x-auto">
        {[...Array(7)].map((_, i) => {
          const date = new Date(selectedDate);
          date.setDate(date.getDate() - i);
          const goalsForDate = getGoalsForDate(date);
          const completed = goalsForDate.filter(g => g.completed).length;
          const total = goalsForDate.length;
          return (
            <div
              key={i}
              onClick={() => setSelectedDate(date)}
              className={`flex-shrink-0 w-20 h-20 flex flex-col items-center justify-center rounded cursor-pointer ${
                date.toDateString() === selectedDate.toDateString() ? 'bg-blue-500 text-white' : 'bg-white'
              }`}
            >
              <div className="text-sm font-semibold">{formatDate(date)}</div>
              <div className="text-xs">{completed}/{total} goals</div>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleAddGoal} className="space-y-4">
        <input
          type="text"
          value={newGoal.name}
          onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
          placeholder="Goal name"
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          value={newGoal.date}
          onChange={(e) => setNewGoal({ ...newGoal, date: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Set Goal</button>
      </form>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Goals for {formatDate(selectedDate)}</h2>
        {getGoalsForDate(selectedDate).map((goal, index) => (
          <div  key={index} className="flex items-center bg-white p-4 rounded shadow">
            <input
              type="checkbox"
              checked={goal.completed}
              onChange={() => toggleGoalCompletion(goals.indexOf(goal))}
              className="mr-4"
            />
            <span className={goal.completed ? 'line-through' : ''}>{goal.name}</span>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Goal History</h2>
        {[...new Set(goals.map(goal => goal.date))].sort((a, b) => new Date(b) - new Date(a)).map(date => (
          <div key={date} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{formatDate(new Date(date))}</h3>
            <ul className="list-disc list-inside">
              {goals.filter(goal => goal.date === date).map((goal, index) => (
                <li key={index} className={goal.completed ? 'line-through' : ''}>{goal.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsDashboard;