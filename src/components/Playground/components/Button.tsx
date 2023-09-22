import React from 'react';

interface ButtonProps {
  name?: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  return <button className="playground-btn glowing">{name}</button>;
};

export default Button;
