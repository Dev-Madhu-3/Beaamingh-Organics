// NotFoundPage.js
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const NotFoundPage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Page Not Found - Beaamingh';
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl w-full">
        <div className="text-center">
          <AnimatedSection animation="scale">
            {/* 404 Number with animation */}
            <div className="relative inline-block mb-8">
              <div className="text-9xl md:text-[200px] font-bold text-green-500 opacity-20 absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4">
                404
              </div>
              <div className="text-9xl md:text-[200px] font-bold text-green-600 relative">
                404
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={400}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </p>
          </AnimatedSection>
          
          {/* Search Bar */}
          {/* <AnimatedSection animation="fade-up" delay={600}>
            <div className="max-w-xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <button className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="bg-green-600 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-green-700 transition-colors duration-300">
                    Search
                  </span>
                </button>
              </div>
            </div>
          </AnimatedSection> */}
          
          {/* Action Buttons */}
          <AnimatedSection animation="fade-up" delay={800}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Go to Homepage
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105 shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Browse Products
              </Link>
            </div>
          </AnimatedSection>
          
          {/* Helpful Links */}
          <AnimatedSection animation="fade-up" delay={1000}>
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">You might be looking for</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Ayurvedic Medicines', icon: '🌿', link: '/products?category=Ayurvedic Medicines' },
                  { name: 'Nutrition Supplements', icon: '💊', link: '/products?category=Nutrition Supplements' },
                  { name: 'Organic Farming', icon: '🚜', link: '/products?category=Organic Farming' },
                  { name: 'Body & Bath', icon: '🛁', link: '/products?category=Body and Bath' },
                  { name: 'Contact Us', icon: '📞', link: '/contact' },
                  { name: 'About Us', icon: 'ℹ️', link: '/about' }
                ].map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="flex items-center p-4 rounded-lg hover:bg-green-50 transition-colors duration-300 group"
                  >
                    <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <span className="text-gray-700 group-hover:text-green-700 font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          {/* Decorative elements */}
          <AnimatedSection animation="fade-up" delay={1200}>
            <div className="mt-16 flex justify-center space-x-8">
              {['🌱', '🌿', '🍃', '🌳'].map((item, index) => (
                <div key={index} className="text-4xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                  {item}
                </div>
              ))}
            </div>
            <div className="MMTT">wertyuiopasdfghjkl;zxcvbnm</div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;