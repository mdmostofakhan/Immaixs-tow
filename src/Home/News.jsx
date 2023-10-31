import React, { useEffect, useState } from 'react';

const News = () => {
    const [news, setNews] = useState()

    useEffect(() =>{
        fetch("news.json")
        .then(res => res.json())
        .then(data => setNews(data))
    },[])

    console.log(news)

    return (
        <div>
             <div className="flex justify-center flex-col  items-center text-center">
            <p className="text-6xl font-serif  text-[rgb(44,63,105)]">
                Our Stories & Latest News
            </p>
            <p className="mt-5 w-[50%]  text-gray-400 text-xl">
              Cursus porta, feugiat primis in ultrice ligula risus auctor tempus
              dolor feugiat, felis lacinia risus interdum auctor id viverra
              dolor iaculis luctus placerat and massa
            </p>
          </div>
          <div className='flex gap-5 w-[55%] mx-auto'>
              {
                news?.map((item, index) => (
                    
                        <div key={index} className='mt-10'>
                            <img src={item.image} alt="" />
                            <h1 className='mt-6 text-xl'><span className='text-[rgb(102,102,102)] font-bold'>{item.name}</span> - 2 min read</h1>
                            <h1 className='mt-4 text-[rgb(44,63,105)] text-xl font-bold'>{item.title}</h1>
                            <p className='mt-4'>{item.subTitle}</p>
                            <p className='mt-4'>{item.date}</p>
                        </div>
                    
                ))
              }
          </div>
        </div>
    );
};

export default News;