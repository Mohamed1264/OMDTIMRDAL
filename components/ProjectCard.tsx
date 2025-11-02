interface ProjectCardProps {
  name: string;
  category: string;
  image: string;
  alt?: string;             // ← ajouter alt
  loading?: 'lazy' | 'eager'; // ← ajouter loading
  className?: string;
}

export default function ProjectCard({
  name,
  category,
  image,
  alt,
  loading = 'lazy',
  className = ''
}: ProjectCardProps) {
  return (
    <div className={`relative group overflow-hidden rounded-xl shadow-lg ${className}`}>
      <div className="aspect-[4/3] bg-gray-200">
        <img
          src={image}
          alt={alt || name}      // ← fallback si alt pas fourni
          loading={loading}      // ← ajouter la prop loading
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-orange-400 font-semibold mb-2">{category}</p>
          <h3 className="text-2xl font-bold">{name}</h3>
        </div>
      </div>
      <div className="p-6 bg-white">
        <p className="text-orange-600 font-semibold text-sm mb-2">{category}</p>
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      </div>
    </div>
  );
}
