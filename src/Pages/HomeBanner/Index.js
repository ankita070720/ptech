
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Banner1 from "../../assets/images/banner1.jpg";
import Banner2 from "../../assets/images/banner2.jpg";
import Banner3 from "../../assets/images/banner3.jpg";
import Banner4 from "../../assets/images/banner4.jpg";


// import required modules
import {  Navigation, Autoplay } from 'swiper/modules';

export default function HomeBanner() {
  return (
    <>
     <div class="container-fluid overflow-hidden g-0">
        <div class="homeBannerSection">
            <Swiper
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="item w-100 inline-block"><img className='img-fluid' src={Banner1} alt="banner1"/></div></SwiperSlide>
        <SwiperSlide><div className="item w-100 inline-block"><img className='img-fluid' src={Banner2} alt="banner1"/></div></SwiperSlide>
        <SwiperSlide><div className="item w-100 inline-block"><img className='img-fluid' src={Banner3} alt="banner1"/></div></SwiperSlide>
        <SwiperSlide><div className="item w-100 inline-block"><img className='img-fluid' src={Banner4} alt="banner1"/></div></SwiperSlide>
       
        
      </Swiper>
           
            </div>
            
        </div>

        
           
       
      
    </>
  );
}
