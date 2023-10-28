import React, { useEffect, useState } from "react";

const Card = () => {
  const [tabs, setTabs] = useState();
  const [selectedCategory, setSelectedCategory] = useState("category");

  useEffect(() => {
    fetch("partnar.json")
      .then((res) => res.json())
      .then((data) => setTabs(data));
  }, []);

  const handleCategorySelection = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  console.log(tabs);

  return (
    <div className="my-20 container mx-auto">
      <div className="">
        <p className="text-6xl font-medium text-center text-[rgb(44,63,105)]">
          Partner Institutes & Universities
        </p>
        <p className="mt-8  text-center w-[70%] ml-44 text-gray-400 text-xl">
          Cursus porta, feugiat primis in ultrice ligula risus auctor tempus
          dolor feugiat, felis lacinia risus interdum auctor id viverra dolor
          iaculis luctus placerat and massa
        </p>
      </div>

      <div className="flex justify-center mt-8 items-center gap-5">
        {tabs?.map((category, index) => {
          const categoryName = Object.keys(category)[0];
          return (
            <button
              key={index}
              className={`hover:text-red-800 cursor-pointer  ${
                selectedCategory === categoryName ? " text-red-800 " : ""
              }`}
              onClick={() => handleCategorySelection(categoryName)}
            >
              {categoryName} /
            </button>
          );
        })}
      </div>

      <div className="">
        <div className="">
          {tabs?.map((category, index) => {
            const categoryName = Object.keys(category)[0];
            if (categoryName === selectedCategory) {
              const categoryItems = category[categoryName];
              return (
                <div
                  key={index}
                  className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 w-[65%] ml-72 justify-center  gap-5 mt-8"
                >
                  {categoryItems?.map((item, index) => (
                    <div key={index} className="border hover:shadow-xl duration-300 text-center  p-8">
                      <img className="w-full" src={item.image} alt="" />
                      <h2>{item.title}</h2>
                    </div>
                  ))}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
