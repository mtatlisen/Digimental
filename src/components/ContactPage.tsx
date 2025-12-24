import { useState } from 'react';
import { BRANDS } from '../data/products';

export default function ContactPage() {
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<div className="pt-24 pb-20 px-6 min-h-screen">
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">İletişim</h1>
					<p className="text-gray-500">Projeniz için bizimle iletişime geçin.</p>
				</div>

				<div className="grid md:grid-cols-5 gap-8">
					{/* Info */}
					<div className="md:col-span-2 space-y-4">
						{[
							{ icon: '📧', label: 'E-posta', value: 'info@deposit.com.tr', href: 'mailto:info@deposit.com.tr' },
							{ icon: '📞', label: 'Telefon', value: '+90 (212) 000 00 00', href: 'tel:+902120000000' },
							{ icon: '📍', label: 'Adres', value: 'İstanbul, Türkiye' },
						].map((item, i) => (
							<div key={i} className="bg-[#111113] border border-white/5 rounded-xl p-5">
								<div className="flex items-center gap-4">
									<span className="text-2xl" aria-hidden="true">
										{item.icon}
									</span>
									<div>
										<div className="text-gray-500 text-xs mb-0.5">{item.label}</div>
										{item.href ? (
											<a
												href={item.href}
												className="text-white font-medium hover:text-emerald-400 transition-colors"
											>
												{item.value}
											</a>
										) : (
											<div className="text-white font-medium">{item.value}</div>
										)}
									</div>
								</div>
							</div>
						))}

						{/* Brands */}
						<div className="bg-[#111113] border border-white/5 rounded-xl p-5">
							<div className="text-gray-500 text-xs mb-3">Markalarımız</div>
							<div className="flex gap-3">
								{BRANDS.map((b) => (
									<a
										key={b.name}
										href={b.url}
										target="_blank"
										rel="noopener noreferrer"
										className="text-2xl hover:scale-110 transition-transform"
										title={b.name}
										aria-label={b.name}
									>
										{b.flag}
									</a>
								))}
							</div>
						</div>
					</div>

					{/* Form */}
					<div className="md:col-span-3 bg-[#111113] border border-white/5 rounded-2xl p-8">
						{submitted ? (
							<div className="text-center py-12">
								<div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
									<svg
										className="w-8 h-8 text-black"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<h3 className="text-white text-xl font-semibold mb-2">Teşekkürler!</h3>
								<p className="text-gray-500">En kısa sürede size dönüş yapacağız.</p>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-5">
								<div className="grid md:grid-cols-2 gap-4">
									<input
										required
										placeholder="Ad Soyad"
										className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:border-emerald-500/50 focus:outline-none transition-colors"
									/>
									<input
										required
										type="email"
										placeholder="E-posta"
										className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:border-emerald-500/50 focus:outline-none transition-colors"
									/>
								</div>
								<input
									placeholder="Telefon"
									className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:border-emerald-500/50 focus:outline-none transition-colors"
								/>
								<select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-gray-400 focus:border-emerald-500/50 focus:outline-none transition-colors">
									<option value="">İlgilendiğiniz marka</option>
									{BRANDS.map((b) => (
										<option key={b.name} value={b.name}>
											{b.name}
										</option>
									))}
								</select>
								<textarea
									required
									placeholder="Mesajınız"
									rows={4}
									className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:border-emerald-500/50 focus:outline-none transition-colors resize-none"
								/>
								<button
									type="submit"
									className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-4 rounded-xl transition-colors"
								>
									Gönder
								</button>
							</form>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
