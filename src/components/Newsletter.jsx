// Newsletter.js
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

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
    <AnimatedSection animation="fade-up">
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up" delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Community</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={400}>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, organic living tips, and new product announcements.
            </p>
          </AnimatedSection>
          
          {subscribed ? (
            <AnimatedSection animation="scale">
              <div className="bg-green-100 text-green-800 py-4 px-6 rounded-lg inline-block animate-pulse">
                Thank you for subscribing! Check your email for a special welcome offer.
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection animation="fade-up" delay={600}>
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
                  className="bg-white text-green-600 hover:bg-green-50 font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </AnimatedSection>
          )}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Newsletter;