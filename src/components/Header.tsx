import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  console.log('Rendering Header component');

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-amber-600">🧀 CheeseShop</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-amber-600 transition-colors">Inicio</Link>
            <a href="#productos" className="text-gray-700 hover:text-amber-600 transition-colors">Productos</a>
            <a href="#categorias" className="text-gray-700 hover:text-amber-600 transition-colors">Categorías</a>
            <Link to="/sobre-nosotros" className="text-gray-700 hover:text-amber-600 transition-colors">Sobre Nosotros</Link>
            <a href="#contacto" className="text-gray-700 hover:text-amber-600 transition-colors">Contacto</a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-amber-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-amber-600 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="relative text-gray-700 hover:text-amber-600 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-amber-600" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
              <a href="#productos" className="block px-3 py-2 text-gray-700 hover:text-amber-600" onClick={() => setIsMenuOpen(false)}>Productos</a>
              <a href="#categorias" className="block px-3 py-2 text-gray-700 hover:text-amber-600" onClick={() => setIsMenuOpen(false)}>Categorías</a>
              <Link to="/sobre-nosotros" className="block px-3 py-2 text-gray-700 hover:text-amber-600" onClick={() => setIsMenuOpen(false)}>Sobre Nosotros</Link>
              <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-amber-600" onClick={() => setIsMenuOpen(false)}>Contacto</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;