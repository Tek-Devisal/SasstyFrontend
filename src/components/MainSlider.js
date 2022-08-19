import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from 'styled-components';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay, Navigation, } from "swiper";

const MainSlider = () => {
  return (
    <div>
        <Swiper
            pagination={{
            dynamicBullets: true,
            }}
            modules={[ Autoplay, Pagination, Navigation]}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            // breakpoints={{
            //     // when window width is >= 640px
            //     640: {
            //       // width: 640,
            //       slidesPerView: 2,
                  
            //     },
            //     // when window width is >= 768px
            //     768: {
            //       // width: 768,
            //       slidesPerView: 3,
            //       // spaceBetween: 40,
            //     },
            //     // when window width is >= 1024px
                
            //   }}
            className="mySwiper"
            style={{ height: "340px", width: "100%", zIndex: 1, borderRadius: "5px" }}
        >
            <SwiperSlide className="slideItem"
                style={{
                    backgroundImage:
                      "url(/Images/sl1.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
                  }}
            >
                {/* Slide 1 */}
            </SwiperSlide>
            <SwiperSlide className="slideItem"
                style={{
                    backgroundImage:
                      "url(/Images/sl2.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
                  }}
            >
                {/* Slide 2 */}
            </SwiperSlide>
            <SwiperSlide className="slideItem"
                style={{
                    backgroundImage:
                      "url(/Images/sl3.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
                  }}
            >
                {/* Slide 3 */}
            </SwiperSlide>
            <SwiperSlide className="slideItem"
                style={{
                    backgroundImage:
                      "url(/Images/sl4.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
                  }}
            >
                {/* Slide 4 */}
            </SwiperSlide>
            <SwiperSlide className="slideItem"
                style={{
                    backgroundImage:
                      "url(/Images/sl5.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
                  }}
            >
                {/* Slide 5 */}
            </SwiperSlide>
            <SwiperSlide className="slideItem"
                style={{
                    backgroundImage:
                      "url(/Images/sl6.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
                  }}
            >
                {/* Slide 6 */}
            </SwiperSlide>
            <SwiperSlide className="slideItem"
                style={{
                    backgroundImage:
                      "url(/Images/sl7.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
                  }}
            >
                {/* Slide 7 */}
            </SwiperSlide>
            
      </Swiper>
    </div>
  )
}

export default MainSlider