import { useState, useMemo } from 'react';
import { PRODUCTS, BRANDS } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductsPage() {
	const [activeFilter, setActiveFilter] = useState('all');
	const brands = ['all', ...BRANDS.map((b) => b.name)];

	const filteredProducts = useMemo(() => {
		if (activeFilter === 'all') return PRODUCTS;
		return PRODUCTS.filter((p) => p.brand === activeFilter);
	}, [activeFilter]);

	return (
		<div className="pt-24 pb-20 px-6 min-h-screen">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ürünler</h1>
					<p className="text-gray-500 max-w-xl mx-auto">
						15 farklı depozito iade makinesi, her ihtiyaca uygun çözüm.
					</p>
				</div>

				{/* Filters */}
				<div className="flex flex-wrap justify-center gap-2 mb-12">
					{brands.map((brand) => (
						<button
							key={brand}
							onClick={() => setActiveFilter(brand)}
							className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
								activeFilter === brand
									? 'bg-emerald-500 text-black'
									: 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
							}`}
						>
							{brand === 'all' ? 'Tümü' : brand}
						</button>
					))}
				</div>

				{/* Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{filteredProducts.map((p) => (
						<ProductCard key={p.id} product={p} />
					))}
				</div>
			</div>
		</div>
	);
}
