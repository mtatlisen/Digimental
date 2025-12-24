import React, { useState, useMemo } from 'react';
import { PRODUCTS, BRANDS } from './data';
import { ProductCard } from './ProductCard';
import { BrandCard } from './BrandCard';

export const HomePage = () => {
    const featuredProducts = PRODUCTS.filter(p => p.featured);
    
    return (
        <>
            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="absolute w-full h-full object-cover"
                    >
                        <source src="hero-video.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 to-transparent" />
                </div>
                
                {/* Background gradient overlay */}
                <div className="absolute inset-0 z-[1]">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
                </div>
                
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
                    {/* Badge */}
                    <div className="fade-in-up inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-gray-400 text-sm">Depozito İade Sistemleri Türkiye</span>
                    </div>
                    
                    {/* Headline */}
                    <h1 className="fade-in-up fade-in-delay-1 text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
                        Geleceğin<br/>
                        <span className="gradient-text">Geri Dönüşüm</span><br/>
                        Teknolojisi
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="fade-in-up fade-in-delay-2 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        4 global marka, 15 farklı ürün. REVEGO, RVM Systems, Ripet ve Anker Andersen'in 
                        Türkiye distribütörüyüz.
                    </p>
                    
                    {/* CTA */}
                    <div className="fade-in-up fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#/products" className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-4 rounded-xl transition-colors inline-flex items-center justify-center gap-2">
                            Ürünleri İncele
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a href="#/contact" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
                            İletişime Geç
                        </a>
                    </div>
                    
                    {/* Stats */}
                    <div className="fade-in-up fade-in-delay-4 grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/5">
                        {[
                            { value: '4', label: 'Global Marka' },
                            { value: '15', label: 'Farklı Ürün' },
                            { value: '300/dk', label: 'Max Hız' },
                            { value: '%99.5', label: 'Doğruluk' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-gray-500 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Brands */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Global Markalar</h2>
                        <p className="text-gray-500 max-w-xl mx-auto">Avrupa'nın lider depozito iade makinesi üreticilerinin Türkiye distribütörüyüz.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {BRANDS.map(b => <BrandCard key={b.name} brand={b} />)}
                    </div>
                </div>
            </section>
            
            {/* Featured Products */}
            <section className="py-24 px-6 bg-[#0d0d0e]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Öne Çıkan Ürünler</h2>
                            <p className="text-gray-500">En popüler depozito iade makinelerimiz</p>
                        </div>
                        <a href="#/products" className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-2 transition-colors">
                            Tüm Ürünler
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProducts.map(p => <ProductCard key={p.id} product={p} />)}
                    </div>
                </div>
            </section>
            
            {/* Features */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Neden DIM?</h2>
                        <p className="text-gray-500 max-w-xl mx-auto">Türkiye'nin en kapsamlı depozito iade sistemi çözümleri</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: '🌍', title: '4 Global Marka', desc: 'Avrupa\'nın lider üreticileri tek çatı altında' },
                            { icon: '⚡', title: 'Yüksek Hız', desc: 'Dakikada 300 adede kadar işlem kapasitesi' },
                            { icon: '🎯', title: '%99.5 Doğruluk', desc: 'Yapay zeka destekli optik tanıma sistemi' },
                            { icon: '🔧', title: '7/24 Destek', desc: 'Teknik servis ve bakım garantisi' },
                            { icon: '📊', title: 'IoT Entegrasyon', desc: 'Gerçek zamanlı izleme ve raporlama' },
                            { icon: '🌱', title: 'Sürdürülebilirlik', desc: 'Çevre dostu döngüsel ekonomi çözümleri' }
                        ].map((f, i) => (
                            <div key={i} className="card-hover p-6 rounded-2xl bg-[#111113]">
                                <div className="text-3xl mb-4">{f.icon}</div>
                                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* CTA */}
            <section className="py-24 px-6 bg-gradient-to-b from-emerald-500/5 to-transparent">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projeniz İçin Teklif Alın</h2>
                    <p className="text-gray-400 mb-8">İşletmenize en uygun depozito iade çözümünü birlikte belirleyelim.</p>
                    <a href="#/contact" className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-10 py-4 rounded-xl transition-colors inline-flex items-center gap-2">
                        Ücretsiz Danışmanlık
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </section>
        </>
    );
};

export const ProductsPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const brands = ['all', ...BRANDS.map(b => b.name)];
    
    const filteredProducts = useMemo(() => {
        if (activeFilter === 'all') return PRODUCTS;
        return PRODUCTS.filter(p => p.brand === activeFilter);
    }, [activeFilter]);
    
    return (
        <div className="pt-24 pb-20 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ürünler</h1>
                    <p className="text-gray-500 max-w-xl mx-auto">15 farklı depozito iade makinesi, her ihtiyaca uygun çözüm.</p>
                </div>
                
                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {brands.map(brand => (
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
                    {filteredProducts.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
            </div>
        </div>
    );
};

export const BrandsPage = () => (
    <div className="pt-24 pb-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Markalar</h1>
                <p className="text-gray-500 max-w-xl mx-auto">4 global lider, tek çatı altında.</p>
            </div>
            
            {/* Brands with products */}
            <div className="space-y-12">
                {BRANDS.map(brand => {
                    const brandProducts = PRODUCTS.filter(p => p.brand === brand.name);
                    return (
                        <div key={brand.name} className="bg-[#111113] rounded-3xl overflow-hidden border border-white/5">
                            {/* Brand header */}
                            <div className="p-8 flex flex-col md:flex-row md:items-center gap-6">
                                <span className="text-6xl">{brand.flag}</span>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-white mb-1">{brand.name}</h2>
                                    <p className="text-gray-500">{brand.country} · {brand.tagline}</p>
                                </div>
                                <a href={brand.url} target="_blank" className="bg-white/5 hover:bg-emerald-500 hover:text-black text-white font-medium px-6 py-3 rounded-xl transition-all inline-flex items-center gap-2">
                                    Web Sitesi
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                            
                            {/* Products */}
                            <div className="border-t border-white/5 p-6 bg-black/20">
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {brandProducts.map(p => (
                                        <div key={p.id} className="bg-[#0a0a0b] rounded-xl p-4 border border-white/5">
                                            <div className="text-white font-medium mb-1">{p.name}</div>
                                            <div className="text-gray-500 text-sm">{p.capacity}</div>
                                            {p.speed && <div className="text-emerald-400 text-sm mt-1">⚡ {p.speed}</div>}
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

export const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);
    
    const handleSubmit = (e) => {
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
                            { icon: '📧', label: 'E-posta', value: 'info@deposit.com.tr' },
                            { icon: '📞', label: 'Telefon', value: '+90 (212) 000 00 00' },
                            { icon: '📍', label: 'Adres', value: 'İstanbul, Türkiye' }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#111113] border border-white/5 rounded-xl p-5">
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl">{item.icon}</span>
                                    <div>
                                        <div className="text-gray-500 text-xs mb-0.5">{item.label}</div>
                                        <div className="text-white font-medium">{item.value}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        {/* Brands */}
                        <div className="bg-[#111113] border border-white/5 rounded-xl p-5">
                            <div className="text-gray-500 text-xs mb-3">Markalarımız</div>
                            <div className="flex gap-3">
                                {BRANDS.map(b => (
                                    <a key={b.name} href={b.url} target="_blank" className="text-2xl hover:scale-110 transition-transform" title={b.name}>
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
                                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-white text-xl font-semibold mb-2">Teşekkürler!</h3>
                                <p className="text-gray-500">En kısa sürede size dönüş yapacağız.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input required placeholder="Ad Soyad" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:border-emerald-500/50 focus:outline-none transition-colors" />
                                    <input required type="email" placeholder="E-posta" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:border-emerald-500/50 focus:outline-none transition-colors" />
                                </div>
                                <input placeholder="Telefon" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:border-emerald-500/50 focus:outline-none transition-colors" />
                                <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-gray-400 focus:border-emerald-500/50 focus:outline-none transition-colors">
                                    <option value="">İlgilendiğiniz marka</option>
                                    {BRANDS.map(b => <option key={b.name} value={b.name}>{b.name}</option>)}
                                </select>
                                <textarea required placeholder="Mesajınız" rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:border-emerald-500/50 focus:outline-none transition-colors resize-none" />
                                <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-4 rounded-xl transition-colors">
                                    Gönder
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
