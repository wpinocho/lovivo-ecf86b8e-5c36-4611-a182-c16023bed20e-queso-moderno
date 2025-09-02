import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  console.log('Rendering HeroSection component');

  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-gray-600">Más de 1000 clientes satisfechos</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Los mejores
              <span className="text-amber-600"> quesos artesanales</span>
              de México
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Descubre nuestra selección premium de quesos artesanales, 
              cuidadosamente seleccionados de las mejores queserías mexicanas 
              y locales para tu mesa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2">
                <span>Explorar Productos</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors">
                Ver Ofertas Especiales
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">50+</div>
                <div className="text-gray-600">Variedades</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">24h</div>
                <div className="text-gray-600">Entrega</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">100%</div>
                <div className="text-gray-600">Artesanal</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Selección de quesos artesanales"
                className="rounded-2xl shadow-2xl w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  🧀
                </div>
                <div>
                  <div className="font-semibold">Envío Gratis</div>
                  <div className="text-sm text-gray-600">En pedidos +$50</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <div className="font-semibold">Calidad Premium</div>
                  <div className="text-sm text-gray-600">Garantizada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;