import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  console.log('Rendering Testimonials component');

  const testimonials = [
    {
      name: 'María González',
      role: 'Amante del queso',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Increíble variedad y calidad. El Parmesano que pedí llegó en perfectas condiciones y el sabor es excepcional. Definitivamente volveré a comprar.'
    },
    {
      name: 'Roberto Silva',
      role: 'Chef profesional',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Como chef, la calidad es fundamental. CheeseShop nunca me decepciona. Sus quesos franceses son auténticos y llegan siempre frescos.'
    },
    {
      name: 'Ana Martínez',
      role: 'Organizadora de eventos',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Perfecto para mis eventos corporativos. La presentación es impecable y la variedad permite crear tablas de quesos espectaculares.'
    },
    {
      name: 'Diego Herrera',
      role: 'Sommelier',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'La selección de quesos es extraordinaria. Cada variedad tiene su historia y se nota el cuidado en la selección. Altamente recomendado.'
    },
    {
      name: 'Carmen López',
      role: 'Foodie apasionada',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Descubrí sabores que no conocía. El servicio al cliente es excelente y siempre me ayudan a elegir el queso perfecto para cada ocasión.'
    },
    {
      name: 'Luis Rodríguez',
      role: 'Propietario de restaurante',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Trabajo con CheeseShop desde hace 3 años. La consistencia en la calidad y la puntualidad en las entregas los hace mi proveedor de confianza.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Miles de clientes satisfechos confían en nosotros para sus 
            experiencias gastronómicas más especiales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-amber-600 p-3 rounded-full">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center bg-white rounded-2xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para unirte a nuestros clientes satisfechos?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Descubre por qué miles de personas eligen CheeseShop para sus 
            experiencias gastronómicas más especiales.
          </p>
          <button className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-lg">
            Comenzar a Comprar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;