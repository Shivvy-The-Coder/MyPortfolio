import React from 'react'
import Logo from "/Images/Logo.png"
import Button from '../Buttons/Button';
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>

        {/* Navbar sectoion begins here */}
            <div className='grid grid-cols-3 
            max-w-[100%]
            justify-between items-center align-middle mt-[12px]  text-white '>

                {/* this will be for the "Logo Begins" of the PortFolio */}
                
                <div className='flex justify-center p-1 relative'>
                        {/* this is the Image Section */}
                        <div className='object-cover w-[50%] xxs:w-[60%] xs:w-[45%] sm:w-[30%] md:w-[120px] relative '>
                                <img className="drop-shadow-2xl" 
                                src={Logo} alt="" />
                        </div>
                        {/* this is the text Section */}
                        <div className='absolute  xxs:top-[40%]  '>
                                <h1 
                                className=
                                'font-Royale text-2xl sm:text-2xl md:text-3xl lg:text-5xl  font-thin '>
                                        Shivam 
                                </h1>
                        </div>

                </div>
                {/* this will be for the "Logo Ends" of the PortFolio */}

                

                {/* Middle Navbar begins Here */}
                <div 
                className='
                font-Poppin  hidden  md:block 
                lg:w-[70%] md:w-[100%] 
                mx-auto bg-white/1 backdrop-blur-md border border-white/20 shadow-lg
                p-[2.5%] rounded-lg overflow-hidden
                
                '>
                        <div className=' grid grid-cols-4 p-0   gap-4 text-[80%]'>
                                <Button name="About"/>
                                <Button name="Skills"/>
                                <Button name="Projects"/>
                                <Button name="Works"/> 
                        </div>
                </div>
                {/* Middle Navbar ends Here */}


                {/* Ending Section beins here */}
                <div className=' flex justify-center font-Poppin text-[80%]'>
                        <div className='font-serif flex flex-cols-3 gap-10 items-center justify-center  '>
                                <div><a href="#">STORE</a></div>
                                <div><BiSearchAlt/></div>
                                <div> <AiOutlineUser/> </div>
                        </div>
                </div>
                {/* Ending section ends here */}
                
            </div>

    </div>
  )
}

export default Navbar;