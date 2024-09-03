import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './../swiperofblogs/Swiperofblogs.css';
import nodata from '../swiperofblogs/components/icons/no-data-rafiki.svg'
import { FreeMode } from 'swiper/modules';
import { Link } from "react-router-dom";
import Blogcard from '../blogcard/Blogcard';

function Swiperofblogs({ data }) {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Swiper
            slidesPerView={(screenWidth > 1248) ? 3 : (screenWidth > 670) ? 2 : 1}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper"
        >
            {
                data.map((item, index) => (
                   
                        <SwiperSlide key={index} className="SblogCard" >
                            <Blogcard item={item} />
                        </SwiperSlide>
                   
               
            ))}
        </Swiper>
    );
}

export default Swiperofblogs