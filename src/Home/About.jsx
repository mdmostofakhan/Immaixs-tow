import React, { useState } from 'react';
import images from '../assets/image-03.png'
import { Icon } from '@iconify/react';

const About = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
    return (
        <div className=' mx-auto w-[65%]  mt-10'>
           <div className='flex  md:gap-24 lg:flex-row md:flex-col flex-col'>
              <div className='w-3/4 relative'>
             <img className='w-full' src={images} alt="" />
             <div className='absolute border w-36 h-36 shadow-2xl  flex items-center justify-center bg-white top-[38%]  bottom-0 left-[80%]'>
             <button 
             className='bg-white hover:bg-white  text-red-600 '
             onClick={openModal}
             >
                <Icon className=' w-20 h-20 rounded-full  p-2 border-2  border-[rgb(255,69,0)]  ' icon="line-md:youtube-filled" />
             </button>
             { isOpen && (
              <div className='fixed inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center z-10 '>
                <div className='modal-content  relative bg-black p-4  '>
                    <span onClick={closeModal} className='close absolute -top-6 -right-3 cursor-pointer'>
                    <Icon className=' text-white bg-black btn-circle' icon="ic:twotone-close" />
                    </span>
                    <iframe
                    width="750"
                     height="360"
                      src="https://www.youtube.com/embed/7KmXhRJuEi8?si=OM3HRFWqUeSzvRmx"
                     title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowfullscreen
                     className='shadow-2xl'
                     ></iframe>
                </div>
               </div>
             )}
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
                    <p className='lg:w-[80%] w-[300px] '>An magnis nulla dolor sapien augue erat iaculis purus tempor magna ipsum vitae purus primis pretium ligula rutrum luctus blandit porta justo integer. Feugiat a primis ultrice ligula</p>
                    </div>
                 </div>
                 <div className='mt-8 flex  gap-1'>
                   <div>
                   <Icon className='' icon="octicon:dot-16" />
                   </div>
                    <div >
                    <p className='lg:w-[80%] w-[300px] '>Nemo ipsam egestas volute turpis dolores and aliquam quaerat sodales sapien undo pretium purus ligula tempus ipsum undo auctor a mauris lectus ipsum blandit</p>
                    </div>
                 </div>
                 <div className='mt-8 flex  gap-1'>
                   <div>
                   <Icon className='' icon="octicon:dot-16" />
                   </div>
                    <div >
                    <p className='lg:w-[80%] w-[300px] '>Quaerat sodales sapien undo euismod purus and blandit laoreet augue an augue egestas. Augue iaculis purus and augue tempor congue magna egestas magna ligula</p>
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