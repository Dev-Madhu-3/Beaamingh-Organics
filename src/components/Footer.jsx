// Footer.js
import AnimatedSection from "./AnimatedSection";
import { mobileNumber, address, mailId, logoUrl } from "../assets/config";
import { socialLinks } from "../assets/staticData";

const Footer = () => {
  // Generate Google Maps embed URL from address
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <AnimatedSection animation="fade-up">
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and About Section */}
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="rounded-lg p-4 shadow-lg">
                <a href="/">
                  <img
                    className="w-40 mb-4 h-auto mx-auto"
                    src={logoUrl}
                    alt="Logo"
                  />
                </a>
                <p className="text-gray-400 mb-4 text-center">
                  Your trusted source for certified organic products. Nourishing
                  your body and respecting our planet.
                </p>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <AnimatedSection
                      key={social.name}
                      animation="scale"
                      delay={400 + index * 100}
                    >
                      <a
                        href={social.url}
                        className={`group relative ${social.color} ${social.hoverColor} w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg overflow-hidden`}
                        aria-label={social.name}
                      >
                        {/* Animated background effect */}
                        <div
                          className={`absolute inset-0 ${social.animation} opacity-30`}
                        ></div>

                        {/* Icon */}
                        <span className="relative z-10 text-white transition-transform duration-300 group-hover:scale-110">
                          {social.icon}
                        </span>

                        {/* Tooltip */}
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {social.name}
                        </span>

                        {/* Ripple effect */}
                        <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></span>
                      </a>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Links Section */}
            <AnimatedSection animation="slide-left" delay={300}>
              <div>
                <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <AnimatedSection animation="slide-right">
                      <a
                        href="/products"
                        className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center"
                      >
                        <span className="mr-2">›</span> All Products
                      </a>
                    </AnimatedSection>
                  </li>
                  <li>
                    <AnimatedSection animation="slide-right">
                      <a
                        href="/products"
                        className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center"
                      >
                        <span className="mr-2">›</span> New Arrivals
                      </a>
                    </AnimatedSection>
                  </li>
                  <li>
                    <AnimatedSection animation="slide-right">
                      <a
                        href="/about"
                        className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center"
                      >
                        <span className="mr-2">›</span> About Us
                      </a>
                    </AnimatedSection>
                  </li>
                  <li>
                    {/* <AnimatedSection animation="slide-right">
                      <a
                        href="/blog"
                        className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center"
                      >
                        <span className="mr-2">›</span> Blog
                      </a>
                    </AnimatedSection> */}
                  </li>
                  <li>
                    <AnimatedSection animation="slide-right">
                      <a
                        href={`tel:${mobileNumber}`}
                        className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center"
                      >
                        <span className="mr-2">›</span> Contact Us
                      </a>
                    </AnimatedSection>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Contact Section */}
            <AnimatedSection animation="slide-left" delay={500}>
              <div>
                <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
                  Contact Info
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-400 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-gray-400 text-sm">{address}</p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <p className="text-gray-400 text-sm">+91 {mobileNumber}</p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <p className="text-gray-400 text-sm">{mailId}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Locate Us Section */}
            <AnimatedSection animation="slide-left" delay={600}>
              <div>
                <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
                  Locate Us
                </h4>
                <div className="rounded-lg overflow-hidden shadow-lg h-48">
                  <iframe
                    title="Location Map"
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
                {/* <a
                  href={`https://maps.google.com/maps?q=${encodeURIComponent(
                    address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-green-400 hover:text-green-300 text-sm font-medium transition-colors duration-300"
                >
                  Get Directions →
                </a> */}
              </div>
            </AnimatedSection>
          </div>

          {/* Bottom Copyright Section */}
          {/* <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Organic Store. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="/refund"
                  className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300"
                >
                  Refund Policy
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </footer>
    </AnimatedSection>
  );
};

export default Footer;
