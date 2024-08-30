import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'option';
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon,
  className,
  ...props
}) => {
  const baseClasses = 'font-bold py-2 px-4 rounded transition duration-200';
  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-white border border-blue-500 text-blue-500 hover:bg-blue-50',
    option:
      'w-full bg-white border border-gray-300 hover:border-blue-500 hover:shadow-md text-left',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon && <span className='mr-2'>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
