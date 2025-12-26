// ProductsPage.js
import { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import ProductCard from '../components/ProductCard';
import { productsData } from '../assets/staticData';
import { useAppContext } from '../CustomHooks/appContext';

const ProductsPage = () => {

  const { categorySelected } = useAppContext();
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [filters, setFilters] = useState({
    categories: categorySelected,
    priceRange: [0, 3000],
    rating: 0,
    inStock: false,
    new: false
  });
  const [sortOption, setSortOption] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);


  // Get unique categories
  const categories = [...new Set(productsData.map(product => product.category))];

  // setFilters(prev => ({ ...prev, categories: categorySelected }));

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];

    // Apply search
    if (searchQuery) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
        // ||
        // product.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filters
    if (filters.categories.length > 0) {
      result = result.filter(product => filters.categories.includes(product.category));
    }

    // Apply price range
    result = result.filter(product =>
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    // Apply rating filter
    if (filters.rating > 0) {
      result = result.filter(product => product.rating >= filters.rating);
    }

    // Apply in stock filter
    if (filters.inStock) {
      result = result.filter(product => product.inStock);
    }

    // Apply new products filter
    if (filters.new) {
      result = result.filter(product => product.new);
    }

    // Apply sorting
    switch (sortOption) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'featured':
      default:
        // Featured is the default order
        break;
    }

    setFilteredProducts(result);
  }, [products, filters, sortOption, searchQuery]);

  // Handle category filter change
  const handleCategoryChange = (category) => {
    setFilters(prev => {
      const categories = prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category];
      return { ...prev, categories };
    });
  };

  // Handle price range change
  // const handlePriceRangeChange = (index, value) => {
  //   setFilters(prev => {
  //     const priceRange = [...prev.priceRange];
  //     priceRange[index] = value;
  //     return { ...prev, priceRange };
  //   });
  // };

  // Handle rating filter change
  const handleRatingChange = (rating) => {
    setFilters(prev => ({ ...prev, rating: prev.rating === rating ? 0 : rating }));
  };

  // Handle checkbox filter change
  const handleCheckboxChange = (filterName) => {
    setFilters(prev => ({ ...prev, [filterName]: !prev[filterName] }));
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      categories: [],
      priceRange: [0, 5000],
      rating: 0,
      inStock: false,
      new: false
    });
    setSearchQuery('');
    setSortOption('featured');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
              <p className="text-gray-600 mt-1">Discover our range of organic and natural products</p>
            </div>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Sort dropdown */}
              <div className="relative">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>

              {/* Filter toggle for mobile */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="md:hidden flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block md:w-64 flex-shrink-0`}>
            <AnimatedSection animation="slide-left">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                  <button
                    onClick={resetFilters}
                    className="text-sm text-green-600 hover:text-green-800"
                  >
                    Reset
                  </button>
                </div>

                {/* Categories */}
                <div className="mb-8">
                  <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          id={category}
                          checked={filters.categories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                          className="h-4 w-4 text-green-600 rounded focus:ring-green-500"
                        />
                        <label htmlFor={category} className="ml-2 text-gray-700">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                {/* <div className="mb-8">
                  <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>{filters.priceRange[0]}</span>
                        <span>{filters.priceRange[1]}</span>
                      </div>
                      <div className="relative pt-1">
                        <div className="flex items-center space-x-2">
                          <input
                            type="range"
                            min="0"
                            max="3000"
                            step="1"
                            value={filters.priceRange[0]}
                            onChange={(e) => handlePriceRangeChange(0, parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                          <input
                            type="range"
                            min="0"
                            max="3000"
                            step="1"
                            value={filters.priceRange[1]}
                            onChange={(e) => handlePriceRangeChange(1, parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Rating */}
                {/* <div className="mb-8">
                  <h3 className="font-medium text-gray-900 mb-3">Customer Rating</h3>
                  <div className="space-y-2">
                    {[4, 3, 2].map(rating => (
                      <div key={rating} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`rating-${rating}`}
                          checked={filters.rating === rating}
                          onChange={() => handleRatingChange(rating)}
                          className="h-4 w-4 text-green-600 rounded focus:ring-green-500"
                        />
                        <label htmlFor={`rating-${rating}`} className="ml-2 flex items-center">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="ml-1 text-gray-700">& up</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* Additional Filters */}
                {/* <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="inStock"
                      checked={filters.inStock}
                      onChange={() => handleCheckboxChange('inStock')}
                      className="h-4 w-4 text-green-600 rounded focus:ring-green-500"
                    />
                    <label htmlFor="inStock" className="ml-2 text-gray-700">
                      In Stock Only
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="new"
                      checked={filters.new}
                      onChange={() => handleCheckboxChange('new')}
                      className="h-4 w-4 text-green-600 rounded focus:ring-green-500"
                    />
                    <label htmlFor="new" className="ml-2 text-gray-700">
                      New Products
                    </label>
                  </div>
                </div> */}
              </div>
            </AnimatedSection>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results count and active filters */}
            <div className="flex flex-wrap items-center justify-between mb-6">
              <p className="text-gray-700">
                Showing <span className="font-medium">{filteredProducts.length}</span> of <span className="font-medium">{products.length}</span> products
              </p>

              {/* Active filters */}
              {/* <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                {filters.categories.map(category => (
                  <span key={category} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {category}
                    <button
                      type="button"
                      onClick={() => handleCategoryChange(category)}
                      className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-green-800 hover:bg-green-200 focus:outline-none"
                    >
                      <span className="sr-only">Remove filter</span>
                      <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                        <path strokeLinecap="round" strokeWidth="1.5" d="m1 1 6 6m0-6-6 6" />
                      </svg>
                    </button>
                  </span>
                ))}
                {filters.rating > 0 && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {filters.rating}+ Stars
                    <button
                      type="button"
                      onClick={() => handleRatingChange(filters.rating)}
                      className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-green-800 hover:bg-green-200 focus:outline-none"
                    >
                      <span className="sr-only">Remove filter</span>
                      <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                        <path strokeLinecap="round" strokeWidth="1.5" d="m1 1 6 6m0-6-6 6" />
                      </svg>
                    </button>
                  </span>
                )}
                {filters.inStock && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    In Stock
                    <button
                      type="button"
                      onClick={() => handleCheckboxChange('inStock')}
                      className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-green-800 hover:bg-green-200 focus:outline-none"
                    >
                      <span className="sr-only">Remove filter</span>
                      <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                        <path strokeLinecap="round" strokeWidth="1.5" d="m1 1 6 6m0-6-6 6" />
                      </svg>
                    </button>
                  </span>
                )}
                {filters.new && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    New Products
                    <button
                      type="button"
                      onClick={() => handleCheckboxChange('new')}
                      className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-green-800 hover:bg-green-200 focus:outline-none"
                    >
                      <span className="sr-only">Remove filter</span>
                      <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                        <path strokeLinecap="round" strokeWidth="1.5" d="m1 1 6 6m0-6-6 6" />
                      </svg>
                    </button>
                  </span>
                )}
              </div> */}
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <div key={product.id} animation="scale" delay={index * 50}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your filters to find what you're looking for.</p>
                <div className="mt-6">
                  <button
                    onClick={resetFilters}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;