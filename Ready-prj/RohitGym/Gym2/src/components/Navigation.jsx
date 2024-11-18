// src/components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ user, setUser }) => {
  const logoutHandler = () => {
    setUser(null);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white">Fitness App</Link>
        <div>
          {user ? (
            <>
              <Link to="/nutrition" className="text-white mr-4">Nutrition</Link>
              <Link to="/workouts" className="text-white mr-4">Workout</Link>
              <Link to="/profile" className="text-white mr-4">Profile</Link>
              <button onClick={logoutHandler} className="text-white">Logout</button>
            </>
          ) : (
            <Link to="/" className="text-white">Login/Register</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;