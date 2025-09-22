// ProductCard.js
import AnimatedSection from './AnimatedSection';

const ProductCard = ({ product }) => {

  const handleAddToCart = () => {

    window.open(
      `https://wa.me/9849939233?text=${encodeURIComponent("Hey, I would like to order the product " + product.name + " priced at ₹ " + product.price)}`,
      '_blank'
    );
  };

  return (
    <AnimatedSection animation="scale">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
        <div className="relative">
          <img src={product.image || "https://res.cloudinary.com/dpk6qsn0e/image/upload/v1758452286/sorry-image-not-available_yyzkrp.jpg"} alt={product.name} className="w-full h-48 object-cover" />
          <span className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded animate-pulse">
            {product.category}
          </span>
          <span className="absolute bottom-4 left-2 bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {product.qty && product.qty.length > 0
              ? product.qty.map((e, i) => (
                <span key={i}>
                  {e}{i < product.qty.length - 1 ? ", " : ""}
                </span>
              ))
              : "🌳"}


          </span>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <span className="text-lg font-bold text-green-600">₹{product.price.toFixed(2)}</span>
          </div>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
          </div>
          <button
            onClick={handleAddToCart}
            className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg`}
          >

            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
            </svg>
            Buy Now
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProductCard;