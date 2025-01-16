import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import { FaCopyright } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
const Footer = () => {
  return (
    <div>
        <div className='max-w-[95%] sm:w-[60%] mx-auto '>
                <div className='grid grid-cols-2 gap-10 bg-white/5 rounded-xl sm:p-20 p-10'>

                    {/* Address and contact Section */}
                    <div className='grid grid-rows-3 gap-3'>
                            <div className='flex gap-2'>
                                     <div className='w-[32px] h-[32px] rounded-[50%] bg-white/20 text-center flex items-center'>
                                     <IoLocationSharp 
                                        className='w-[35px] h-[25px] mx-auto'
                                        />
                                     </div>
                                     
                                     <div>
                                        <p className='text-white text-sm sm:text-[18px]'>ShantInagar ,Bhuiyan Toli, <span className='font-bold'> Samlong,Ranchi</span></p>
                                        </div>   
                            </div>
                            <div className='flex '>
                                     <div className='w-[32px] h-[32px] rounded-[50%] bg-white/20 text-center flex items-center'>
                                     <IoCall 
                                        className='w-[25px] h-[25px] mx-auto'
                                        />
                                     </div>
                                     
                                     <div className='flex justify-center align-middle items-center ml-[3%]'>
                                         <p className='text-white text-sm sm:text-md'>+91 <span className='font-bold'> 8051770455</span></p>
                                       
                                        </div>   
                            </div>
                            <div className='flex gap-2'>
                                     <div className='w-[32px] h-[32px] rounded-[50%] bg-white/20 text-center flex items-center'>
                                        <GrMail
                                        className='w-[25px] h-[25px] mx-auto'
                                        />
                                     </div>
                                     
                                     <div  className='flex justify-center align-middle items-center  text-sm sm:text-lg'>
                                        <a  
                                        className='text-blue-800 font-semibold '
                                         href="krshivam455@gmail.com">krshivam455@gmail.com</a>
                                        </div>   
                            </div>
                            
                            
                    </div>

                    {/* About And iter info Section */}
                    <div className='grid grid-rows-3'>
                            <div className='flex justify-center items-center'>
                                <h1 className='text-white font-bold sm:text-3xl text-sm'>About Me </h1>
                            </div>
                            <div className='flex justify-center items-center over'>
                                <p className='text-[13px] text-white/50 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quibusdam.</p>
                            </div>
                            <div className='grid grid-cols-4 -mt-5 sm:mt-2 items-center '>
                                    <div>
                                     <a href="https://www.linkedin.com/in/shivam-das-0155b82aa" target='none'> <FaLinkedin
                                    className='sm:text-3xl text-white mx-auto'
                                    /></a>
                                    </div>
                                    <div>
                                        <a href="https://leetcode.com/u/Shivvy_the_Coder/" target='none'><SiLeetcode className='sm:text-3xl text-white mx-auto'/>
                                        </a>
                                    </div>
                                    <div>
                                    <a href="https://https://github.com/Shivvy-The-Coder" target='none'><FaGithub className='sm:text-3xl text-white mx-auto'/></a>
                                    </div>
                                    <div>
                                    <a href="https://app.netlify.com/teams/shivvy-the-coder/sites" target='none'><SiNetlify  className='sm:text-4xl text-white  mx-auto'/></a>
                                    </div>
                            </div>
                    </div>

                    <div>
                        <p className='text-white text-2xl text-center w-[200%]'>© Owned By Shivam Das</p>
                        <p  className='text-white text-sm text-center w-[200%] '>Images are not owned by me the images are taken from the internet and are used for educational purposes only,For removal of any,Kindly Contact with The provided Number with Owner Info </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Footer