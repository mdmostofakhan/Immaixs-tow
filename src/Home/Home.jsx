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
            <div className='mt-8 container mx-auto w-[63%]  gap-5 grid grid-cols-3'>
              {
                visas?.map((visa,index) => (
                    <div key={index}>
                        <div className='border  flex gap-6 p-5 h-40 hover:shadow-lg '>
                            <p className='text-6xl'><span><Icon icon={visa.icon} /></span></p>
                            <div>
                                <p className='text-2xl font-bold'>{visa.title}</p>
                                <p className=' mt-2 '>{visa.text}</p>
                            </div>
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
              <div className='my-20'>
                <Contact></Contact>
              </div>
            </div>
    );
};

export default Home;

