// Footer.js
import AnimatedSection from './AnimatedSection';

  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: '#',
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      animation: 'animate-spin'
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
        </svg>
      ),
      url: '#',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      animation: 'animate-bounce'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
        </svg>
      ),
      url: '#',
      color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500',
      hoverColor: 'hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600',
      animation: 'animate-pulse'
    },
    {
      name: 'Mail',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
        </svg>
      ),
      url: '#',
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      animation: 'animate-ping'
    }
  ];

const Footer = () => {
    return (
        <AnimatedSection animation="fade-up">
            <footer className="bg-gray-900 text-white pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        <AnimatedSection animation="slide-left" delay={200}>
                            <div>
                                {/* <h3 className="text-2xl font-bold text-green-400 mb-4">Beaamingh</h3> */}
                                <a href="#">
                                    <img
                                        className="w-auto mb-4 h-12"
                                        src="https://res.cloudinary.com/dpk6qsn0e/image/upload/v1755796960/Screenshot_2025-08-21_220940-removebg-preview_wfwpmj.png"
                                        alt="Logo"
                                    />
                                </a>
                                <p className="text-gray-400 mb-4">
                                    Your trusted source for certified organic products.
                                    Nourishing your body and respecting our planet.
                                </p>
                                {/* <div className="flex space-x-4">
                                    {['facebook', 'twitter', 'instagram', 'pinterest'].map((social, index) => (
                                        <AnimatedSection key={social} animation="scale" delay={400 + index * 100}>
                                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                                <span className="sr-only">{social}</span>
                                                <div className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
                                                    {social.charAt(0).toUpperCase()}
                                                </div>
                                            </a>
                                        </AnimatedSection>
                                    ))}
                                </div> */}
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <AnimatedSection key={social.name} animation="scale" delay={400 + index * 100}>
                                            <a
                                                href={social.url}
                                                className={`group relative ${social.color} ${social.hoverColor} w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg overflow-hidden`}
                                                aria-label={social.name}
                                            >
                                                {/* Animated background effect */}
                                                <div className={`absolute inset-0 ${social.animation} opacity-30`}></div>

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
                                <h4 className="text-lg font-semibold mb-4">Shop</h4>
                                <ul className="space-y-2">
                                    {['All Products', 'New Arrivals', 'Best Sellers', 'Special Offers', 'Gift Sets'].map((item, index) => (
                                        <li key={item}>
                                            <AnimatedSection animation="slide-right" delay={500 + index * 50}>
                                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{item}</a>
                                            </AnimatedSection>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="slide-left" delay={400}>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Support</h4>
                                <ul className="space-y-2">
                                    {['FAQ', 'Shipping & Returns', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
                                        <li key={item}>
                                            <AnimatedSection animation="slide-right" delay={500 + index * 50}>
                                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{item}</a>
                                            </AnimatedSection>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="slide-left" delay={500}>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                                <address className="not-italic text-gray-400 space-y-2">
                                    <p>123 Nellore, Andhra Pradesh -524320</p>
                                    <p>Phone: (998) 985-9197</p>
                                    <p>Email: mrmadhu@gmail.com</p>
                                </address>
                            </div>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection animation="fade-in" delay={600}>
                        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 text-sm mb-4 md:mb-0">
                                &copy; {new Date().getFullYear()} Beaamingh Organic. All rights reserved.
                            </p>
                            <div className="flex space-x-6">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/SSL_logo.svg/1200px-SSL_logo.svg.png" alt="Secure Payment" className="h-6 opacity-70 hover:opacity-100 transition-opacity duration-300" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="PayPal" className="h-6 opacity-70 hover:opacity-100 transition-opacity duration-300" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6 opacity-70 hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </footer>
        </AnimatedSection>
    );
};


// const Footer = () => {

//   return (
//     <AnimatedSection animation="fade-up">
//       <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
//         {/* Decorative background elements */}
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
//           <div className="absolute top-10 left-10 w-64 h-64 bg-green-400 rounded-full filter blur-3xl"></div>
//           <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
//             <AnimatedSection animation="slide-left" delay={200}>
//               <div>
//                 <h3 className="text-2xl font-bold text-green-400 mb-4">Beaamingh</h3>
//                 <p className="text-gray-400 mb-6">
//                   Your trusted source for certified organic products. 
//                   Nourishing your body and respecting our planet.
//                 </p>

//                 {/* Social Media Icons with Animations */}
//                 <div className="flex space-x-4">
//                   {socialLinks.map((social, index) => (
//                     <AnimatedSection key={social.name} animation="scale" delay={400 + index * 100}>
//                       <a 
//                         href={social.url}
//                         className={`group relative ${social.color} ${social.hoverColor} w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg overflow-hidden`}
//                         aria-label={social.name}
//                       >
//                         {/* Animated background effect */}
//                         <div className={`absolute inset-0 ${social.animation} opacity-30`}></div>

//                         {/* Icon */}
//                         <span className="relative z-10 text-white transition-transform duration-300 group-hover:scale-110">
//                           {social.icon}
//                         </span>

//                         {/* Tooltip */}
//                         <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//                           {social.name}
//                         </span>

//                         {/* Ripple effect */}
//                         <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></span>
//                       </a>
//                     </AnimatedSection>
//                   ))}
//                 </div>
//               </div>
//             </AnimatedSection>

//             <AnimatedSection animation="slide-left" delay={300}>
//               <div>
//                 <h4 className="text-lg font-semibold mb-4">Shop</h4>
//                 <ul className="space-y-2">
//                   {['All Products', 'New Arrivals', 'Best Sellers', 'Special Offers', 'Gift Sets'].map((item, index) => (
//                     <li key={item}>
//                       <AnimatedSection animation="slide-right" delay={500 + index * 50}>
//                         <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center group">
//                           <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
//                           <span className="ml-1">{item}</span>
//                         </a>
//                       </AnimatedSection>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </AnimatedSection>

//             <AnimatedSection animation="slide-left" delay={400}>
//               <div>
//                 <h4 className="text-lg font-semibold mb-4">Support</h4>
//                 <ul className="space-y-2">
//                   {['FAQ', 'Shipping & Returns', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
//                     <li key={item}>
//                       <AnimatedSection animation="slide-right" delay={500 + index * 50}>
//                         <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center group">
//                           <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
//                           <span className="ml-1">{item}</span>
//                         </a>
//                       </AnimatedSection>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </AnimatedSection>

//             <AnimatedSection animation="slide-left" delay={500}>
//               <div>
//                 <h4 className="text-lg font-semibold mb-4">Contact</h4>
//                 <address className="not-italic text-gray-400 space-y-3">
//                   <div className="flex items-start">
//                     <svg className="w-5 h-5 mr-2 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//                     </svg>
//                     <span>123 Organic Way, Green Valley</span>
//                   </div>
//                   <div className="flex items-center">
//                     <svg className="w-5 h-5 mr-2 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                     </svg>
//                     <span>(555) 123-4567</span>
//                   </div>
//                   <div className="flex items-center">
//                     <svg className="w-5 h-5 mr-2 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                       <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                     </svg>
//                     <span>hello@beaamingh.com</span>
//                   </div>
//                 </address>
//               </div>
//             </AnimatedSection>
//           </div>

//           <AnimatedSection animation="fade-in" delay={600}>
//             <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
//               <p className="text-gray-400 text-sm mb-4 md:mb-0">
//                 &copy; {new Date().getFullYear()} Beaamingh Organic. All rights reserved.
//               </p>
//               <div className="flex space-x-6">
//                 {['SSL', 'PayPal', 'Visa'].map((payment) => (
//                   <div key={payment} className="relative group">
//                     <div className="absolute inset-0 bg-green-500 rounded-full opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
//                     <div className="relative w-10 h-6 bg-gray-800 rounded flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
//                       <span className="text-xs font-bold text-white">{payment}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </AnimatedSection>
//         </div>

//         {/* Animated wave at bottom */}
//         <div className="absolute bottom-0 left-0 w-full">
//           <svg className="w-full h-12" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="#065F46" fillOpacity="0.1"/>
//           </svg>
//         </div>
//       </footer>
//     </AnimatedSection>
//   );
// };

export default Footer;