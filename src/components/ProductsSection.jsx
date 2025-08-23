// ProductsSection.js
import AnimatedSection from './AnimatedSection';
import ProductCard from './ProductCard';

const productsData = [
  { id: 1, name: 'Organic Honey', price: 12.99, category: 'Pantry', rating: 4.8, image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=600' },
  { id: 2, name: 'Avocado Oil', price: 9.99, category: 'Oils', rating: 4.7, image: 'https://images.unsplash.com/photo-1526424382096-74a93e105682?auto=format&fit=crop&w=600' },
  { id: 3, name: 'Quinoa Pasta', price: 6.49, category: 'Pantry', rating: 4.5, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600' },
  { id: 4, name: 'Almond Butter', price: 11.99, category: 'Spreads', rating: 4.9, image: 'https://images.unsplash.com/photo-1506808547685-e2ba962ded60?auto=format&fit=crop&w=600' },
  { id: 5, name: 'Green Tea', price: 8.99, category: 'Beverages', rating: 4.6, image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=600' },
  { id: 6, name: 'Chia Seeds', price: 7.49, category: 'Superfoods', rating: 4.8, image: 'https://images.unsplash.com/photo-1642497393633-a19e9231fb92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpYSUyMHNlZWRzfGVufDB8fDB8fHww?auto=format&fit=crop&w=600' },
];

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
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <AnimatedSection animation="fade-up" delay={600}>
              <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                View All Products
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ProductsSection;