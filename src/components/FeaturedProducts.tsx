import React, { useState } from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';

const FeaturedProducts = () => {
  console.log('Rendering FeaturedProducts component');
  
  const [favorites, setFavorites] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: 'Parmesano Reggiano DOP',
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1589881133595-0c66b2abaa6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      badge: 'Bestseller',
      origin: 'Italia'
    },
    {
      id: 2,
      name: 'Brie de Meaux',
      price: 18.50,
      rating: 4.8,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1634141510639-d691d86f47be?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      badge: 'Premium',
      origin: 'Francia'
    },
    {
      id: 3,
      name: 'Queso Aventurero',
      price: 32.00,
      rating: 4.9,
      reviews: 87,
      image: '/lovable-uploads/4b8b1e5f-b8a9-4b6a-9c8d-2e5f3a1b7c9d.png',
      badge: 'Aventura',
      origin: 'México'
    },
    {
      id: 4,
      name: 'Manchego Curado',
      price: 22.00,
      rating: 4.7,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      badge: 'Artesanal',
      origin: 'España'
    },
    {
      id: 5,
      name: 'Roquefort AOP',
      price: 26.75,
      rating: 4.6,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1551909114-f6e7c2c49d6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      badge: 'Exclusivo',
      origin: 'Francia'
    },
    {
      id: 6,
      name: 'Gouda Añejo',
      price: 19.99,
      rating: 4.8,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      badge: 'Nuevo',
      origin: 'Holanda'
    },
    {
      id: 7,
      name: 'Camembert Normandía',
      price: 16.25,
      rating: 4.9,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1634141510639-d691d86f47be?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      badge: 'Orgánico',
      origin: 'Francia'
    }
  ];

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getBadgeColor = (badge: string) => {
    const colors = {
      'Bestseller': 'bg-red-500',
      'Premium': 'bg-purple-500',
      'Artesanal': 'bg-green-500',
      'Exclusivo': 'bg-blue-500',
      'Nuevo': 'bg-orange-500',
      'Orgánico': 'bg-emerald-500',
      'Aventura': 'bg-amber-500'
    };
    return colors[badge as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Productos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestra selección premium de quesos más populares, 
            elegidos por su calidad excepcional y sabor único.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {product.badge}
                </div>

                {/* Favorite button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all duration-200"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.includes(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>

                {/* Origin */}
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                  {product.origin}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reseñas)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-amber-600">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to cart button */}
                <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Añadir al Carrito</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-amber-600 border-2 border-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors">
            Ver Todos los Productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;