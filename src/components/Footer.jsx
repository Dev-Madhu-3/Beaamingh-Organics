// Footer.js
import AnimatedSection from "./AnimatedSection";
import { mobileNumber, address, mailId } from "../assets/config";
import {socialLinks} from "../assets/staticData"


const Footer = () => {
  return (
    <AnimatedSection animation="fade-up">
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto">
            <AnimatedSection animation="slide-left" delay={200}>
              <div>
                <a href="/">
                  <img
                    className="w-auto mb-4 h-12"
                    src="https://res.cloudinary.com/dpk6qsn0e/image/upload/v1755796960/Screenshot_2025-08-21_220940-removebg-preview_wfwpmj.png"
                    alt="Logo"
                  />
                </a>
                <p className="text-gray-400 mb-4">
                  Your trusted source for certified organic products. Nourishing
                  your body and respecting our planet.
                </p>
                <div className="flex space-x-4">
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

            <AnimatedSection animation="slide-left" delay={300}>
              <div>
                <h4 className="text-lg font-semibold mb-4">Links</h4>
                <ul className="space-y-2">
                  <li>
                    <AnimatedSection animation="slide-right">
                      <a
                        href="/products"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        All Products
                      </a>
                    </AnimatedSection>
                  </li>
                  <li>
                    <AnimatedSection animation="slide-right">
                      <a
                        href="/products"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        New Arrivals
                      </a>
                    </AnimatedSection>
                  </li>
                  <li>
                    <AnimatedSection animation="slide-right">
                      <a
                        href={`tel:${mobileNumber}`}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        Contact Us
                      </a>
                    </AnimatedSection>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={500}>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <address className="not-italic text-gray-400 space-y-2">
                  <p>
                    {address}
                  </p>
                  <p>Phone: {mobileNumber}</p>
                  <p>Email: {mailId}</p>
                </address>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  );
};

export default Footer;
