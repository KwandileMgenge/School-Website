import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;  // Changed from href to to for React Router
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  disabled?: boolean;
  state?: any;  // For React Router state
  replace?: boolean;  // For React Router replace prop
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  to,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  state,
  replace = false,
}) => {
  // Base classes
  const baseClasses = 'px-6 py-3 rounded-lg font-bold transition border-2';

  // Variant classes
  const variantClasses = {
    primary: 'bg-chenin border-chenin text-bay-of-many hover:bg-transparent hover:text-chenin',
    secondary: 'bg-bay-of-many border-bay-of-many text-white hover:bg-transparent hover:text-bay-of-many',
    outline: 'bg-transparent border-green-white text-green-white hover:bg-green-white/30 hover:text-green-white',
    disabled: 'bg-gray-400 border-gray-400 text-gray-600 cursor-not-allowed',
  };

  // Combined classes
  const combinedClasses = `${baseClasses} ${
    disabled ? variantClasses.disabled : variantClasses[variant]
  } ${className}`;

  // If 'to' prop is provided and not disabled, render as Link
  if (to && !disabled) {
    return (
      <Link
        to={to}
        className={combinedClasses}
        state={state}
        replace={replace}
        onClick={onClick} // Optional onClick handler for links
      >
        {children}
      </Link>
    );
  }

  // Default to button element
  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;