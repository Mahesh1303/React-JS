// src/components/ActivitiesDashboard.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const ActivityList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ActivityItem = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.background};

  &:last-child {
    border-bottom: none;
  }
`;

const chartData = [
  { name: 'Mon', duration: 30 },
  { name: 'Tue', duration: 45 },
  { name: 'Wed', duration: 60 },
  { name: 'Thu', duration: 40 },
  { name: 'Fri', duration: 50 },
  { name: 'Sat', duration: 75 },
  { name: 'Sun', duration: 55 },
];

const ActivitiesDashboard = () => {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({ name: '', duration: '' });

  const handleAddActivity = () => {
    if (newActivity.name && newActivity.duration) {
      setActivities([...activities, { ...newActivity, id: Date.now() }]);
      setNewActivity({ name: '', duration: '' });
    }
  };

  return (
    <DashboardWrapper>
      <Card
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Add New Activity</Title>
        <Input
          type="text"
          placeholder="Activity name"
          value={newActivity.name}
          onChange={(e) => setNewActivity({ ...newActivity, name: e.target.value })}
        />
        <Input
          type="number"
          placeholder="Duration (minutes)"
          value={newActivity.duration}
          onChange={(e) => setNewActivity({ ...newActivity, duration: e.target.value })}
        />
        <Button onClick={handleAddActivity}>Add Activity</Button>
      </Card>

      <Card
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Title>Recent Activities</Title>
        <ActivityList>
          <AnimatePresence>
            {activities.map((activity) => (
              <ActivityItem
                key={activity.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
              >
                <span>{activity.name}</span>
                <span>{activity.duration} minutes</span>
              </ActivityItem>
            ))}
          </AnimatePresence>
        </ActivityList>
      </Card>

      <Card
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Title>Weekly Activity Summary</Title>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="duration" stroke={theme.colors.primary} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </DashboardWrapper>
  );
};

export default ActivitiesDashboard;