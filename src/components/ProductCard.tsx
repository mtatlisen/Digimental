import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const materialColors: Record<string, string> = {
  'PET': 'bg-blue-500/30 text-blue-200 border-blue-400/40',
  'Cam': 'bg-amber-500/30 text-amber-200 border-amber-400/40',
  'Alüminyum': 'bg-slate-500/30 text-slate-200 border-slate-400/40'
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group glass-card rounded-3xl overflow-hidden card-hover">
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20`}></div>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700" 
          onError={(e) => { 
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'; 
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
        
        <div className="absolute top-3 left-3">
          <span className={`bg-gradient-to-r ${product.color} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
            {product.category}
          </span>
        </div>
        
        {product.highlight && (
          <div className="absolute top-3 right-3">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 text-xs font-black px-3 py-1.5 rounded-full shadow-lg animate-pulse">
              {product.highlight}
            </span>
          </div>
        )}

        <div className="absolute bottom-3 right-3">
          <span className="glass text-white text-xs font-bold px-3 py-1.5 rounded-full">{product.brand}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.materials.map((mat, i) => (
            <span key={i} className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${materialColors[mat] || ''}`}>
              {mat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          {product.features.slice(0, 4).map((feature, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
              <span className="text-emerald-400">✓</span>
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
