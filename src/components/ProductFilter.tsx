import { useState } from 'react';
import { PRODUCTS, BRANDS } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductFilter() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.brand === filter);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {['all', 'REVEGO', 'RVM Systems', 'Anker Andersen', 'Ripet'].map((brand) => {
          const b = BRANDS.find(x => x.name === brand);
          return (
            <button 
              key={brand} 
              onClick={() => setFilter(brand)} 
              className={`px-5 py-3 rounded-xl font-bold transition-all ${
                filter === brand 
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/30' 
                  : 'glass text-slate-300 hover:text-white hover:bg-white/15'
              }`}
            >
              {brand === 'all' ? '🌐 Tümü' : `${b?.emoji || ''} ${brand}`}
            </button>
          );
        })}
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </>
  );
}
