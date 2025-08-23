import Carousel from './Carousel';
import Intro from './Intro';
import ProductsSection from './ProductsSection';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import Footer from './Footer';
import ShopByCategory from './ShopByCategory';

const Home = () => {
  return (
    <div>
      <Carousel />
      <Intro />
      <ProductsSection />
      <ShopByCategory/>
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;