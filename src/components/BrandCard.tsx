import type { Brand } from '../data/products';

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <a 
      href={brand.website} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group glass-card rounded-3xl p-7 card-hover block border-2 border-transparent hover:border-white/20"
    >
      <div className="flex items-start justify-between mb-5">
        <div className={`w-16 h-16 bg-gradient-to-br ${brand.color} rounded-2xl flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all`}>
          {brand.emoji}
        </div>
        <span className="text-sm text-slate-400 font-medium bg-white/5 px-3 py-1 rounded-full">
          {brand.country}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
        {brand.name}
      </h3>
      <p className={`bg-gradient-to-r ${brand.color} bg-clip-text text-transparent font-bold text-sm mb-3`}>
        {brand.tagline}
      </p>
      <p className="text-slate-400 text-sm mb-5 line-clamp-2">{brand.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {brand.features.map((f, i) => (
          <span key={i} className="text-xs bg-white/10 text-slate-300 px-3 py-1.5 rounded-full">
            {f}
          </span>
        ))}
      </div>
    </a>
  );
}
