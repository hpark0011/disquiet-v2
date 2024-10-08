import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'option';
  icon?: string;
}

const OptionButton: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon,
  className,
  ...props
}) => {
  const baseClasses =
    'font-medium text-sm py-2 px-4 rounded-lg transition duration-200';
  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    option:
      'w-full bg-white border border-gray-100 hover:shadow-lg hover:-translate-y-[1px] transition-all text-left duration-200 shadow-none',
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

export default OptionButton;
