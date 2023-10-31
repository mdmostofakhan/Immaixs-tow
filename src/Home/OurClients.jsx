import React, { useEffect, useState } from "react";
import images from "../assets/bg-images.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay, Pagination } from "swiper/modules";

const OurClients = () => {
  const [cards, setCards] = useState();

  useEffect(() => {
    fetch("our.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  // console.log(cards);

  return (
        <div
          className="bg-cover   w-full  bg-[rgb(248,249,251)]  bg-no-repeat box-border"
          style={{
            backgroundImage: `url(${images})`,
          }}
        >
          <div className="flex justify-center flex-col  items-center text-center">
            <p className="text-6xl font-serif mt-24 text-[rgb(44,63,105)]">
              What Our Clients Say
            </p>
            <p className="mt-5 w-[50%]  text-gray-400 text-xl">
              Cursus porta, feugiat primis in ultrice ligula risus auctor tempus
              dolor feugiat, felis lacinia risus interdum auctor id viverra
              dolor iaculis luctus placerat and massa
            </p>
          </div>
          <div className="w-2/3 mx-auto">
          <Swiper
          slidesPerView={1}
          
          breakpoints= {{
            320: {
                slidesPerView: 1, // Show 1 slide on screens of width 320px
            },
            375: {
                slidesPerView: 1, // Show 2 slides on screens of width 375px
            },
            425: {
                slidesPerView: 1, // Show 3 slides on screens of width 425px
            },
            768: {
                slidesPerView: 2, // Show 4 slides on screens of width 768px
            },
            1024: {
                slidesPerView: 3, // Show 5 slides on screens of width 1024px
            },
            1440: {
                slidesPerView: 3, // Show 6 slides on screens of width 1440px
            },
            2560: {
                slidesPerView: 3, // Show 7 slides on screens of width 2560px
            },}}
            spaceBetween={10}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }} 
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Autoplay, Pagination]}
            className="mySwiper"
          >
            <div className="mx-auto container">
              {cards?.map((category, index) => (
                
                  <SwiperSlide>
               
                <div key={index} className="border  bg-white mt-14 rounded-lg p-6">
                 <div className="flex items-center  gap-5">
                      <img
                        className="w-[80px] h-[80px] rounded-full"
                        src={category.image}
                        alt=""
                      />
                      <div>
                        <h1 className="text-[rgb(44,63,105)] text-2xl font-bold">{category.name}</h1>
                        <p className="text-xl">{category.title}</p>
                      </div>
                    </div>
                    <p className="mt-4 mx-4">{category.subTitle}</p>
                 </div>
             
                  </SwiperSlide>
                
              ))}
            </div>
          </Swiper>
          </div>
        </div>
      
    
  );
};

export default OurClients;
