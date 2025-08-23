import { useState, useEffect } from 'react';

// Product data
const productsData = [
  { id: 1, name: 'Organic Honey', price: 12.99, category: 'Pantry', rating: 4.8, image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=600' },
  { id: 2, name: 'Avocado Oil', price: 9.99, category: 'Oils', rating: 4.7, image: 'https://images.unsplash.com/photo-1526424382096-74a93e105682?auto=format&fit=crop&w=600' },
  { id: 3, name: 'Quinoa Pasta', price: 6.49, category: 'Pantry', rating: 4.5, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600' },
  { id: 4, name: 'Almond Butter', price: 11.99, category: 'Spreads', rating: 4.9, image: 'https://images.unsplash.com/photo-1506808547685-e2ba962ded60?auto=format&fit=crop&w=600' },
  { id: 5, name: 'Green Tea', price: 8.99, category: 'Beverages', rating: 4.6, image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=600' },
  { id: 6, name: 'Chia Seeds', price: 7.49, category: 'Superfoods', rating: 4.8, image: 'https://images.unsplash.com/photo-1527324688151-0e566472469b?auto=format&fit=crop&w=600' },
];

const testimonials = [
  { id: 1, name: 'Sarah J.', text: 'Beaamingh transformed my pantry with quality organic products!', rating: 5 },
  { id: 2, name: 'Michael T.', text: 'Fresh, sustainable, and delicious. Highly recommend!', rating: 5 },
  { id: 3, name: 'Emma L.', text: 'The best organic products I\'ve ever purchased. Worth every penny!', rating: 4 },
];

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(3); // Example cart count

  setCartItems(3); // Example cart count

  return (
    <nav className="bg-white dark:bg-gray-800 antialiased shadow-sm">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              {/* <a href="#" className="text-2xl font-bold text-green-600 dark:text-green-400">
                Beaamingh
              </a> */}
              <a href="#">
                <img
                  className="block w-auto h-12"
                  src="https://res.cloudinary.com/dpk6qsn0e/image/upload/v1755796960/Screenshot_2025-08-21_220940-removebg-preview_wfwpmj.png"
                  alt="Logo"
                />
              </a>
            </div>
            <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
              {['Home', 'Shop', 'Categories', 'Deals', 'About'].map((item) => (
                <li key={item} className="shrink-0">
                  <a href="#" className="flex text-sm font-medium text-gray-900 hover:text-green-600 dark:text-white dark:hover:text-green-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex items-center lg:space-x-2">
            {/* Search */}
            <div className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search organic products..."
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Cart */}
            <div className="relative">
              <button 
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
              >
                <span className="sr-only">Cart</span>
                <svg className="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                </svg> 
                <span className="hidden sm:flex">Cart</span>
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>
              
              {/* Cart Dropdown */}
              {isCartOpen && (
                <div className="absolute right-0 z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-700 mt-2">
                  <div className="grid grid-cols-2">
                    <div>
                      <a href="#" className="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline">
                        Organic Honey
                      </a>
                      <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">$12.99</p>
                    </div>
                    <div className="flex items-center justify-end gap-6">
                      <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">Qty: 1</p>
                      <button className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                        <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <a href="#" className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Proceed to Checkout
                  </a>
                </div>
              )}
            </div>
            
            {/* User Account */}
            <div className="relative">
              <button 
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
              >
                <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>              
                Account
              </button>
              
              {isUserDropdownOpen && (
                <div className="absolute right-0 z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700 mt-2">
                  <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                    {['My Account', 'My Orders', 'Settings', 'Favorites', 'Delivery Addresses', 'Billing Data'].map((item) => (
                      <li key={item}>
                        <a href="#" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
                    <a href="#" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                      Sign Out
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white"
            >
              <span className="sr-only">Open Menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
              </svg>                
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 px-4 mt-4">
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search organic products..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <ul className="text-gray-900 dark:text-white text-sm font-medium space-y-3">
              {['Home', 'Shop', 'Categories', 'Deals', 'About', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: 'Pure Organic Goodness',
      subtitle: 'Farm-fresh products delivered to your doorstep',
      cta: 'Shop Now',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600'
    },
    {
      title: 'Sustainable & Ethical',
      subtitle: 'Supporting local farmers and eco-friendly practices',
      cta: 'Learn More',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600'
    },
    {
      title: 'Healthy Living Made Easy',
      subtitle: 'Discover our range of organic superfoods',
      cta: 'Explore',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Intro = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Welcome to Beaamingh</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted source for certified organic products. We believe in sustainable farming, 
            ethical sourcing, and bringing nature's best to your table.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '🌱', title: '100% Organic', text: 'All our products are certified organic and free from harmful chemicals' },
            { icon: '🚜', title: 'Farm Fresh', text: 'Directly sourced from local farmers to ensure maximum freshness' },
            { icon: '♻️', title: 'Eco-Friendly', text: 'Sustainable packaging and carbon-neutral delivery options' }
          ].map((feature, index) => (
            <div key={index} className="bg-green-50 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  
  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <span className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
          {product.category}
        </span>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <span className="text-lg font-bold text-green-600">${product.price.toFixed(2)}</span>
        </div>
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
        </div>
        <button
          onClick={handleAddToCart}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${
            isAdded 
              ? 'bg-green-100 text-green-800' 
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Organic Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our best-selling organic products, carefully selected for quality and sustainability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have made Beaamingh their trusted organic source.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-green-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };
  
  return (
    <section className="py-16 bg-green-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Community</h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive offers, organic living tips, and new product announcements.
        </p>
        
        {subscribed ? (
          <div className="bg-green-100 text-green-800 py-4 px-6 rounded-lg inline-block">
            Thank you for subscribing! Check your email for a special welcome offer.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            />
            <button
              type="submit"
              className="bg-white text-green-600 hover:bg-green-50 font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">Beaamingh</h3>
            <p className="text-gray-400 mb-4">
              Your trusted source for certified organic products. 
              Nourishing your body and respecting our planet.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'pinterest'].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">{social}</span>
                  <div className="h-6 w-6 bg-gray-700 rounded-full flex items-center justify-center">
                    {social.charAt(0).toUpperCase()}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              {['All Products', 'New Arrivals', 'Best Sellers', 'Special Offers', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {['FAQ', 'Shipping & Returns', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Organic Way, Green Valley</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: hello@beaamingh.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Beaamingh Organic. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/SSL_logo.svg/1200px-SSL_logo.svg.png" alt="Secure Payment" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="PayPal" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div>
      <Carousel />
      <Intro />
      <ProductsSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

const Sample = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
    </div>
  );
};

export default Sample;