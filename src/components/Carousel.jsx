import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css';
import 'swiper/css/pagination';

import AnimatedSection from './AnimatedSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, } from 'swiper/modules'


const Carousel = () => {

  const slides = [
    {
      title: "Pure Organic Goodness",
      subtitle: "Farm-fresh products delivered to your doorstep",
      cta: "Shop Now",
      route: "/products",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600",
    },
    {
      title: "Sustainable & Ethical",
      subtitle: "Supporting local farmers and eco-friendly practices",
      cta: "Learn More",
      route: "/about",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600",
    },
    {
      title: "Healthy Living Made Easy",
      subtitle: "Discover our range of organic superfoods",
      cta: "Explore",
      route: "/categories",
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1600",
    },
  ];



  return (
    // <AnimatedSection animation="fade-in">
    <Swiper
      modules={[Autoplay, Pagination]}
      effect="slide"
      fadeEffect={{ crossFade: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true, dynamicBullets: true }}
      // direction={'vertical'}
      loop={true}
      speed={800}
      className="mySwiper h-96 md:h-[35rem]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-3xl">
              <AnimatedSection animation="fade-up" delay={200} repeat>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400} repeat>
                <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={600} repeat>
                <a
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
                  href={slide.route}
                >
                  {slide.cta}
                </a>
              </AnimatedSection>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    // </AnimatedSection>
  );
};

export default Carousel;