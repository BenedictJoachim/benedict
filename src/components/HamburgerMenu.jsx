// src/HamburgerMenu.js
import React, { useState } from 'react';
import { github, instagram, telegram, whatsapp, x } from '../assets/icons';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${isOpen ? 'bg-white-100' : 'bg-transparent'}`}>
      <div>
      <button
        onClick={toggleMenu}
        className="p-2 focus:outline-none"
      >
        <svg
          className="w-6 h-6 z-20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      </div>
      <div
        className={`${
          isOpen ? '-z-10 flex-col bg-white border mr-0 mt-0 w-full lg:w-64' : 'hidden'
        } absolute top-1 right-0  py-5 bg-white`}
      >
        <ul className="mt-10 lg:pr-10">
          <li className='mt-3'>
            <a href="#home" className="px-4 py-4  text-xl hover:text-violet-800">
              My work
            </a>
          </li>
          <li className='mt-3'>
            <a href="#about" className="px-4 py-4 text-xl hover:bg-transparent">
              My archives
            </a>
          </li>
          <li className='mt-3'>
            <a href="#services" className="px-4 py-4 text-xl hover:bg-transparent">
              My resume
            </a>
          </li>
          <li className='mt-3'>
            <a href="#contact" className="px-4 py-4 text-xl hover:bg-transparent">
              Contact
            </a>
          </li>
        </ul>
        <h2 className='ml-3 mt-10 text-2xl text-gray-300'>SAY HELLO!</h2>
        <ul className='mt-2'>
          <li className='px-4 py-4'>benedictorngwandu@gmail.com</li>
          <li className='px-4 py-4'>wa.me/+255759908891</li>
        </ul>
        <div className='flex gap-4 pl-4 mt-10 mb-20'>
          <img src={instagram} width={32} alt="instagram" />
          <img src={github} widith={32} alt="github" />
          <img src={whatsapp} alt="whatsapp" />         
           <img src={x} width={32} alt="x" />
           <img src={telegram} alt="telegram" />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
