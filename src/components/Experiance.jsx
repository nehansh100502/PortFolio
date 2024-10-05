import React from "react";
import MongoDB from "../../public/mongodb.jpg";
import html from "../../public/html.png";
import css from "../../public/css.png";
import javascript from "../../public/javascript.png";
import node from "../../public/githubicon.jpeg";
import express from "../../public/reacticon.png";
import tailwind from "../../public/tailwind.jpg";
import postman from "../../public/postman.png";

function Experiance() {
  const cardItem = [
    {
      id: 3,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
   
    {
      id: 6,
      logo: express,
      name: "React.js",
    },

    {
      id: 7,
      logo: tailwind,
      name: "Tailwind",
    },
    {
      id: 5,
      logo: node,
      name: "GitHub",
    },
    {
      id: 8,
      logo: postman,
      name: "Postman",
    },
    {
      id: 1,
      logo: MongoDB,
      name: "MongoDB",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>

        <p className="  ">
          Fresher <br/>
          I've more than 1 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[150px] md:h-[150px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
