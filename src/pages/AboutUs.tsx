import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, Users, Heart, Truck, Shield, Clock, MapPin, Phone, Mail } from 'lucide-react';

const AboutUs = () => {
  console.log('Rendering AboutUs page');

  const values = [
    {
      icon: Heart,
      title: 'Pasión por el Queso',
      description: 'Cada queso que seleccionamos refleja nuestra pasión por los sabores auténticos y la tradición quesera mexicana.'
    },
    {
      icon: Award,
      title: 'Calidad Excepcional',
      description: 'Trabajamos solo con maestros queseros que mantienen los más altos estándares de calidad y tradición.'
    },
    {
      icon: Users,
      title: 'Compromiso Social',
      description: 'Apoyamos a pequeños productores locales y contribuimos al desarrollo de comunidades rurales.'
    },
    {
      icon: Shield,
      title: 'Confianza Total',
      description: 'Garantizamos la autenticidad y frescura de cada producto que llega a tu mesa.'
    }
  ];

  const team = [
    {
      name: 'María González',
      position: 'Fundadora & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Con más de 20 años de experiencia en la industria alimentaria, María fundó CheeseShop con la visión de llevar los mejores quesos artesanales mexicanos a todo el país.'
    },
    {
      name: 'Carlos Mendoza',
      position: 'Maestro Quesero',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Experto en quesos artesanales con certificación internacional. Carlos supervisa la selección y calidad de todos nuestros productos.'
    },
    {
      name: 'Ana Rodríguez',
      position: 'Directora de Operaciones',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Especialista en logística y cadena de frío. Ana garantiza que cada queso llegue en perfectas condiciones a nuestros clientes.'
    }
  ];

  const milestones = [
    { year: '2003', event: 'Fundación de CheeseShop como pequeña quesería familiar en Oaxaca' },
    { year: '2008', event: 'Expansión a mercados locales y primeros reconocimientos de calidad' },
    { year: '2012', event: 'Lanzamiento de la tienda online y envíos a nivel nacional' },
    { year: '2018', event: 'Alianzas con más de 50 productores artesanales de todo México' },
    { year: '2021', event: 'Certificación orgánica y sostenible para el 80% de nuestros productos' },
    { year: '2024', event: 'Más de 50,000 clientes satisfechos y 500 variedades de queso' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Nuestra Historia
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Desde 2003, hemos sido pioneros en llevar los mejores quesos artesanales 
              mexicanos directamente del productor a tu mesa, manteniendo viva la tradición 
              quesera de nuestro país.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1559561853-08451507cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Maestro quesero trabajando"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Preservar y promover la rica tradición quesera mexicana, conectando 
                  a maestros artesanos con amantes del queso en todo el país. Nos 
                  comprometemos a ofrecer productos de la más alta calidad mientras 
                  apoyamos a las comunidades rurales y sus tradiciones ancestrales.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ser la plataforma líder en México para quesos artesanales, 
                  reconocida por nuestra excelencia en calidad, servicio al cliente 
                  y compromiso con la sostenibilidad. Aspiramos a llevar los sabores 
                  auténticos de México a mesas de todo el mundo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y acción en CheeseShop
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-shadow">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                  <value.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestro Camino</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de 20 años de crecimiento, innovación y compromiso con la excelencia
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-amber-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-amber-600 mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestro Equipo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Las personas apasionadas que hacen posible CheeseShop
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">¿Quieres Conocer Más?</h2>
            <p className="text-xl mb-8 opacity-90">
              Estamos aquí para responder todas tus preguntas sobre nuestros quesos y servicios
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Ubicación</h3>
                <p className="opacity-90">Oaxaca de Juárez, Oaxaca, México</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
                <p className="opacity-90">+52 951 123 4567</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="opacity-90">hola@cheeseshop.mx</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;