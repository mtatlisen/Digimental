export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-50">
          <source src="https://rvmsystems.com.tr/wp-content/uploads/sites/19/2025/01/rvm_webbplats_ny-final.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay absolute inset-0"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-emerald-500/40 to-cyan-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="absolute top-1/4 left-16 text-7xl animate-bounce-slow opacity-40">♻️</div>
        <div className="absolute top-1/3 right-24 text-6xl animate-bounce-slow opacity-40" style={{ animationDelay: '0.5s' }}>🌱</div>
        <div className="absolute bottom-1/3 left-1/4 text-6xl animate-bounce-slow opacity-40" style={{ animationDelay: '1s' }}>🌍</div>
        <div className="absolute top-1/2 right-1/4 text-5xl animate-bounce-slow opacity-40" style={{ animationDelay: '1.5s' }}>✨</div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center pt-24">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 border border-emerald-400/30 px-6 py-2.5 rounded-full mb-8 animate-pulse-glow shimmer">
          <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></span>
          <span className="text-emerald-300 font-semibold">🇹🇷 Türkiye'nin DİS Ortağı</span>
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 text-xs font-black px-3 py-1 rounded-full">4 MARKA</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight text-shadow">
          Geleceği
          <br />
          <span className="gradient-text">Geri Dönüştür</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          <span className="text-emerald-400 font-bold">REVEGO</span> • 
          <span className="text-blue-400 font-bold"> RVM Systems</span> • 
          <span className="text-orange-400 font-bold"> Anker Andersen</span> • 
          <span className="text-green-400 font-bold"> Ripet</span>
          <br />
          <span className="text-slate-400">Dört global markanın Türkiye distribütörü</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="/products" className="group px-8 py-4 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-2xl font-bold text-lg text-white shadow-xl shadow-emerald-500/30 hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center gap-2">
            📦 Ürünleri Keşfet
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="/contact" className="px-8 py-4 glass-card rounded-2xl font-bold text-lg text-white hover:bg-white/15 transition-all hover:scale-105 flex items-center gap-2">
            📞 Teklif Al
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: '4', label: 'Global Marka', icon: '🌍', color: 'from-emerald-400 to-teal-500' },
            { value: '16', label: 'Farklı Ürün', icon: '📦', color: 'from-blue-400 to-indigo-500' },
            { value: '300/dk', label: 'Maks. Hız', icon: '⚡', color: 'from-orange-400 to-red-500' },
            { value: '%99.5', label: 'Doğruluk', icon: '🎯', color: 'from-purple-400 to-pink-500' }
          ].map((stat, i) => (
            <div key={i} className="glass-card rounded-2xl p-5 card-hover">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className={`text-3xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</div>
              <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-slate-500 text-xs uppercase tracking-widest">Aşağı Kaydır</span>
        <div className="w-8 h-12 border-2 border-slate-500/50 rounded-full flex justify-center pt-2">
          <div className="w-2 h-4 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
