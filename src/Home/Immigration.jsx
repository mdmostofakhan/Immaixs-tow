import React, { useEffect, useState } from 'react';

const Immigration = () => {

    const [immigrations, setImmigration] = useState()

    useEffect( () => {
        fetch('immigration.json')
        .then(res => res.json())
        .then(data => setImmigration(data))
        console.log(immigrations)
    },[])

    return (
       <div className='mt-8 container mx-auto '>
        <div className=''>
        <p className='text-6xl font-medium text-center text-[rgb(44,63,105)]'>Immigration Consult</p>
        <p className='mt-8  text-center w-[70%] mx-auto text-gray-400 text-xl'>Cursus porta, feugiat primis in ultrice ligula risus auctor tempus dolor feugiat, felis lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa</p>
        </div>

        <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-5 grid-cols-1 lg:grid-flow-row mt-16 mx-5 '>
        {immigrations?.map((immigration, index) => (
          
             <div key={index} className='w-full relative'>
                 <div className='relative rounded-xl overflow-hidden group'>
                
          <img className='rounded-xl group-hover:scale-125 w-full transition-all  transform duration-300' src={immigration.image} alt="" />
          <div className='absolute w-full hover:bg-black opacity-25 bottom-0 h-full'>
                </div>
          <p className='absolute lg:top-40  sm:text-sm top-80  left-16 md:left-10  lg:text-xl md:top-40 font-bold text-white'>{immigration.name}</p>
        </div>
      </div>
    
  ))}
</div>
       </div>
    );
};

export default Immigration;