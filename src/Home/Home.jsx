import React, { useEffect, useState } from 'react';
import Banner from '../components/banner/Banner';
import { Icon } from '@iconify/react';

import About from './About';
import BannerFix from '../components/banner/BannerFix';
import Immigration from './Immigration';
import Card from './Card';
import OurClients from './OurClients';
import News from './News';
import Contact from './Contact';


const Home = () => {
    const [visas, setVisas] = useState()

    useEffect(() => {
        fetch('file2.json')
        .then(res => res.json())
        .then(data => setVisas(data))
        console.log(visas)
    },[])

    return (
        <div>
            <Banner></Banner> 
            <div className='mt-8 mx-auto container  md:grid-cols-2 lg:grid-cols-3   gap-5 grid grid-cols-1'>
              {
                visas?.map((visa,index) => (
                    
                        <div key={index} className='border min-h-40 flex gap-6  mx-auto lg:flex-row  p-5 hover:shadow-lg '>
                            <p className='text-6xl'><span><Icon icon={visa.icon} /></span></p>
                            <div>
                                <p className='text-2xl text-[rgb(44,63,105)] font-bold'>{visa.title}</p>
                                <p className='mt-2 w-[75%] '>{visa.text}</p>
                            </div>
                        </div>
                  
                ))
              }
              </div>
           
              <div className='mt-20 bg-[rgb(248,249,251)]'>
              <About></About>
              </div>
              <div className='mt-12'>
                <BannerFix></BannerFix>
              </div>
              <div>
                <Immigration></Immigration>
              </div>
              <div>
                 <Card></Card>
              </div>
              <div className='my-20'>
                <OurClients></OurClients>
              </div>
              <div className='my-20'>
                 <News></News>
              </div>
              <div className='mt-28'>
                <Contact></Contact>
              </div>
            </div>
    );
};

export default Home;

