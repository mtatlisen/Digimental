import { BRANDS, NAV_ITEMS } from '../data/products';

export default function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
      <div className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-white font-black text-2xl">D</span>
                </div>
                <div>
                  <span className="text-white font-extrabold text-2xl">deposit<span className="gradient-text">.com.tr</span></span>
                  <p className="text-sm text-slate-400">Türkiye'nin DİS Ortağı</p>
                </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-md">4 global marka, 16 farklı ürün. Depozito iade sistemleri için Türkiye'nin tek adresi.</p>
              <div className="flex gap-3">
                {BRANDS.map(b => (
                  <a 
                    key={b.id} 
                    href={b.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gradient-to-br ${b.color} rounded-xl flex items-center justify-center text-xl shadow-lg hover:scale-110 hover:-rotate-3 transition-all`}
                  >
                    {b.emoji}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-5 text-lg flex items-center gap-2">🧭 Sayfalar</h4>
              <div className="space-y-3">
                {NAV_ITEMS.map(item => (
                  <a key={item.href} href={item.href} className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
                    <span>{item.icon}</span>{item.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-5 text-lg flex items-center gap-2">📍 İletişim</h4>
              <div className="space-y-3 text-slate-400">
                <p className="flex items-center gap-2"><span>🏢</span> İstanbul, Türkiye</p>
                <p className="flex items-center gap-2"><span>✉️</span> info@deposit.com.tr</p>
                <p className="flex items-center gap-2"><span>📱</span> +90 (212) 000 00 00</p>
                <p className="flex items-center gap-2"><span>🕐</span> 7/24 Teknik Destek</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-slate-500">© 2025 DIM - Depozito İade Makineleri. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
