import React from 'react';

const Categories = () => {
  console.log('Rendering Categories component');

  const categories = [
    {
      name: 'Quesos Duros',
      description: 'Parmesano, Manchego, Cheddar',
      image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      count: '15 productos'
    },
    {
      name: 'Quesos Blandos',
      description: 'Brie, Camembert, Ricotta',
      image: 'https://images.unsplash.com/photo-1634141510639-d691d86f47be?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      count: '12 productos'
    },
    {
      name: 'Quesos Azules',
      description: 'Roquefort, Gorgonzola, Stilton',
      image: 'https://images.unsplash.com/photo-1551909114-f6e7c2c49d6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      count: '8 productos'
    },
    {
      name: 'Quesos de Cabra',
      description: 'Frescos y curados',
      image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      count: '10 productos'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explora Nuestras Categorías
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde quesos suaves y cremosos hasta variedades intensas y curadas, 
            encuentra el queso perfecto para cada ocasión.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium">
                  {category.count}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <button className="text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                  Ver productos →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;