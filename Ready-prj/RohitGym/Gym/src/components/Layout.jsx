// src/components/Layout.jsx
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiActivity, FiPieChart, FiTarget, FiUser, FiMenu, FiX } from 'react-icons/fi';

const LayoutWrapper = styled.div`
  display: flex;
`;

const Sidebar = styled(motion.nav)`
  background-color: ${props => props.theme.colors.white};
  width: 250px;
  height: 100vh;
  padding: 2rem;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    border-radius: 8px;
  }

  svg {
    margin-right: 1rem;
  }
`;

const Content = styled.main`
  flex: 1;
  margin-left: 250px;
  padding: 2rem;
`;

const MobileMenuButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;
  display: none;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  return (
    <LayoutWrapper>
      <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
      </MobileMenuButton>
      <AnimatePresence>
        {(isMobileMenuOpen || window.innerWidth > 768) && (
          <Sidebar
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <SidebarLink to="/dashboard/activities"><FiActivity /> Activities</SidebarLink>
            <SidebarLink to="/dashboard/calories"><FiPieChart /> Calories</SidebarLink>
            <SidebarLink to="/dashboard/goals"><FiTarget /> Goals</SidebarLink>
            <SidebarLink to="/dashboard/profile"><FiUser /> Profile</SidebarLink>
          </Sidebar>
        )}
      </AnimatePresence>
      <Content>
        <Outlet />
      </Content>
    </LayoutWrapper>
  );
};

export default Layout;