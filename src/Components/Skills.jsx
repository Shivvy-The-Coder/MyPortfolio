import React from 'react'
import Html from "/Images/html.png"
import CSS from "/Images/css-3.png" 
import JS from "/Images/JS.png"
import JAVA from "/Images/Java.png" 
import Reacct from "/Images/ReactJs.png" 
import Node from "/Images/NodeJs.png" 
import Mongo from "/Images/MongoDB.png" 
import MYSQL from "/Images/MySqL.png" 


const Skill =[
    {
        id:1,
        img:Html,
        title:"HTML",
        Exper:"3-4 Years"
    },
    {
        id:2,
        img:CSS,
        title:"CSS",
        Exper:"3-4 Years"
    },
    {
        id:3,
        img:JS,
        title:"JAVA SCRIPT",
        Exper:"1-2 Years"
    },
    {
        id:4,
        img:JAVA,
        title:"JAVA",
        Exper:"3-4 Years"
    },
    {
        id:5,
        img:Reacct,
        title:"React JS",
        Exper:"1 Year"
    },
    {
        id:6,
        img:Node,
        title:"Node Js",
        Exper:"1 Years"
    },
    {
        id:7,
        img:Mongo,
        title:"Mongo DB",
        Exper:"1 Years"
    },
    {
        id:8,
        img:MYSQL,
        title:"My SQL",
        Exper:"1-2 Years"
    },
    
]

const Skills = () => {
  return (


    <div>
        {/* This Section will be for the upper information predominantely as an introduction ot the section */}
        <div className=' text-white font-Poppin text-center  max-w-[80%] mx-auto mt-20 '>
            <div>
                <p>What I Bring to the Table</p>
            </div>
            <div>
                <h1 className='
                 text-3xl font-bold'
                 style={{ textShadow: "1px 1px 8px  rgba(251, 255, 1, 0.863)" }}
                 >SKILL'S SECTION</h1>
            </div>
            {/* now here i will be uploading the images of all the skills i posses */}
            <div className='flex flex-cols flex-wrap gap-20 p-2 justify-center align-middle items-center mt-20'>
                        {
                            Skill.map((data)=>(
                              <div
                              key={data.id} >
                                <h3 className=''>
                                    {data.title}
                                    <img 
                                    className='sm:h-40 sm:w-40 h-20 w-20' 
                                     src={data.img} alt="" />
                                </h3>
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