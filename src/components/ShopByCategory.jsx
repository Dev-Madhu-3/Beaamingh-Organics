// ShopByCategory.js
import AnimatedSection from './AnimatedSection';

const ShopByCategory = () => {
  const categories = [
    {
      id: 1,
      name: "Ayurvedic Medicines",
      description: "Traditional healing remedies",
      image: "https://images.unsplash.com/photo-1731597076108-f3bbe268162f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXl1cnZlZGljfGVufDB8fDB8fHww?auto=format&fit=crop&w=800&q=80",
      icon: "🌿"
    },
    {
      id: 2,
      name: "Nutraherbs",
      description: "Herbal supplements & extracts",
      image: "https://images.unsplash.com/photo-1694958477432-a08889e68104?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80",
      icon: "🌱"
    },
    {
      id: 3,
      name: "Nutrition Supplements",
      description: "Vitamins & minerals",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
      icon: "💊"
    },
    {
      id: 4,
      name: "Body & Bath",
      description: "Natural skincare & hygiene",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      icon: "🛁"
    },
    {
      id: 5,
      name: "Organic Farming",
      description: "Sustainable agriculture",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
      icon: "🚜"
    },
    {
      id: 6,
      name: "Animal Nutrition",
      description: "Pet food & supplements",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
      icon: "🐾"
    }
  ];

  return (
    <AnimatedSection animation="fade-up">
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="fade-up" delay={200}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our diverse range of organic and natural products across multiple categories
              </p>
            </AnimatedSection>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <AnimatedSection 
                key={category.id} 
                animation="scale" 
                delay={600 + index * 150}
              >
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Image with overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-md">
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-white/80 mb-4">{category.description}</p>
                      <button className="bg-white text-green-700 hover:bg-green-50 font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg">
                        Shop Now
                      </button>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Call to action */}
          <AnimatedSection animation="fade-up" delay={1200}>
            <div className="mt-16 text-center">
              <div className="inline-block bg-white rounded-2xl shadow-xl p-8 max-w-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't find what you're looking for?</h3>
                <p className="text-gray-600 mb-6">We're constantly expanding our product range. Contact us for special requests.</p>
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Request a Product
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ShopByCategory;