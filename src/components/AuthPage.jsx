// AuthPage.js
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!isLogin && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
          // Reset form
          setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
        }, 3000);
      }, 1500);
    }
  };

  // Toggle between login and register
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setSubmitSuccess(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOTEzOSAxLjc5MDg2MS00IDQtNHM0IDEuNzkwODYxIDQgNC0xLjc5MDg2MSA0LTQgNC00LTEuNzkwODYxLTQtNHptMCAxNmMwLTIuMjA5MTM5IDEuNzkwODYxLTQgNC00czQgMS43OTA4NjEgNCA0LTEuNzkwODYxIDQtNCA0LTQtMS43OTA4NjEtNC00em0wLTE2YzAtMi4yMDkxMzkgMS43OTA4NjEtNCA0LTRzNCAxLjc5MDg2MSA0IDQtMS43OTA4NjEgNC00IDQtNC0xLjc5MDg2MS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>
      
      <div className="relative z-10 w-full max-w-md">
        <AnimatedSection animation="scale">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header with gradient background */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">
                {isLogin ? 'Welcome Back' : 'Join Beaamingh'}
              </h2>
              <p className="text-green-100">
                {isLogin 
                  ? 'Sign in to your account' 
                  : 'Create your account to get started'}
              </p>
            </div>
            
            {/* Form body with fixed height */}
            <div className="p-8" style={{ minHeight: '500px' }}>
              {submitSuccess ? (
                <AnimatedSection animation="scale">
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {isLogin ? 'Login Successful!' : 'Registration Successful!'}
                    </h3>
                    <p className="text-gray-600">
                      {isLogin 
                        ? 'Redirecting to your dashboard...' 
                        : 'Please check your email to verify your account.'}
                    </p>
                  </div>
                </AnimatedSection>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isLogin && (
                    <AnimatedSection animation="slide-right">
                      <div className="mb-2">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">
                          Full Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-3 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ${
                              errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="John Doe"
                          />
                        </div>
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>
                    </AnimatedSection>
                  )}
                  
                  <AnimatedSection animation={isLogin ? "slide-right" : "slide-right"} delay={isLogin ? 0 : 100}>
                    <div className="mb-2">
                      <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-3 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="you@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </AnimatedSection>
                  
                  <AnimatedSection animation={isLogin ? "slide-right" : "slide-right"} delay={isLogin ? 0 : 200}>
                    <div className="mb-2">
                      <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-3 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ${
                            errors.password ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="••••••••"
                        />
                      </div>
                      {errors.password && (
                        <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                      )}
                    </div>
                  </AnimatedSection>
                  
                  {!isLogin && (
                    <AnimatedSection animation="slide-right" delay={300}>
                      <div className="mb-2">
                        <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-1">
                          Confirm Password
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-3 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition ${
                              errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="••••••••"
                          />
                        </div>
                        {errors.confirmPassword && (
                          <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
                        )}
                      </div>
                    </AnimatedSection>
                  )}
                  
                  <div className="flex flex-col justify-between flex-grow">
                    <AnimatedSection animation="fade-up" delay={isLogin ? 300 : 400}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                          />
                          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                            Remember me
                          </label>
                        </div>
                        
                        {isLogin && (
                          <div className="text-sm">
                            <a href="#" className="font-medium text-green-600 hover:text-green-500">
                              Forgot password?
                            </a>
                          </div>
                        )}
                      </div>
                    </AnimatedSection>
                    
                    <AnimatedSection animation="fade-up" delay={isLogin ? 400 : 500}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                        )}
                      </button>
                    </AnimatedSection>
                  </div>
                </form>
              )}
              
              <AnimatedSection animation="fade-up" delay={600}>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                    <button
                      onClick={toggleAuthMode}
                      className="font-medium text-green-600 hover:text-green-500 transition-colors duration-300"
                    >
                      {isLogin ? 'Sign up' : 'Sign in'}
                    </button>
                  </p>
                </div>
              </AnimatedSection>
              
              {/* Social login */}
              <AnimatedSection animation="fade-up" delay={700}>
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-300">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </button>
                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-300">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                      </svg>
                    </button>
                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-300">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Custom styles for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default AuthPage;