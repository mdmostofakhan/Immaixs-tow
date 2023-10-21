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
       <div className='mt-8 w-7/12 mx-auto'>
        <div className=''>
        <p className='text-6xl font-medium text-center text-[rgb(44,63,105)]'>Immigration Consult</p>
        <p className='mt-8  text-center w-[70%] ml-44 text-gray-400 text-xl'>Cursus porta, feugiat primis in ultrice ligula risus auctor tempus dolor feugiat, felis lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa</p>
        </div>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:grid-flow-row mt-16 gap-4'>
        {immigrations?.map((immigration, index) => (
            <div key={index}>
             <div className='w-full relative'>
                 <div className='relative rounded-xl overflow-hidden group'>
                
          <img className='rounded-xl group-hover:scale-125 transition-all transform duration-300' src={immigration.image} alt="" />
          <div className='absolute w-full hover:bg-black opacity-25 bottom-0 h-full'>
                </div>
          <p className='absolute lg:top-40  sm:text-sm top-40  left-16 md:left-10  lg:text-xl md:top-40 font-bold text-white'>{immigration.name}</p>
        </div>
      </div>
    </div>
  ))}
</div>
       </div>
    );
};

export default Immigration;