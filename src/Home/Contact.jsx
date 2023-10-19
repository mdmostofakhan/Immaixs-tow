import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModel = () =>{
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div className='mt-16 text-center'>
          <button 
          onClick={openModel}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 "
          >
          <Icon className=' w-20 h-20 rounded-full text-white  p-2 border-2  border-[rgb(255,69,0)]  ' icon="line-md:youtube-filled" />
          </button>
          {isOpen && (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="modal-content bg-white p-4  rounded-lg">
        <span onClick={closeModal} className="close absolute top-0 right-0 p-2 cursor-pointer">
          &times;
        </span>
        <iframe
         width="450"
          height="445"
           src="https://www.youtube.com/embed/7KmXhRJuEi8?si=_lJzlKKHDacO_3DR"
            title="YouTube video player"
             frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             allowfullscreen
            //  className='w-full'
             >
            
             </iframe>
      </div>
    </div>
  )}
        </div>
    );
};

export default Contact;


