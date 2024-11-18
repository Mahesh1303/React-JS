// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import UserProfile from './components/UserProfile';
import NutritionPage from './components/NutritionPage';
import GoalPage from './components/GoalPage';
import WorkoutPage from './components/WorkoutPage';

const App = () => {
  const [user, setUser] = useState(null); // For managing user authentication

  return (
    <Router>
      <Navigation user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage setUser={setUser} />} />
        <Route path="/profile" element={user ? <UserProfile user={user} /> : <Navigate to="/" />} />
        <Route path="/nutrition" element={user ? <NutritionPage /> : <Navigate to="/" />} />
        <Route path="/goals" element={user ? <GoalPage /> : <Navigate to="/" />} />
        <Route path="/workouts" element={user ? <WorkoutPage /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
