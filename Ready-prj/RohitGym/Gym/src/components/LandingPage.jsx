// src/components/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LandingWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: ${props => props.theme.colors.white};
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const ButtonWrapper = styled(motion.div)`
  display: flex;
  gap: 1rem;
`;

const Button = styled(Link)`
  padding: 0.8rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;

  &.primary {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primary};
    &:hover {
      background-color: ${props => props.theme.colors.accent};
      color: ${props => props.theme.colors.white};
    }
  }

  &.secondary {
    background-color: transparent;
    color: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.white};
    &:hover {
      background-color: ${props => props.theme.colors.white};
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const LandingPage = () => {
  return (
    <LandingWrapper>
      <Title
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Your Health Journey Starts Here
      </Title>
      <Subtitle
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Track your activities, manage your calories, and achieve your goals.
      </Subtitle>
      <ButtonWrapper
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button to="/login" className="primary">Get Started</Button>
        <Button to="/register" className="secondary">Sign Up</Button>
      </ButtonWrapper>
    </LandingWrapper>
  );
};

export default LandingPage;