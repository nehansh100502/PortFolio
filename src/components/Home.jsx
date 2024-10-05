import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/1 md:mt-9 space-y-2 order-2 md:order-1">
            {/* <span className="text-xl">Welcome, in my Portfolio</span> */}
            <div className="flex space-x-1 text-2xl md:text-2xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["React Developer", "Fontend Developer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm font-extralight md:text-md text-justify">
            Welcome to my Portfolio, I am a passionate Frontend Developer and React Developer 
            with a knack for crafting seamless user experiences. Developed dynamic and responsive 
            web applications using React.js and Tailwind CSS, improving page load speed by 30% and
            enhancing user experience across various devices.
            Implemented global state management using Redux for complex UI components,
             optimizing application
             performance and improving data consistency across multiple views.
            </p>
            <p className="text-sm font-extralight md:text-md text-justify">Optimized rendering and component lifecycle management by utilizing React hooks
               (e.g., useEffect, useState), 
              improving application responsiveness by 20%.</p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://twitter.com/nehasingh3155" target="_blank">
                      <FaTwitter className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/neha-singh-193589290/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.com/channels" target="_blank">
                      <FaDiscord className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <TiHtml5 className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <TbBrandJavascript  className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiTailwindcss className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaCss3Alt className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaGithub className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
