import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
import node from "../assets/node.png";
import expressjs from "../assets/expressjs.png";
import"../App.css";



  const MyExperience = () => {
    const techs = [
      {
        id: 1,
        src: html,
        title: "HTML",
        tailwindStyle: "shadow-orange-500",
        customStyle: { "--i": 1 },
      },
      {
        id: 2,
        src: css,
        title: "CSS",
        tailwindStyle: "shadow-blue-500",
        customStyle: { "--i": 2 },
      },
      {
        id: 3,
        src: javascript,
        title: "JavaScript",
        tailwindStyle: "shadow-yellow-500",
        customStyle: { "--i": 3 },
      },
      {
        id: 4,
        src: reactImage,
        title: "React",
        tailwindStyle: "shadow-blue-600",
        customStyle: { "--i": 4 },
      },
      {
        id: 5,
        src: tailwind,
        title: "Tailwind",
        tailwindStyle: "shadow-sky-400",
        customStyle: {"--i": 5}
      },
      {
        id: 6,
        src: nextjs,
        title: "Next JS",
        tailwindStyle: "shadow-white",
        customStyle: { "--i": 6 },
      },
      {
        id: 7,
        src: github,
        title: "GitHub",
        tailwindStyle: "shadow-gray-400",
        customStyle: { "--i": 7 },
      },
      {
        id: 8,
        src: node,
        title: "Nodejs",
        tailwindStyle: "shadow-green-700",
        customStyle: { "--i": 8 },
      },
      {
        id: 9,
        src: expressjs,
        title: "Expressjs",
        tailwindStyle: "shadow-yellow-400",
        customStyle: { "--i": 9 },
      },
      {
        id: 10,
        src: firebase,
        title: "Firebase",
        tailwindStyle: "shadow-yellow-400",
        customStyle: { "--i": 10 },
      },
    ];
  
    return (
      
      <div name='skills' className="bg-gradient-to-b from-gray-700 via-gray-700 to-gray-800 w-screen h-screen">
        <div className="max-w-screen-lg mx-auto p-4  flex flex-col justify-center items-center  w-full h-full text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              TechStacks
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div> 
          <div className=" box  grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">          
          {techs.map(({ id, src, title,tailwindStyle, customStyle }) => (
            <div
              key={id}              
              style={customStyle}
              className={`shadow-md py-2 mt-9 justify-center rounded-lg ${tailwindStyle}`}
            >
              <img src={src} alt="logo" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
      </div>         
        </div>
        </div>
      
    );
  };
  
export default MyExperience;

