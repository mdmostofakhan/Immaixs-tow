import React  from 'react';
import images from '../assets/bg-img2.jpg'





const Contact = () => {
   

    return (
        
           <div
           className='w-full bg-fixed bg-cover bg-no-repeat'
           style={{
              backgroundImage: `url(${images})`
           }}
           >
           <div className='flex items-center justify-center gap-10 flex-col md:flex-row  '>
           <div className='text-white w-1/4 '>
             <p className='ml-3 font-semibold'>FREE 24/7 SUPPORT</p>
             <p className='text-5xl font-semibold mt-8'>Get Free & Quality Online Consultation</p>
             <p className='text-xl  font-semibold mt-8'>Euismod risus auctor egestas augue mauri viverra euismod tortor eugiat a mauris placerat</p>
             <p className='mt-5 '>Fringilla risus nec, luctus mauris orci auctor purus euismod and pretium purus at pretium ligula rutrum viverra tortor sapien sodales and primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum viverra tortor gravida</p>
           </div>

           <div className='my-16'>
           <div className="  shadow-2xl  p-8  rounded bg-white ">
           <p className='font-semibold text-center text-black text-2xl'>Request Free Consultation</p>
           <div className="mt-8  w-full">
              <div className="w-full ">
                <input
                  name="name"
                  type="name"
                  placeholder="Name*"
                  required
                  className=" border  w-full border-black p-3 "
                />
              </div>
            </div>
            <div className="mt-6  w-full">
              <div className="w-full ">
                <input
                  name="phone"
                  type="phone"
                  placeholder="Mobile Number*"
                  required
                  className=" border  w-full border-black p-3 "
                />
              </div>
            </div>
            <div className="mt-6  w-full">
              <div className="w-full ">
                <input
                  name="Email"
                  type="Email"
                  placeholder="Email*"
                  required
                  className=" border  w-full border-black p-3 "
                />
              </div>
            </div>
            <div className="mt-6 w-full">
                <div className="w-full relative">
                  <div className="relative">
                    <select className="bg-gray-50 border border-gray-300 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
                      <option selected>Select Visa</option>
                      <option value="US">Student Visa</option>
                      <option value="CA">Travel Visa</option>
                      <option value="FR">Working Visa</option>
                      <option value="DE">Business Visa</option>
                      <option value="DE">Visitor Visa</option>
                      <option value="DE">PR Visa</option>
                    </select>
             
                  </div>
                </div>
              </div>
            <div className="mt-6 w-full">
                <div className="w-full relative">
                  <div className="relative">
                    <select className="bg-gray-50 border border-gray-300  block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
                      <option selected>Visa For</option>
                      <option value="US">United States</option>
                      <option value="CA">Bangladesh</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                      <option value="DE">Japan</option>
                      <option value="DE">Singapore</option>
                    </select>        
                  </div>
                </div>
              </div>

            <div className="bg-[rgb(255,69,0)] flex justify-center border-2 border-black hover:bg-white  items-center w-full p-4 mt-8">
              <button className="text-white font-semibold  z-10 hover:text-black ">SEND REQUEST</button>
            </div>
           </div>
           </div>
           </div>
           </div>
       
        
    );
};

export default Contact;


