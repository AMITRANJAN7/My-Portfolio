import React from "react";
import heroimage from "../assets/heroimage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import '../index.css'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-screen bg-gradient-to-b from-gray-800 via-gray-700 to-gray-700"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
        <h2 className="text-xl sm:text-xl mt-4 font-bold text-white">
            Hi, I'm Amit Kumar Ranjan
          </h2>
          <h2 className="text-3xl sm:text-2xl font-semibold text-white">
             Frontend Developer 
          </h2>
          <p className="text-white py-4 max-w-md">
            I have about a year of experience in building and desgining webapps/website.
            Currently, I love to work on web application using technologies HTML,CSS,Javascript,
            React,Nextjs,Nodejs, Tailwind & Figma.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border-[1px] border-white bg-gradient-to-b from-cyan-500 to-blue-500 hover:text-lg hover:border-[2px] hover:border-white cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroimage}
            alt="my profile"
            className="blob bg-cover bg-center w-[55%] mx-auto md:w-half shadow-lg transition-all ease-in-out duration-1000 animate-blobin border-[2px] border-white hover:border-blue-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
