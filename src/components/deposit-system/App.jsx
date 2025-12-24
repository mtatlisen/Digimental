import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { HomePage, ProductsPage, BrandsPage, ContactPage } from './pages';
import './styles.css';

const App = () => {
    const [currentPage, setCurrentPage] = useState('#/');
    
    useEffect(() => {
        // Initial hash
        if (window.location.hash) {
            setCurrentPage(window.location.hash);
        } else {
            setCurrentPage('#/');
        }

        const handleHashChange = () => {
            setCurrentPage(window.location.hash || '#/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);
    
    const renderPage = () => {
        switch (currentPage) {
            case '#/products': return <ProductsPage />;
            case '#/brands': return <BrandsPage />;
            case '#/contact': return <ContactPage />;
            default: return <HomePage />;
        }
    };
    
    return (
        <div className="min-h-screen bg-[#0a0a0b] text-white antialiased font-inter">
            <Navbar />
            <main>{renderPage()}</main>
            <Footer />
        </div>
    );
};

export default App;
