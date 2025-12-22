import { useState, type FormEvent } from 'react';
import { BRANDS } from '../data/products';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="text-7xl mb-6">✅</div>
        <h3 className="text-2xl font-bold text-white mb-2">Teşekkürler!</h3>
        <p className="text-slate-400">En kısa sürede sizinle iletişime geçeceğiz.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm text-slate-400 mb-2">Ad Soyad *</label>
        <input 
          required 
          className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500/50 outline-none" 
          placeholder="Adınız Soyadınız" 
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-400 mb-2">E-posta *</label>
          <input 
            required 
            type="email" 
            className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500/50 outline-none" 
            placeholder="ornek@email.com" 
          />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-2">Telefon</label>
          <input 
            type="tel" 
            className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500/50 outline-none" 
            placeholder="+90 5XX XXX XX XX" 
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-slate-400 mb-2">Şirket</label>
        <input 
          className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500/50 outline-none" 
          placeholder="Şirket Adı" 
        />
      </div>
      <div>
        <label className="block text-sm text-slate-400 mb-2">İlgilendiğiniz Marka</label>
        <select className="w-full glass rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500/50 outline-none bg-transparent">
          <option value="" className="bg-slate-800">Seçiniz</option>
          {BRANDS.map(b => (
            <option key={b.id} value={b.id} className="bg-slate-800">{b.emoji} {b.name}</option>
          ))}
          <option value="all" className="bg-slate-800">🌐 Hepsi</option>
        </select>
      </div>
      <div>
        <label className="block text-sm text-slate-400 mb-2">Mesajınız *</label>
        <textarea 
          required 
          rows={4} 
          className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500/50 outline-none resize-none" 
          placeholder="İhtiyacınızı kısaca açıklayın..."
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-emerald-500/30 hover:shadow-cyan-500/50 transition-all hover:scale-[1.02]"
      >
        📤 Gönder
      </button>
    </form>
  );
}
