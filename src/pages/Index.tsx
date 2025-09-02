import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  console.log('Rendering Index page - Cheese Ecommerce');
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <AboutSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;