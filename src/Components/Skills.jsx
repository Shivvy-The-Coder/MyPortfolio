import React from 'react'
import Html from "/Images/html.png"
import CSS from "/Images/css-3.png" 
import JS from "/Images/JS.png"
import JAVA from "/Images/Java.png" 
import Reacct from "/Images/ReactJs.png" 
import Node from "/Images/NodeJs.png" 
import Mongo from "/Images/MongoDB.png" 
import MYSQL from "/Images/MySqL.png" 
import AOS from 'aos'
import 'aos/dist/aos.css'


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
        Exper:"1 Years",
        aosDelay:"1000",
        aosAnimation:"fade-up"
    },
    {
        id:7,
        img:Mongo,
        title:"Mongo DB",
        Exper:"1 Years",
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
            <div className='sm:flex sm:flex-cols sm:flex-wrap sm:gap-5 gap-2 p-2 justify-center   mt-10 grid grid-cols-3  '>
                        {
                            Skill.map((data)=>(
                              <div
                              data-aos={data.aosAnimation}
                              data-aos-delay={data.aosDelay}
                              className='m-1'
                              key={data.id} >
                                <h3 className='text-sm text-nowrap overflow-hidden'>
                                    {data.title}
                                </h3>
                                <img 
                                    className='sm:h-40 sm:w-40 h-18 w-20 rounded-2xl p-2 mx-auto cursor-pointer bg-white/30' 
                                     src={data.img} alt="" />
                                <p>
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