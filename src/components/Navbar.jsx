import { useState, useRef, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const cartRef = useRef(null);
  const userRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const MobileMenuButtonRef = useRef(null);
  // can be "cart", "user", "mobile", or null

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log('Clicked outside:', event.target);
      if (
        (cartRef.current && cartRef.current.contains(event.target)) ||
        (userRef.current && userRef.current.contains(event.target)) ||
        (mobileMenuRef.current && mobileMenuRef.current.contains(event.target)) ||
        (MobileMenuButtonRef.current && MobileMenuButtonRef.current.contains(event.target))
      ) {
        // clicked inside one of the dropdowns → do nothing
        return;
      }
      // clicked outside → close
      setOpenDropdown(null);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [cartItems, setCartItems] = useState(3);

  return (
    <AnimatedSection animation="fade-in">
      <nav className="bg-white dark:bg-gray-800 antialiased shadow-sm sticky top-0 z-50">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="shrink-0">
                <a href="#">
                  <img
                    className="block w-auto h-12"
                    src="https://res.cloudinary.com/dpk6qsn0e/image/upload/v1755796960/Screenshot_2025-08-21_220940-removebg-preview_wfwpmj.png"
                    alt="Logo"
                  />
                </a>
              </div>
              <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                {['Home', 'Shop', 'Categories', 'Deals', 'About'].map((item, index) => (
                  <li key={item} className="shrink-0">
                    <AnimatedSection animation="slide-right" delay={index * 100}>
                      <a href="#" className="flex text-sm font-medium text-gray-900 hover:text-green-600 dark:text-white dark:hover:text-green-400">
                        {item}
                      </a>
                    </AnimatedSection>
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
              <div
                // onMouseEnter={() => setIsCartOpen(true)}
                // onMouseLeave={() => setIsCartOpen(false)}
                ref={cartRef}
                className="relative">
                <button
                  // onClick={() => setIsCartOpen(!isCartOpen)}
                  onClick={() => setOpenDropdown(openDropdown === 'cart' ? null : 'cart')}

                  className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
                >
                  <span className="sr-only">Cart</span>
                  <svg className="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                  </svg>
                  <span className="hidden sm:flex">Cart</span>
                  {cartItems > 0 && (
                    <span className="absolute -top-1 -right-1 z-10 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                      {cartItems}
                    </span>
                  )}
                </button>

                {/* Cart Dropdown */}
                {openDropdown === 'cart' && (
                  <AnimatedSection animation="scale">
                    <div className="absolute -right-[300%] mt-2 z-10 w-80 max-w-sm space-y-4 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
                      <div className="grid grid-cols-2 m-2">
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
                  </AnimatedSection>
                )}
              </div>

              {/* User Account */}
              <div className="relative"
                ref={userRef}
              >
                <button
                  // onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  onClick={() => setOpenDropdown(openDropdown === 'user' ? null : 'user')}

                  className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
                >
                  <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  Account
                </button>

                {openDropdown === 'user' && (
                  <AnimatedSection animation="scale">
                    <div className="absolute right-0 z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700 mt-2">
                      <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                        {['My Account', 'My Orders', 'Settings', 'Favorites', 'Delivery Addresses', 'Billing Data'].map((item, index) => (
                          <li key={item}>
                            <AnimatedSection animation="slide-left" delay={index * 50}>
                              <a href="/account" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                                {item}
                              </a>
                            </AnimatedSection>
                          </li>
                        ))}
                      </ul>
                      <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
                        <a href="#" className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                          Sign Out
                        </a>
                      </div>
                    </div>
                  </AnimatedSection>
                )}
              </div>

              {/* Mobile Menu Button */}
              <div ref={MobileMenuButtonRef}>
                <button
                // onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                onClick={() => {
                  console.log('Mobile menu button clicked');
                  setOpenDropdown(openDropdown === 'mobile' ? null : 'mobile')
                }}
                // ref={mobileRef}

                className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white"
              >
                <span className="sr-only">Open Menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                </svg>
                </button>
              </div>
              
            </div>
          </div>

          {/* Mobile Menu */}
          {openDropdown === 'mobile' && (
            <AnimatedSection animation="slide-down">
              <div
                ref={mobileMenuRef}
                className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 px-4 mt-4">
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
                  {['Home', 'Shop', 'Categories', 'Deals', 'About', 'Blog', 'Contact'].map((item, index) => (
                    <li key={item}>
                      <AnimatedSection animation="slide-right" delay={index * 50}>
                        <a href="#" className="hover:text-green-600 dark:hover:text-green-400">
                          {item}
                        </a>
                      </AnimatedSection>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          )}
        </div>
      </nav>
    </AnimatedSection>
  );
};

export default Navbar;
