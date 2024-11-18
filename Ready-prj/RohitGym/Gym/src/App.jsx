import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { theme } from './styles/globalStyles';
import Layout from './components/layout';
import LandingPage from './components/LandingPage';
import ActivitiesDashboard from './components/ActivitiesDashboard';
import CaloriesDashboard from './components/CaloriesDashboard';
import GoalsDashboard from './components/GoalsDashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/Profile';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Layout />}>
              <Route index element={<ActivitiesDashboard />} />
              <Route path="activities" element={<ActivitiesDashboard />} />
              <Route path="calories" element={<CaloriesDashboard />} />
              <Route path="goals" element={<GoalsDashboard />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            {/* Add a catch-all route for any undefined routes */}
            <Route path="*" element={
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh',
                fontSize: '2rem',
                color: theme.colors.text
              }}>
                404 Not Found: {window.location.pathname}
              </div>
            } />
          </Routes>
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
};

export default App;