import React, { useState, useEffect, memo } from 'react';
import { NAV } from './data';

export const Navbar = memo(() => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5' : ''}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                            <span className="text-black font-bold text-lg">D</span>
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-white font-semibold">deposit</span>
                            <span className="text-emerald-400">.com.tr</span>
                        </div>
                    </a>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV.map(item => (
                            <a key={item.href} href={item.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                                {item.label}
                            </a>
                        ))}
                        <a href="#/contact" className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium px-5 py-2 rounded-lg text-sm transition-colors">
                            Teklif Al
                        </a>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/5">
                    <div className="px-6 py-4 space-y-3">
                        {NAV.map(item => (
                            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-white py-2 text-lg">
                                {item.label}
                            </a>
                        ))}
                        <a href="#/contact" onClick={() => setMenuOpen(false)} className="block bg-emerald-500 text-black font-medium px-5 py-3 rounded-lg text-center mt-4">
                            Teklif Al
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
});
