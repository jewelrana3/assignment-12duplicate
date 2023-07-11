import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };


    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide style={{ height: '300px', width:'300px'}}>
                    <img src="https://i.ibb.co/Ry9zGtD/hush-naidoo-jade-photography-ZCO-5-Y29s8k-unsplash.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide style={{ height: '300px' }}>
                    <img  src="https://i.ibb.co/ssnvRLs/li-lin-bsi7b-V1-SR2k-unsplash.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide style={{ height: '300px' }}>
                    <img  src="https://i.ibb.co/87Rykdh/francisco-venancio-M4-Xloxsg0-Gw-unsplash.jpg" alt="" />
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 22" ref={progressCircle}>

                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );

};

export default Banner;