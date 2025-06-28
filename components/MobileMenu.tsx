import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const MenuItem = styled(motion.a)`
  color: white;
  text-decoration: none;
  font-size: 24px;
  margin: 15px 0;
  padding: 10px;
  cursor: pointer;
  
  &:hover {
    color: #e065e0;
  }
`;

const Logo = styled.div`
  font-size: 32px;
  background: linear-gradient(45deg, #9b4deb, #e065e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 40px;
`;

const menuItems = [
  { title: '遊戲', href: '/games' },
  { title: '直播', href: '/live' },
  { title: '短視頻', href: '/shorts' },
  { title: '商城', href: '/shop' },
];

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <MenuOverlay
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
        >
          <CloseButton onClick={onClose}>✕</CloseButton>
          <Logo>PlayHub</Logo>
          {menuItems.map((item, index) => (
            <MenuItem
              href={item.href}
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.title}
            </MenuItem>
          ))}
        </MenuOverlay>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 