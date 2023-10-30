import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    const [travels, setTravels] = useState()

    useEffect(() => {
        fetch("file.json")
        .then( res => res.json())
        .then( data => setTravels(data))
        console.log(travels)
    },[])

    return (
        <div>
              <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       {
        travels?.map((travel,index) => (
          <div key={index}>
             <SwiperSlide>

              <div className=''>
              <div
              className='h-[680px] flex justify-center w-full md:items-center lg:items-center  mt-6 bg-cover bg-no-repeat bg-opacity-40 '
              style={{
                backgroundImage: `url(${travel.images})`
                
              }}
              >
                <div className='w-[60%] flex flex-col justify-center '>
                <p className='text-white text-center text-2xl mb-8 '>{travel.title}</p>
                <p className='text-white lg:text-7xl text-center mb-8 font-bold  '>{travel.text}</p>
                <p className='text-white opacity-70 mt-4 mx-auto   italic text-center w-[50%] '>{travel.letter}</p>
             <div className='text-center'>
             <button className='text-white mt-8 text-center bg-[rgb(255,69,0)]   border hover:bg-black w-60 rounded p-2  font-semibold  '>{travel.button}</button>
             </div>
               
                </div>
             </div>
              </div>

              
           </SwiperSlide>
          </div>
        ))}
      </Swiper>
        </div>
    );
};

export default Banner;