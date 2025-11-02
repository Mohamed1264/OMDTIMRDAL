interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, variant = 'primary', onClick, href, className = '', type = 'button' }: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block text-center';
  const variantStyles = {
    primary: 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-orange-600 border-2 border-orange-600 hover:bg-orange-50'
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
