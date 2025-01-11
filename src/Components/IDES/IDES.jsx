import React from 'react'
import Cards from '../Cards';
import VSC from "/Images/VSCode.ico"
import Git from '/Images/Git.png'
import Github from "/Images/Github.png"

const IDE=[
  {
    id:1,
    name:"VS Code",
    image:VSC,
    link:"#",
    desc:"Visual Studio Code (VS Code) is a lightweight, versatile code editor with extensive extensions, built-in Git support, debugging tools, and customization options, making it a favorite among developers for seamless coding across multiple languages."
  },
  {
    id:2,
    name:"Git",
    image:Git,
    link:"#",
    desc:"Git is a powerful,distributed version control system that allows developers to track changes, collaborate efficiently, and manage code history, making it essential for modern software development."
  },
  {
    id:3,
    name:"Git Hub",
    image:Github,
    link:"#",
    desc:"GitHub is a cloud-based platform for hosting Git repositories, offering features like collaboration tools, issue tracking, CI/CD integration, and open-source project hosting, widely used by developers for teamwork and code sharing."
  },

]

const IDES = () => {
  return (
    <div  className='bg-black-900'>
        <div className=' max-w-[70%] mx-auto flex flex-col mt-20'>
            <div>
                <p data-aos="fade-left"
                className='text-yellow-500'
                >Faimiliar IDE and Development Enviroment</p>
            </div>
            <div>
                <h1 data-aos="fade-up" 
                    
                 className='
                 text-white
                 text-3xl font-bold'
                 style={{ textShadow: "1px 1px 8px  rgba(60, 61, 61, 0.863)" }}
                 >PLATFORM AND TOOLS</h1>
            </div>

            <div>
                <p data-aos="fade-up" 
                 className='text-yellow-500 text-left'>Technical expertise, innovation, and problem-solving drive impactful results.</p>
            </div>
              <div className='mt-20 '>
              <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-2  '>
                {
                      IDE.map((data)=>(
                        <Cards
                        key={data.id}
                        name={data.name}
                        img={data.image}
                        desc={data.desc}
                        />
                      ))
                }
              </div>
              </div>
        </div>
    </div>
  )
}

export default IDES;
