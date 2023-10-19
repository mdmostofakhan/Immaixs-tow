import React from 'react';
import img from '../../assets/img-bg.jpg'

const BannerFix = () => {

   const students = [
        {
            id: 1,
            title: "Happy Students",
            text: "820 +"
        },
        {
            id: 2,
            title: "University Partners",
            text: "148"
        },
        {
            id: 3,
            title: "Countries",
            text: "80 +"
        },
        {
            id: 4,
            title: "Immigrations",
            text: "2487"
        }
    ]

    return (
        <div>
             <div
                 className='w-full flex justify-center items-center h-96 bg-fixed bg-cover bg-no-repeat'
                 style={{
                    backgroundImage: `url(${img})`
                 }}
                 >
                   <div>
                   <div className='divide-y-4 divide-x-8 divide-red-700'>
                          <p className='text-5xl mb-12 text-center text-white'>Thousands Of People Choose Our Services</p>
                          <p></p>
                      </div>
                      <div className='flex gap-20 mt-12'>  
                           {
                            students?.map((student, index) => (
                                <div key={index}>
                                    <p className='text-[rgb(252,184,11)] text-center font-semibold text-6xl'>{student.text}</p>
                                    <p className='text-white ml-4 text-center mt-2 text-2xl'>{student.title}</p>
                                </div>
                            ))
                           }
                        </div>
                   </div>
                      
                 </div>
        </div>
    );
};

export default BannerFix;