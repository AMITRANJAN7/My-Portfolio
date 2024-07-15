import React from 'react';
import heroimage from "../assets/heroimage.png";

const Footer = () => {
  return (
    

<footer className="bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={heroimage} className="h-8 rounded-full" alt="pic" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Amit's Portfolio</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6  font-medium text-white sm:mb-0 text-lg  ">
                <li>
                    <a href="https://www.linkedin.com/in/amit-ranjan-3ba7b6204" target="_blank"
              rel="noreferrer" className="hover:underline deccoration  me-4 md:me-6 ">Linkedin</a>
                </li>
                <li>
                    <a href="https://github.com/AMITRANJAN7" target="_blank"
              rel="noreferrer" className="hover:underline me-4 md:me-6">Github</a>
                </li>
                <li>
                    <a href="/resume.pdf" className="hover:underline me-4 md:me-6">Resume</a>
                </li>
             </ul>
             <span className=" me-4 text-white my-2 text-lg">Contacts:
                <ul className='hover:underline cursor-pointer'>Mob(Whatsapp) : +91-8825221339</ul>
                <ul className='hover:underline cursor-pointer'>Email : ranjan243593@gmail.com</ul>
             </span>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" class="hover:underline">Amit Kumar Ranjan</a>. All Rights Reserved.</span>
    </div>
</footer>


    
  )
}

export default Footer
