import { useState, useEffect } from "react";
import AnimatedSection from "../components/AnimatedSection";
import { companyName, mobileNumber } from "../assets/config";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById("stats");
      if (statsSection) {
        const position = statsSection.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setStatsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About {companyName} Organic
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl">
              Your trusted source for authentic Ayurvedic remedies, herbal
              supplements, and organic wellness products
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/products"
                className="px-6 py-3 bg-white text-green-700 rounded-lg font-medium text-center hover:bg-green-50 transition-colors"
              >
                Explore Our Products
              </a>
              <a
                href={`tel:${mobileNumber}`}
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium text-center hover:bg-green-800 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full filter blur-3xl opacity-20 -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 rounded-full filter blur-3xl opacity-20 translate-y-32 -translate-x-48"></div>
        </div>
      </div>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection animation="fade-up">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2005, Beaamingh Organic began as a small family
                business with a simple mission: to provide authentic,
                high-quality Ayurvedic and herbal products that honor
                traditional wisdom while embracing modern quality standards.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Over the years, we've grown from a single store to a trusted
                name in natural wellness, but our core values remain unchanged.
                We believe in the healing power of nature and are committed to
                bringing you products that are pure, effective, and sustainable.
              </p>
              <p className="text-lg text-gray-700">
                Today, we work with over 200 organic farms and traditional
                practitioners across India to source the finest ingredients for
                our extensive range of wellness products.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dpk6qsn0e/image/upload/v1766658970/agriculture-healthy-food_optimized_600_flqkil.jpg"
                alt="Our organic farm"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Stats Section */}
      <section id="stats" className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedSection animation="fade-up" delay={100}>
              <div
                className={`${statsVisible ? "animate-fade-up" : "opacity-0"}`}
              >
                <div className="text-4xl font-bold text-green-700 mb-2">
                  18+
                </div>
                <div className="text-gray-700">Years in Business</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <div
                className={`${statsVisible ? "animate-fade-up" : "opacity-0"}`}
              >
                <div className="text-4xl font-bold text-green-700 mb-2">
                  200+
                </div>
                <div className="text-gray-700">Partner Farms</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300}>
              <div
                className={`${statsVisible ? "animate-fade-up" : "opacity-0"}`}
              >
                <div className="text-4xl font-bold text-green-700 mb-2">
                  500+
                </div>
                <div className="text-gray-700">Products</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <div
                className={`${statsVisible ? "animate-fade-up" : "opacity-0"}`}
              >
                <div className="text-4xl font-bold text-green-700 mb-2">
                  50K+
                </div>
                <div className="text-gray-700">Happy Customers</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
              Guided by ancient wisdom and modern science, we're committed to
              your wellness journey
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("mission")}
              className={`px-6 py-3 font-medium text-lg ${
                activeTab === "mission"
                  ? "text-green-700 border-b-2 border-green-700"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Our Mission
            </button>
            <button
              onClick={() => setActiveTab("values")}
              className={`px-6 py-3 font-medium text-lg ${
                activeTab === "values"
                  ? "text-green-700 border-b-2 border-green-700"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Our Values
            </button>
            <button
              onClick={() => setActiveTab("quality")}
              className={`px-6 py-3 font-medium text-lg ${
                activeTab === "quality"
                  ? "text-green-700 border-b-2 border-green-700"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Quality Promise
            </button>
          </div>

          <div className="mt-8">
            {activeTab === "mission" && (
              <AnimatedSection animation="fade-in">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-lg text-gray-700 mb-4">
                    To make authentic Ayurvedic and herbal wellness accessible
                    to everyone, providing products that support holistic health
                    while respecting traditional knowledge and environmental
                    sustainability.
                  </p>
                  <p className="text-lg text-gray-700">
                    We strive to bridge ancient wisdom with modern science,
                    creating products that are not only effective but also safe,
                    sustainable, and ethically produced. Our mission is to
                    empower individuals to take control of their health through
                    natural solutions.
                  </p>
                </div>
              </AnimatedSection>
            )}

            {activeTab === "values" && (
              <AnimatedSection animation="fade-in">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <svg
                          className="w-6 h-6 text-green-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3.055 11H5a2 2 0 012 2v1a1 1 0 001 1h1a1 1 0 001-1v-1a2 2 0 012-2h1.945M8 3v9a6 6 0 006 6v9h6v-9a6 6 0 00-6-6zM16 16.5v-1.75a1.25 1.25 0 10-2.5 0v1.75a2.5 2.5 0 002.5 2.5h2.5a2.5 2.5 0 002.5-2.5v-1.75a1.25 1.25 0 10-2.5 0zM19 21v-2a2 2 0 00-2-2H7a2 2 0 00-2 2v2"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Authenticity
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      We honor traditional Ayurvedic formulations and stay true
                      to authentic recipes that have been trusted for
                      generations.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <svg
                          className="w-6 h-6 text-green-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318 1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Purity
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      Our products are free from harmful chemicals, additives,
                      and preservatives. We use only the purest ingredients.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <svg
                          className="w-6 h-6 text-green-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9 9m0 9c1.657 0 3-4.03 3-9s-4.03-3-9-9 9 0 00-9 9m0 9a9 9 0 01-9-9m9 9c0 1.657-4.03 3-9 3s3-4.03 3-9 9 0 019-9z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Sustainability
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      We're committed to sustainable farming practices that
                      protect our planet and support local communities.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <svg
                          className="w-6 h-6 text-green-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v13m0-13V8m0 13l9-9m-9 9l9-9"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Integrity
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      We operate with transparency and honesty in all our
                      business practices, from sourcing to customer service.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            )}

            {activeTab === "quality" && (
              <AnimatedSection animation="fade-in">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Quality Promise
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Quality is at the heart of everything we do. From the farms
                    we partner with to the final product on our shelves, every
                    step is carefully monitored to ensure the highest standards.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010-1.414l-8 8a1 1 0 01-1.414 0l-4 4a1 1 0 001.414 1.414L8.586 10H6a1 1 0 100-2h2.586l4.293-4.293a1 1 0 001.414-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Rigorous Testing
                        </h4>
                        <p className="text-gray-700">
                          All our products undergo multiple quality checks and
                          lab testing to ensure purity and potency.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 001.745.723 3.066 3.066 0 001.745-.723 3.066 3.066 0 001.745-.723 3.066 3.066 0 001.745.723A3.066 3.066 0 016.267 3.455zM16 12a4 4 0 11-8 0 4 4 0 018 0zm-1 0a3 3 0 11-6 0 3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Certified Organic
                        </h4>
                        <p className="text-gray-700">
                          We work with certified organic farms and hold multiple
                          quality certifications.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 00016 0zm1-12a1 1 0 10-2 1 1 0 102 2zM8 5a1 1 0 011-1v1a1 1 0 11-2 0V4a1 1 0 011-1zm1 9a1 1 0 100-2 1 1 0 002 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Fresh Ingredients
                        </h4>
                        <p className="text-gray-700">
                          We use fresh, potent ingredients and avoid long
                          storage periods that reduce effectiveness.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path
                            fillRule="evenodd"
                            d="M4 5a2 2 0 012-2v8a2 2 0 012 2h8a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 4a1 1 0 000 2v4a1 1 0 001 1h4a1 1 0 001-1V9a1 1 0 00-1-1H7z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Traditional Methods
                        </h4>
                        <p className="text-gray-700">
                          Many of our products are made using traditional
                          methods that preserve their natural properties.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </AnimatedSection>
      </section>

      {/* Product Categories Section */}
      {/* <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Product Categories
              </h2>
              <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
                From traditional Ayurvedic remedies to modern nutritional
                supplements, we offer a comprehensive range of wellness products
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Ayurvedic Proprietary Medicines
                </h3>
                <p className="text-gray-700 mb-4">
                  Traditional Ayurvedic formulations for common health concerns,
                  made with authentic herbs following ancient texts.
                </p>
                <a
                  href="/products?category=Ayurvedic+Proprietary+Medicines"
                  className="text-green-700 font-medium hover:text-green-800"
                >
                  Explore Products →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Nutraherbs
                </h3>
                <p className="text-gray-700 mb-4">
                  Herbal juices and extracts that provide concentrated nutrition
                  and therapeutic benefits for modern lifestyles.
                </p>
                <a
                  href="/products?category=Nutraherbs"
                  className="text-green-700 font-medium hover:text-green-800"
                >
                  Explore Products →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Nutrition Supplements
                </h3>
                <p className="text-gray-700 mb-4">
                  Modern nutritional supplements that bridge traditional
                  knowledge with contemporary health science.
                </p>
                <a
                  href="/products?category=Nutrition+Supplements"
                  className="text-green-700 font-medium hover:text-green-800"
                >
                  Explore Products →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🛁</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Body & Bath
                </h3>
                <p className="text-gray-700 mb-4">
                  Natural skincare and personal care products free from harmful
                  chemicals and synthetic additives.
                </p>
                <a
                  href="/products?category=Body+%26+Bath"
                  className="text-green-700 font-medium hover:text-green-800"
                >
                  Explore Products →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🚜</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Organic Farming
                </h3>
                <p className="text-gray-700 mb-4">
                  Sustainable farming products and solutions for organic
                  agriculture and home gardening.
                </p>
                <a
                  href="/products?category=Organic+Farming"
                  className="text-green-700 font-medium hover:text-green-800"
                >
                  Explore Products →
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🐄</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Animal Nutrition
                </h3>
                <p className="text-gray-700 mb-4">
                  Natural and organic nutrition products for the health and
                  wellness of your animal companions.
                </p>
                <a
                  href="/products?category=Animal+Nutrition"
                  className="text-green-700 font-medium hover:text-green-800"
                >
                  Explore Products →
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
              Real experiences from people who have incorporated our products
              into their wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "I've been using the Ashwagandha and Brahmi supplements for
                three months now, and the difference in my stress levels and
                focus is remarkable. I feel more balanced and productive
                throughout the day."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <div className="font-bold text-gray-900">Priya Sharma</div>
                  <div className="text-gray-600 text-sm">
                    Software Engineer, Mumbai
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "The joint pain relief oil has been a game-changer for my
                arthritis. I've tried many products, but this is the only one
                that provides lasting relief without any side effects."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <div className="font-bold text-gray-900">Rajesh Kumar</div>
                  <div className="text-gray-600 text-sm">
                    Retired Teacher, Delhi
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "As someone with sensitive skin, I've always struggled to find
                natural skincare products. The Turmeric face wash and Neem soap
                have completely transformed my skin routine."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                <div>
                  <div className="font-bold text-gray-900">Anita Desai</div>
                  <div className="text-gray-600 text-sm">
                    Yoga Instructor, Pune
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section> */}

      {/* Team Section */}
      {/* <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Leadership Team
              </h2>
              <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
                Meet the passionate individuals behind Beaming Organic
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900">
                  Dr. Arjun Patel
                </h3>
                <p className="text-green-700 mb-2">Founder & CEO</p>
                <p className="text-gray-700">
                  With a PhD in Ayurvedic Medicine and over 25 years of
                  experience, Dr. Patel founded Beaming Organic with a vision to
                  make authentic Ayurvedic remedies accessible to all.
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900">Meera Nair</h3>
                <p className="text-green-700 mb-2">
                  Head of Product Development
                </p>
                <p className="text-gray-700">
                  Meera brings her expertise in herbal formulation and modern
                  nutritional science to create innovative products that blend
                  tradition with effectiveness.
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900">
                  Rohit Sharma
                </h3>
                <p className="text-green-700 mb-2">Head of Sustainability</p>
                <p className="text-gray-700">
                  Rohit ensures our commitment to environmental responsibility
                  through sustainable sourcing, eco-friendly packaging, and
                  community development initiatives.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold mb-4">
              Join Our Wellness Community
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, wellness tips,
              and new product announcements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-green-700 rounded-lg font-medium hover:bg-green-50 transition-colors">
                Subscribe
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
