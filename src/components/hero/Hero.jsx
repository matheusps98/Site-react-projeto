import './Hero.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importar estilos CSS necessários
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Hero() {
  return (
    <section id="hero" className="hero">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-swiper"
      >
        <SwiperSlide>
          <img 
            src="https://images.unsplash.com/photo-1750190437388-862aeca97f9e?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Slide 1 - Desenvolvimento Web Moderno" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://images.unsplash.com/photo-1750190437388-862aeca97f9e?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Slide 2 - Design Responsivo" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://images.unsplash.com/photo-1750190437388-862aeca97f9e?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Slide 3 - Otimização e Performance" 
          />
        </SwiperSlide>
      </Swiper>
      
      {/* Texto sobreposto ao slider */}
      <div className="hero-text">
        <h2>Meu primeiro site em React</h2>
        <p>Solucionando problemas com React JS!</p>
        <button className="hero-btn">Saiba Mais</button>
      </div>
    </section>
  );
}

export default Hero;