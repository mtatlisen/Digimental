import type { Brand } from '../data/products';

interface BrandCardProps {
	brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
	return (
		<a
			href={brand.url}
			target="_blank"
			rel="noopener noreferrer"
			className="card-hover block p-6 rounded-2xl bg-[#111113] group"
		>
			<div className="flex items-start gap-4">
				<span className="text-4xl" aria-hidden="true">
					{brand.flag}
				</span>
				<div className="flex-1">
					<h3 className="text-white font-semibold text-lg group-hover:text-emerald-400 transition-colors">
						{brand.name}
					</h3>
					<p className="text-gray-500 text-sm">{brand.country}</p>
					<p className="text-gray-400 text-sm mt-2">{brand.tagline}</p>
				</div>
				<svg
					className="w-5 h-5 text-gray-600 group-hover:text-emerald-400 transition-colors"
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
			</div>
		</a>
	);
}
