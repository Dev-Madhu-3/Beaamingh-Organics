// ProductsSection.js
import AnimatedSection from './AnimatedSection';
import ProductCard from './ProductCard';
import { productsData } from '../assets/items';
import { Link } from 'react-router-dom';

const products = productsData.sort(() => 0.5 - Math.random()).slice(0, 9);

const ProductsSection = () => {
  return (
    <AnimatedSection animation="fade-up">
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimatedSection animation="fade-up" delay={200}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Organic Products</h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our best-selling organic products, carefully selected for quality and sustainability.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <AnimatedSection animation="fade-up" delay={600}>
              <Link to="/products" className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                View All Products
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ProductsSection;