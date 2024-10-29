import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch('./img/Hero_Slider/slider.json')
      .then((res) => res.json())
      .then((data) => setSlides(data.heroSlider))
      .catch((error) => console.log('Error: ', error));
  }, []);

  return (
    <div className='w-full'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className='mySwiper'
      >
        {slides.length > 0 &&
          slides.map((slider) => (
            <SwiperSlide key={slider.id}>
              <div className='relative'>
                <img
                  src={slider.image}
                  alt={slider.alt}
                  className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-full object-cover'
                />
                <div className='absolute inset-0 flex flex-col justify-center items-center text-center p-4'>
                  <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 drop-shadow-md'>
                    {slider.title}
                  </h1>
                  <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 py-2 md:py-3 px-3 md:px-5'>
                    {slider.subtitle}
                  </p>
                  <Link to={'#'}>
                    <button className='md:px-5 md:py-4 sm:px-4 sm:py-3 px-3 py-2 bg-lime-500 hover:bg-lime-600 rounded text-xs sm:text-base font-bold'>
                      {slider.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
