// src/components/HomePage.jsx
import React, { useState } from 'react';

const HomePage = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    weight: '',
    gender: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      email: formData.email,
      name: formData.name,
      age: formData.age,
      weight: formData.weight,
      gender: formData.gender,
      phone: formData.phone
    });
  };

  return (
    <div>
      {isLogin ? (
        <>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? <button onClick={() => setIsLogin(false)}>Register</button>
          </p>
        </>
      ) : (
        <>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleInputChange} required />
            <input type="number" name="weight" placeholder="Weight" value={formData.weight} onChange={handleInputChange} required />
            <select name="gender" value={formData.gender} onChange={handleInputChange} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} required />
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? <button onClick={() => setIsLogin(true)}>Login</button>
          </p>
        </>
      )}
    </div>
  );
};

export default HomePage;
