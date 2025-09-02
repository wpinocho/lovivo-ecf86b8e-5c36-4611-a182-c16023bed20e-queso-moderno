import React from 'react';
import { Award, Truck, Shield, Clock } from 'lucide-react';

const AboutSection = () => {
  console.log('Rendering AboutSection component');

  const features = [
    {
      icon: Award,
      title: 'Calidad Premium',
      description: 'Seleccionamos solo los mejores quesos de productores artesanales reconocidos mundialmente.'
    },
    {
      icon: Truck,
      title: 'Envío Refrigerado',
      description: 'Mantenemos la cadena de frío desde nuestro almacén hasta tu puerta para garantizar la frescura.'
    },
    {
      icon: Shield,
      title: 'Garantía de Satisfacción',
      description: 'Si no estás completamente satisfecho, te devolvemos tu dinero sin preguntas.'
    },
    {
      icon: Clock,
      title: 'Entrega Rápida',
      description: 'Recibe tus quesos favoritos en 24-48 horas en toda la península.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Más de 20 años compartiendo 
                <span className="text-amber-600"> la pasión por el queso</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Comenzamos como una pequeña quesería familiar y hemos crecido hasta 
                convertirnos en la tienda online de quesos más confiable del país. 
                Nuestra misión es acercar los mejores quesos artesanales del mundo 
                a tu mesa.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trabajamos directamente con maestros queseros de Francia, Italia, 
                España y otros países para ofrecerte una experiencia gastronómica 
                única y auténtica.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
                <div className="text-gray-600">Variedades de queso</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">50k+</div>
                <div className="text-gray-600">Clientes felices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">15</div>
                <div className="text-gray-600">Países de origen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">98%</div>
                <div className="text-gray-600">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559561853-08451507cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Maestro quesero trabajando"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            
            {/* Floating testimonial */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg max-w-sm">
              <div className="flex items-center space-x-4 mb-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Cliente satisfecho"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">Carlos Mendoza</div>
                  <div className="text-sm text-gray-600">Chef Ejecutivo</div>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                "La calidad de sus quesos es excepcional. Los uso en mi restaurante y siempre recibo elogios."
              </p>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <feature.icon className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;