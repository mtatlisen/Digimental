import { useState } from 'react';
import type { Brand } from '../data/brands';

interface ContactFormProps {
	brands: Brand[];
}

export default function ContactForm({ brands }: ContactFormProps) {
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<div className="bg-[#111113] border border-white/5 rounded-2xl p-8">
			{submitted ? (
				<div className="text-center py-12">
					<div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
						<svg
							className="w-8 h-8 text-black"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
					<h3 className="text-white text-xl font-semibold mb-2">
						Teşekkürler!
					</h3>
					<p className="text-gray-500">
						En kısa sürede size dönüş yapacağız.
					</p>
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
						{brands.map((b) => (
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
	);
}
