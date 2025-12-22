import { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../data/products';

interface NavbarProps {
  currentPath?: string;
}

export default function Navbar({ currentPath = '/' }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-cyan-500/50 transition-all group-hover:scale-110 group-hover:rotate-3">
            <span className="text-white font-black text-xl">D</span>
          </div>
          <div>
            <span className="text-white font-extrabold text-xl tracking-tight">deposit<span className="gradient-text">.com.tr</span></span>
            <p className="text-xs text-slate-400 -mt-1">Depozito İade Sistemleri</p>
          </div>
        </a>
        
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all font-medium text-sm group ${
                currentPath === item.href 
                  ? 'text-white bg-white/10' 
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="group-hover:scale-125 transition-transform">{item.icon}</span>
              {item.label}
            </a>
          ))}
          <a href="/contact" className="ml-4 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-bold text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:scale-105">
            Teklif Al
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-11 h-11 rounded-xl glass flex items-center justify-center text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass mx-4 mt-3 rounded-2xl p-4 border border-white/20">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              onClick={() => setMobileOpen(false)} 
              className={`flex items-center gap-3 py-3 px-4 rounded-xl font-medium ${
                currentPath === item.href 
                  ? 'text-white bg-white/10' 
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
