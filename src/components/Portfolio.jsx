import React from "react";
import eduHub from "../assets/Projects/eduHub.png";
import eCommerce from "../assets/Projects/eCommerce.png";
import chatbot from "../assets/Projects/chatbot.png";
import netflixClone from "../assets/Projects/netflixClone.png";
import medicalapp from "../assets/Projects/medicalapp.png";

const Portfolio = () => {
  const project = [
    {
      id:1,
      name:'Educational Website',
      src:eduHub,
      description: 'This is a project in Nextjs using React,Tailwind & firebase for authintication and database.',
      link:'https://edu-hub-using-nextjs-n4gn.vercel.app/',
    },
    {
      id:2,
      name:"E-commerce",
      src:eCommerce,
      description: 'This is a project using React,Tailwind and used dummy json api to fetch product data.',
      link:'https://ecommerce-app-re2r.onrender.com',
    },
    {
      id:3,
      name:'Chatbot',
      src:chatbot,
      description: 'This is a fullstack project using React for frontend,Node & Express for backend and used google gemini api to fetch the data. ',
      link: 'https://chatbot-frontend-azure.vercel.app/',
    },
    {
      id:4,
      name:"Movie App",
      src:netflixClone,
      description: 'This is a project using React,Tailwind,API fetching & React-Redux.',
      link:'https://movieapp-e6yu.onrender.com/',
    },
    {
      id:5,
      name:"Medical App",
      src:medicalapp,
      description: 'This is a project using Nextjs, React,Tailwind,API fetching & strapi for authintication and database,kinde for email verification.',
      link:'',
      linked:'*still in development',
    },
   ]

  return (
    <div
      name="projects"
      className="w-screen h-full bg-gradient-to-b from-gray-700 via-gray-700 to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-">
        <div className="pb-4 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  justify-center items-center">
        {project.map(({id,name,src,description,link,linked}) => (
      <div key={id} className='w-[300px] h-[300px] m-2 p-2 gap-x-2  bg-transparent cursor-pointer group perspective rounded-lg'>
        <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h- duration-1000 rounded-lg'>
          <div className='absolute backface-hidden border-2 w-full h- rounded-lg'>
            <img src={src} alt="image" className='w-full h- rounded-lg' />
          </div>
          <div className='absolute backface-hidden my-rotate-y-180 w-full h- bg-gray-300 overflow-hidden rounded-lg'>
            <div className='text-center flex flex-col justify-center items-center h- text-black px-2 pb-10'>
                 <h1 className='text-3xl font-semibold'>{name}</h1>
                 <p className='my-2'>{description}</p>
                 <span className="text-red-600 font-semibold">{linked}</span>
                 {link && (
                      <a href={link} target='_blank' rel='noopener noreferrer' className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 border-[2px] border-white mt-2  px-4 py-2 rounded-md absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-2
                      10 scale-0 group-hover:scale-105'>
                           Visit Project 
                      </a>
              )}
                 
            </div>
          </div>
        </div>
      </div>
       ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
