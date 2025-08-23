// Intro.js
import AnimatedSection from './AnimatedSection';

const Intro = () => {
  return (
    <AnimatedSection animation="fade-up">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="fade-up" delay={200}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Welcome to Beaamingh</h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your trusted source for certified organic products. We believe in sustainable farming, 
                ethical sourcing, and bringing nature's best to your table.
              </p>
            </AnimatedSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🌱', title: '100% Organic', text: 'All our products are certified organic and free from harmful chemicals' },
              { icon: '🚜', title: 'Farm Fresh', text: 'Directly sourced from local farmers to ensure maximum freshness' },
              { icon: '♻️', title: 'Eco-Friendly', text: 'Sustainable packaging and carbon-neutral delivery options' }
            ].map((feature, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={600 + index * 200}>
                <div className="bg-green-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="text-4xl mb-4 animate-bounce">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Intro;