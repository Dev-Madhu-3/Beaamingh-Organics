// ProductDetailPage.js
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  
  // Sample product data with variants
  const productData = {
    id: 1,
    name: 'Organic Honey',
    category: 'Pantry',
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=800'
    ],
    description: 'Our pure, unprocessed organic honey is harvested from the nectar of wildflowers in pristine meadows. Raw and unfiltered, it retains all the natural enzymes, pollen, and propolis that make honey a superfood. With a rich, complex flavor profile and smooth texture, this honey is perfect for sweetening beverages, drizzling over foods, or enjoying by the spoonful.',
    benefits: [
      'Rich in antioxidants',
      'Natural energy booster',
      'Supports digestive health',
      'Soothes sore throats',
      'Promotes wound healing'
    ],
    ingredients: '100% Pure Raw Honey',
    nutritionInfo: {
      calories: '64',
      totalFat: '0g',
      sodium: '0mg',
      totalCarbohydrate: '17g',
      sugars: '17g',
      protein: '0.1g'
    },
    variants: [
      { id: 1, size: '250g', price: 12.99, originalPrice: 15.99, inStock: true },
      { id: 2, size: '500g', price: 22.99, originalPrice: 27.99, inStock: true },
      { id: 3, size: '1kg', price: 39.99, originalPrice: 49.99, inStock: true }
    ],
    relatedProducts: [
      { id: 2, name: 'Avocado Oil', price: 9.99, image: 'https://images.unsplash.com/photo-1526424382096-74a93e105682?auto=format&fit=crop&w=600' },
      { id: 3, name: 'Quinoa Pasta', price: 6.49, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600' },
      { id: 5, name: 'Green Tea', price: 8.99, image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=600' }
    ]
  };

  // State for product
  const [product, setProduct] = useState(productData);
  const [selectedImage, setSelectedImage] = useState(0);

  // Handle quantity change
  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Handle variant change
  const handleVariantChange = (index) => {
    setSelectedVariant(index);
  };

  // Add to cart
  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  // Toggle favorite
  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  // Calculate total price
  const totalPrice = (product.variants[selectedVariant].price * quantity).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="#" className="text-gray-700 hover:text-green-600">
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <a href="#" className="ml-1 text-gray-700 hover:text-green-600 md:ml-2">
                    Products
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-1 text-gray-500 md:ml-2" aria-current="page">
                    {product.name}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Product Images */}
          <AnimatedSection animation="slide-right">
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-w-1 aspect-h-1 bg-white rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index 
                        ? 'border-green-500 ring-2 ring-green-200' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Product Details */}
          <AnimatedSection animation="slide-left">
            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <button
                  onClick={handleToggleFavorite}
                  className={`p-2 rounded-full ${isFavorited ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-red-500 hover:bg-red-50'} transition-colors duration-300`}
                >
                  <svg className="w-6 h-6" fill={isFavorited ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Rating */}
              <div className="mt-4 flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{product.rating} ({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="mt-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">${product.variants[selectedVariant].price}</span>
                  {product.variants[selectedVariant].originalPrice && (
                    <span className="ml-2 text-lg text-gray-500 line-through">${product.variants[selectedVariant].originalPrice}</span>
                  )}
                </div>
                <p className="mt-1 text-sm text-gray-500">In stock</p>
              </div>

              {/* Variant Selection */}
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <div className="mt-2 grid grid-cols-3 gap-3">
                  {product.variants.map((variant, index) => (
                    <button
                      key={variant.id}
                      onClick={() => handleVariantChange(index)}
                      disabled={!variant.inStock}
                      className={`py-3 px-4 border rounded-lg text-center transition-all duration-300 ${
                        selectedVariant === index
                          ? 'border-green-500 bg-green-50 text-green-700 font-medium'
                          : variant.inStock
                            ? 'border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50'
                            : 'border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50'
                      }`}
                    >
                      {variant.size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                <div className="mt-2 flex items-center">
                  <button
                    onClick={() => handleQuantityChange('decrease')}
                    disabled={quantity <= 1}
                    className="p-2 border border-gray-300 rounded-l-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                    </svg>
                  </button>
                  <div className="px-4 py-2 border-t border-b border-gray-300 text-gray-700 w-16 text-center">
                    {quantity}
                  </div>
                  <button
                    onClick={() => handleQuantityChange('increase')}
                    className="p-2 border border-gray-300 rounded-r-lg text-gray-600 hover:bg-gray-50"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="mt-8">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-6 rounded-xl hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  {isAdded ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Add to Cart - ${totalPrice}
                    </>
                  )}
                </button>
              </div>

              {/* Product Info Tabs */}
              <div className="mt-12">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex space-x-8">
                    {['description', 'benefits', 'nutrition', 'reviews'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`py-4 px-1 text-center border-b-2 font-medium text-sm ${
                          activeTab === tab
                            ? 'border-green-500 text-green-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="mt-6">
                  {activeTab === 'description' && (
                    <div className="prose prose-green max-w-none">
                      <p>{product.description}</p>
                      <p className="mt-4">Our honey is sustainably harvested from organic farms that prioritize the health of bees and the environment. We never pasteurize or filter our honey, ensuring you get all the natural goodness nature intended.</p>
                    </div>
                  )}

                  {activeTab === 'benefits' && (
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Health Benefits</h3>
                      <ul className="mt-4 space-y-2">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === 'nutrition' && (
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Nutrition Information</h3>
                      <div className="mt-4 bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-2">Serving Size: 1 tbsp (21g)</p>
                        <p className="text-sm text-gray-600 mb-4">Servings Per Container: ~24</p>
                        <div className="space-y-2">
                          {Object.entries(product.nutritionInfo).map(([key, value]) => (
                            <div key={key} className="flex justify-between text-sm">
                              <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                              <span className="text-gray-900 font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Customer Reviews</h3>
                      <div className="mt-4 space-y-6">
                        {/* Sample review */}
                        <div className="border-b border-gray-200 pb-6">
                          <div className="flex items-center">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">Sarah J.</span>
                            <span className="ml-auto text-sm text-gray-500">2 days ago</span>
                          </div>
                          <p className="mt-2 text-gray-700">This honey is absolutely delicious! It has a rich, complex flavor that you just don't get with store-bought honey. I love that it's raw and unfiltered.</p>
                        </div>
                        
                        {/* Another sample review */}
                        <div>
                          <div className="flex items-center">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">Michael T.</span>
                            <span className="ml-auto text-sm text-gray-500">1 week ago</span>
                          </div>
                          <p className="mt-2 text-gray-700">Great quality honey! I use it every morning in my tea and it tastes amazing. The price is also very reasonable for organic honey.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.relatedProducts.map((relatedProduct) => (
              <AnimatedSection key={relatedProduct.id} animation="scale" delay={100}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-w-1 aspect-h-1">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">{relatedProduct.name}</h3>
                    <p className="mt-1 text-lg font-bold text-green-600">${relatedProduct.price.toFixed(2)}</p>
                    <button className="mt-3 w-full bg-green-50 text-green-700 hover:bg-green-100 font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                      View Product
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;