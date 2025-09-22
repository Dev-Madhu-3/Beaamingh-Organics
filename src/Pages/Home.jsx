import Carousel from '../components/Carousel';
import Intro from '../components/Intro';
import ProductsSection from '../components/ProductsSection';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import ShopByCategory from '../components/ShopByCategory';

const Home = () => {
  return (
    <main className="flex-grow">
      <Carousel />
      <Intro />
      <ProductsSection />
      <ShopByCategory />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;