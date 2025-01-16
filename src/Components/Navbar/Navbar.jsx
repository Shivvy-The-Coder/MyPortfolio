

import React from 'react';
import Logo from '/Images/Logo.png';
import Button from '../Buttons/Button';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { FaAnglesDown } from 'react-icons/fa6';

const Actions = [
  { id: 1, name: 'About' },
  { id: 2, name: 'Skills' },
  { id: 3, name: 'Projects' },
  { id: 4, name: 'Works' },
];

const Connect = [
  { id: 1, name: 'Contact Me' },
  { id: 2, name: 'Mail' },
  { id: 3, name: 'Login' },
  { id: 4, name: 'Sign Up' },
];

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <div
        className="
          fixed top-0 left-1/2 
          w-[90%] sm:w-[80%]
          mt-3 
          z-[2000]
          text-white 
          bg-white/4 backdrop-blur-xl border border-white/20 shadow-lg rounded-sm
        "
      >
        <div className="grid grid-cols-3 items-center">
          {/* Logo Section */}
          <div className="flex justify-center p-1 relative">
            <div className="object-cover w-[50%] xxs:w-[60%] xs:w-[45%] sm:w-[30%] md:w-[120px] relative">
              <img className="drop-shadow-2xl" src={Logo} alt="" />
            </div>
            <div className="absolute xxs:top-[40%]">
              <h1 className="font-Royale text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-thin">Shivam</h1>
            </div>
          </div>

          {/* Middle Navbar */}
          <div
            className="
              font-Poppin invisible md:visible
              lg:w-[80%] md:w-[110%] 
              mx-auto bg-white/10
              backdrop-blur-md border border-white/20 shadow-lg
              p-[2.5%] rounded-lg overflow-hidden
            "
          >
            <div className="grid grid-cols-4 gap-2 text-[70%]">
              {Actions.map((data) => (
                <Button className="text-yellow-400" key={data.id} name={data.name} />
              ))}
            </div>
          </div>

          {/* Ending Section */}
          <div className="cursor-pointer flex xxs:justify-end sm:justify-center font-Poppin text-[90%] xxs:max-w-[100%]">
            <div className="font-serif flex flex-cols-3 gap-4 items-center justify-center text-xl">
              <div className="relative group transition-all duration-200">
                <FaAnglesDown
                  className="
                    group
                    sm:hidden
                    transition-all 
                    duration-400
                    group-hover:rotate-180
                    text-3xl
                  "
                />
                <div className="absolute hidden group-hover:block w-[500%] rounded-md bg-transparent border-white top-[32px] right-[2px]">
                  <ul>
                    {Actions.map((data) => (
                      <li
                        className="text-black inline-block w-full rounded-md p- text-[70%] text-center bg-white mt-1 cursor-pointer"
                        key={data.id}
                      >
                        {data.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative group transition-all duration-200">
                <BiSearchAlt
                  className="
                    text-3xl
                    group
                    transition-all
                    duration-300 
                    group-hover:scale-[120%]
                  "
                />
                <div className="absolute hidden group-hover:block w-[100px] right-2">
                  <input
                    className="w-[150%] h-5 rounded-lg p-[5px] text-sm"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </div>

              <div className="relative group transition-all duration-400">
                <AiOutlineUser
                  className="
                    group
                    transition-all 
                    duration-400
                    group-hover:scale-125
                    text-3xl
                  "
                />
                <div className="absolute hidden group-hover:block w-[500%] rounded-md bg-transparent border-white top-[32px] right-[2px]">
                  <ul>
                    {Connect.map((data) => (
                      <li
                        className="text-black inline-block w-full rounded-md p- text-[70%] text-center bg-white mt-1 cursor-pointer"
                        key={data.id}
                      >
                        {data.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Components */}
      <div className="pt-[70px]">
        {/* Add your main content here */}
      </div>
    </>
  );
};

export default Navbar;
