import { NAV, BRANDS } from '../data/products';

export default function Footer() {
	return (
		<footer className="border-t border-white/5 bg-black/50">
			<div className="max-w-7xl mx-auto px-6 py-16">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-10">
					{/* Brand */}
					<div className="col-span-2 md:col-span-1">
						<div className="flex items-center gap-3 mb-4">
							<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
								<span className="text-black font-bold text-lg">D</span>
							</div>
							<div>
								<span className="text-white font-semibold">deposit</span>
								<span className="text-emerald-400">.com.tr</span>
							</div>
						</div>
						<p className="text-gray-500 text-sm leading-relaxed">
							Türkiye'nin depozito iade sistemleri çözüm ortağı.
						</p>
					</div>

					{/* Links */}
					<div>
						<h4 className="text-white font-medium mb-4">Sayfalar</h4>
						<div className="space-y-2">
							{NAV.map((item) => (
								<a
									key={item.href}
									href={item.href}
									className="block text-gray-500 hover:text-emerald-400 text-sm transition-colors"
								>
									{item.label}
								</a>
							))}
						</div>
					</div>

					{/* Brands */}
					<div>
						<h4 className="text-white font-medium mb-4">Markalar</h4>
						<div className="space-y-2">
							{BRANDS.map((b) => (
								<a
									key={b.name}
									href={b.url}
									target="_blank"
									rel="noopener noreferrer"
									className="block text-gray-500 hover:text-emerald-400 text-sm transition-colors"
								>
									{b.flag} {b.name}
								</a>
							))}
						</div>
					</div>

					{/* Contact */}
					<div>
						<h4 className="text-white font-medium mb-4">İletişim</h4>
						<div className="space-y-2 text-gray-500 text-sm">
							<p>
								<a href="mailto:info@deposit.com.tr" className="hover:text-emerald-400 transition-colors">
									info@deposit.com.tr
								</a>
							</p>
							<p>
								<a href="tel:+902120000000" className="hover:text-emerald-400 transition-colors">
									+90 (212) 000 00 00
								</a>
							</p>
							<p>İstanbul, Türkiye</p>
						</div>
					</div>
				</div>

				<div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-gray-600 text-sm">© 2025 DIM - Tüm hakları saklıdır.</p>
					<div className="flex gap-6">
						{BRANDS.map((b) => (
							<a
								key={b.name}
								href={b.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-2xl hover:scale-110 transition-transform"
								aria-label={b.name}
							>
								{b.flag}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
