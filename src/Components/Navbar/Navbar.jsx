import React from 'react'
import Logo from "/Images/Logo.png"
import Button from '../Buttons/Button';
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { FaAnglesDown } from "react-icons/fa6";


const Actions=[
        {
                id:1,
                name:"About",
        }
        ,
        {
                id:2,
                name:"Skills",
        }
        ,
        {
                id:3,
                name:"Projects",
        }
        ,
        {
                id:4,
                name:"Works",
        }
        ,
]

const Navbar = () => {
  return (
    <div>

        {/* Navbar sectoion begins here */}
            <div className='grid grid-cols-3 
                            xxs:max-w-[90%]
                            sm:max-w-[100%]
                            mx-auto 
                            items-center 
                            mt-[12px]  text-white '>

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
                font-Poppin  invisible  md:visible
                lg:w-[80%] md:w-[110%] 
                mx-auto bg-white/1 backdrop-blur-md border border-white/20 shadow-lg
                p-[2.5%] rounded-lg overflow-hidden
                
                '>
                        <div className=' grid grid-cols-4    gap-2 text-[70%]'>
                               {
                                Actions.map((data)=>(
                                        <Button
                                        key={data.id}  name={data.name}/>  
                                ))}
                        </div>
                </div>
                {/* Middle Navbar ends Here */}


                {/* Ending Section beins here */}
                <div className='cursor-pointer flex xxs:justify-end  sm:justify-center font-Poppin text-[90%] xxs:max-w-[100%] h-[5vh] group'>
                        <div className='font-serif flex flex-cols-3 gap-2 items-center justify-center text-xl '>
                                <div className='
                                        relative group
                                        transition-all 
                                        duration-200'>

                                <FaAnglesDown className='
                                        
                                        sm:hidden
                                        relative group
                                        transition-all 
                                        duration-400
                                        group-hover:rotate-180'/>
                                </div>
                                <div className='absolute hidden group-hover:block w-[15%] rounded-md bg-transparent border-white top-[60px] right-[30px] '>
                                        <ul >
                                                        {
                                                        Actions.map((data)=>(
                                                                <li className='text-black inline-block w-full rounded-md p- text-[70%]  text-center  bg-white mt-1 cursor-pointer'
                                                                 key={data.id}  
                                                                 > 
                                                                 {data.name}
                                                               </li>
                                                         ))}
                                                
                                        </ul>
                                </div>
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