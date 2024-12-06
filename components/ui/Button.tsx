// CustomButton.tsx
import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: string;
  backgroundColor?: string;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  color = 'white',
  backgroundColor = '#3F51F2',
  disabled = false,
  className = '',
}) => {
  const buttonStyle: React.CSSProperties = {
    color,
    backgroundColor,
    border: 'none',
    padding: '6px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {text}
    </button>
  );
};

export default Button;
