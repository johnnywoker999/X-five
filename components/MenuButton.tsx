import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const Line = styled.span<{ isOpen?: boolean }>`
  width: 100%;
  height: 2px;
  background: white;
  transition: all 0.3s ease;
  
  &:first-child {
    transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(10px, 10px)' : 'none'};
  }
  
  &:nth-child(2) {
    opacity: ${({ isOpen }) => isOpen ? 0 : 1};
  }
  
  &:last-child {
    transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(10px, -10px)' : 'none'};
  }
`;

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onClick }) => {
  return (
    <Button onClick={onClick}>
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
    </Button>
  );
};

export default MenuButton; 