import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, CreditCard, Truck, Shield } from 'lucide-react';

const Footer = () => {
  console.log('Rendering Footer component');

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4">🧀 CheeseShop</h3>
              <p className="text-gray-300 leading-relaxed">
                Tu tienda online de confianza para los mejores quesos artesanales 
                del mundo. Calidad premium desde 2003.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">Madrid, España</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">+34 900 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">info@cheeseshop.es</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Inicio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Productos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Categorías</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Ofertas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6">Categorías</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Quesos Duros</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Quesos Blandos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Quesos Azules</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Quesos de Cabra</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Quesos Veganos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Accesorios</a></li>
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h4 className="text-lg font-bold mb-6">Atención al Cliente</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Mi Cuenta</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Seguir Pedido</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Devoluciones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold mb-2">Suscríbete a nuestro newsletter</h4>
              <p className="text-gray-300">
                Recibe ofertas exclusivas y novedades sobre nuestros quesos artesanales.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 text-white"
              />
              <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <CreditCard className="h-8 w-8 text-amber-400" />
              <span className="text-sm text-gray-300">Pago Seguro</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Truck className="h-8 w-8 text-amber-400" />
              <span className="text-sm text-gray-300">Envío Refrigerado</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Shield className="h-8 w-8 text-amber-400" />
              <span className="text-sm text-gray-300">Garantía Total</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 CheeseShop. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>PayPal</span>
              <span>Apple Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;