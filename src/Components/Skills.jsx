import React from 'react'
import Html from "/Images/html.png"
import CSS from "/Images/css-3.png" 
import JS from "/Images/JS.png"
import JAVA from "/Images/Java.png" 
import Reacct from "/Images/ReactJs.png" 
import Node from "/Images/NodeJs.png" 
import Mongo from "/Images/MongoDB.png" 
import MYSQL from "/Images/MySqL.png" 
import 'aos/dist/aos.css'
import styled from 'styled-components'

const Skill =[
    {
        id:1,
        img:Html,
        title:"HTML",
        Exper:"3-4 Years",
        aosDelay:"0",
        aosAnimation:"fade-up"
    },
    {
        id:2,
        img:CSS,
        title:"CSS",
        Exper:"3-4 Years",
        aosDelay:"200",
        aosAnimation:"fade-up"
    },
    {
        id:3,
        img:JS,
        title:"JAVA SCRIPT",
        Exper:"1-2 Years",
        aosDelay:"400",
        aosAnimation:"fade-up"
    },
    {
        id:4,
        img:JAVA,
        title:"JAVA",
        Exper:"3-4 Years",
        aosDelay:"600",
        aosAnimation:"fade-up"
    },
    {
        id:5,
        img:Reacct,
        title:"React JS",
        Exper:"1 Year",
        aosDelay:"800",
        aosAnimation:"fade-up"
    },
    {
        id:6,
        img:Node,
        title:"Node Js",
        Exper:"1 Year",
        aosDelay:"1000",
        aosAnimation:"fade-up"
    },
    {
        id:7,
        img:Mongo,
        title:"Mongo DB",
        Exper:"1 Year",
        aosDelay:"1200",
        aosAnimation:"fade-up"
    },
    {
        id:8,
        img:MYSQL,
        title:"My SQL",
        Exper:"1-2 Years",
        aosDelay:"1400",
        aosAnimation:"fade-up"
    },
    
]

const Skills = () => {
// glass texture css
    const glassStyles = {
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white
        border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border
        borderRadius: "1rem", // Rounded corners
        backdropFilter: "blur(10px) brightness(0.9)", // Frosted glass effect
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Shadow
      };


  return (


    <div>
        {/* This Section will be for the upper information predominantely as an introduction ot the section */}
        <div className=' text-white font-Poppin text-center  max-w-[90%] mx-auto mt-20 '>
            <div>
                <p data-aos="fade-up"
                className='text-yellow-500'
                >What I Bring to the Table</p>
            </div>
            <div>
                <h1 data-aos="fade-up" 
                 className='
                 text-3xl font-bold'
                 style={{ textShadow: "1px 1px 8px  rgba(60, 61, 61, 0.863)" }}
                 >SKILL'S SECTION</h1>
            </div>

            <div>
                <p data-aos="fade-up" 
                 className='text-yellow-500'>Technical expertise, innovation, and problem-solving drive impactful results.</p>
            </div>
            {/* now here i will be uploading the images of all the skills i posses */}
            <div className='
                            sm:max-w-[60%] sm:flex sm:flex-cols sm:flex-wrap sm:gap-
                            mx-auto  gap-5 p-2 
                            justify-center   
                            mt-10 
                            grid grid-cols-3  mb-12
                            '>
                        {
                            Skill.map((data)=>(
                              <div
                              data-aos={data.aosAnimation}
                              data-aos-delay={data.aosDelay}
                              className='m-1'
                              style={glassStyles}
                              key={data.id} >
                                <h3 className='
                                                text-sm
                                                sm:text-md
                                                font-serif 
                                                text-nowrap 
                                                overflow-hidden
                                               
                                                '>
                                    {data.title}
                                </h3>
                                <div className='
                                               transition-transform transform
                                               sm:h-40 
                                               sm:w-40 
                                               p-[10px]
                                               h-18 w-20 
                                               rounded-2xl 
                                               mx-auto 
                                               cursor-pointer
                                               border-[3px]
                                               border-white/40
                                               hover:border-[2px]
                                               hover:scale-110
                                             bg-slate-100/30'>
                                <img 
                                    className='transition-transform transform 
                                               hover:-rotate-[360deg]
                                               hover: duration-[1200ms]
                                               rounded-xl
                                               sm:p-2
                                               p-0'   
                                     src={data.img} alt="" />
                                </div>
                                <p className='text-center  text-yellow-500 font-light'>
                                    {data.Exper}
                                </p>
                              </div>      
                            ))}
            </div>
            <div>

            </div>
        </div>

        {/* this section will be kind of explanation  with images and others*/}
    </div>
  )
}

export default Skills;
