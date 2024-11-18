// src/components/UserProfile.jsx
import React, { useState } from 'react';

const UserProfile = ({ user }) => {
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [password, setPassword] = useState(user.password || '');
  const [age, setAge] = useState(user.age || '');
  const [weight, setWeight] = useState(user.weight || '');
  const [gender, setGender] = useState(user.gender || '');
  const [phone, setPhone] = useState(user.phone || '');

  const handleUpdate = (e) => {
    e.preventDefault();
    // Logic to update the user information
    alert('Profile updated!');
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" required />
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" required />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
