interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function Card({ icon, title, description, className = '' }: CardProps) {
  return (
    <div className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${className}`}>
      {icon && <div className="text-orange-600 mb-4">{icon}</div>}
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
