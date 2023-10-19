import React from 'react';
import images from '../assets/image-03.png'
import { Icon } from '@iconify/react';

const About = () => {
    return (
        <div className=' mx-auto w-[65%]  mt-10'>
           <div className='flex  md:gap-24 lg:flex-row md:flex-col flex-col'>
              <div className='w-3/4 relative'>
             <img className='w-full' src={images} alt="" />
             <div className='absolute border w-36 h-36 shadow-2xl shadow-black flex items-center justify-center bg-white top-[38%] translate-x-1 bottom-0 left-[80%]'>
             <p><Icon className=' w-20 h-20 rounded-full text-[rgb(255,69,0)]  p-2 border-2  border-[rgb(255,69,0)]  ' icon="line-md:youtube-filled" /></p>
           </div>
            </div>
            
            <div className='mt-16  '>
                 <p className='ml-1'>WILLIAM SHAKESPEARE</p>
                 <p className='lg:text-5xl mt-8 text-[rgb(44,63,105)] text-3xl font-mediums '>Consultations for <br /> prospective students</p>
                 <div className='mt-10 flex  gap-1'>
                   <div>
                   <Icon className='' icon="octicon:dot-16" />
                   </div>
                    <div >
                    <p className='lg:w-[80%] w-[400px] '>An magnis nulla dolor sapien augue erat iaculis purus tempor magna ipsum vitae purus primis pretium ligula rutrum luctus blandit porta justo integer. Feugiat a primis ultrice ligula</p>
                    </div>
                 </div>
                 <div className='mt-8 flex  gap-1'>
                   <div>
                   <Icon className='' icon="octicon:dot-16" />
                   </div>
                    <div >
                    <p className='lg:w-[80%] w-[400px] '>Nemo ipsam egestas volute turpis dolores and aliquam quaerat sodales sapien undo pretium purus ligula tempus ipsum undo auctor a mauris lectus ipsum blandit</p>
                    </div>
                 </div>
                 <div className='mt-8 flex  gap-1'>
                   <div>
                   <Icon className='' icon="octicon:dot-16" />
                   </div>
                    <div >
                    <p className='lg:w-[80%] w-[400px] '>Quaerat sodales sapien undo euismod purus and blandit laoreet augue an augue egestas. Augue iaculis purus and augue tempor congue magna egestas magna ligula</p>
                    </div>
                 </div>
                 
                 <div className="bg-[rgb(255,69,0)] border mt-8 hover:bg-white w-48 rounded p-4 text-center ">
                 <button className="text-white font-semibold hover:text-black">GET STARTED</button>
           </div>
            </div>
           </div>
         
        </div>
    );
};

export default About;