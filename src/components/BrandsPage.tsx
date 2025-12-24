import { BRANDS, PRODUCTS } from '../data/products';

export default function BrandsPage() {
	return (
		<div className="pt-24 pb-20 px-6 min-h-screen">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Markalar</h1>
					<p className="text-gray-500 max-w-xl mx-auto">4 global lider, tek çatı altında.</p>
				</div>

				{/* Brands with products */}
				<div className="space-y-12">
					{BRANDS.map((brand) => {
						const brandProducts = PRODUCTS.filter((p) => p.brand === brand.name);
						return (
							<div
								key={brand.name}
								className="bg-[#111113] rounded-3xl overflow-hidden border border-white/5"
							>
								{/* Brand header */}
								<div className="p-8 flex flex-col md:flex-row md:items-center gap-6">
									<span className="text-6xl" aria-hidden="true">
										{brand.flag}
									</span>
									<div className="flex-1">
										<h2 className="text-2xl font-bold text-white mb-1">{brand.name}</h2>
										<p className="text-gray-500">
											{brand.country} · {brand.tagline}
										</p>
									</div>
									<a
										href={brand.url}
										target="_blank"
										rel="noopener noreferrer"
										className="bg-white/5 hover:bg-emerald-500 hover:text-black text-white font-medium px-6 py-3 rounded-xl transition-all inline-flex items-center gap-2"
									>
										Web Sitesi
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
											/>
										</svg>
									</a>
								</div>

								{/* Products */}
								<div className="border-t border-white/5 p-6 bg-black/20">
									<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
										{brandProducts.map((p) => (
											<div key={p.id} className="bg-[#0a0a0b] rounded-xl p-4 border border-white/5">
												<div className="text-white font-medium mb-1">{p.name}</div>
												<div className="text-gray-500 text-sm">{p.capacity}</div>
												{p.speed && (
													<div className="text-emerald-400 text-sm mt-1">⚡ {p.speed}</div>
												)}
											</div>
										))}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
