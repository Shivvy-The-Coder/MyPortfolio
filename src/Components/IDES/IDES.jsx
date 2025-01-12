import React from 'react'
import Cards from '../Cards';
import VSC from "/Images/VSCode.ico"
import Git from '/Images/Git.png'
import Github from "/Images/Github.png"
import NetBeans from "/Images/NetBeans.png"
import PyCharm from "/Images/PyCharm.png"

const IDE=[
  {
    id:1,
    name:"VS Code",
    image:VSC,
    link:"#",
    desc:"Visual Studio Code (VS Code) is a fast, customizable code editor with extensive extensions, built-in Git support, debugging tools, and multi-language compatibility, popular for seamless and efficient development.",
    aosdelay:"900",
    animation:"fade-right"
  },
  {
    id:2,
    name:"Git",
    image:Git,
    link:"#",
    desc:"Git is a distributed version control system enabling developers to track changes, manage code versions, and collaborate efficiently, making it a cornerstone for modern software development workflows."
  ,aosdelay:"1200",
  animation:"fade-up"
  },
  {
    id:3,
    name:"Git-Hub",
    image:Github,
    link:"#",
    desc:"GitHub is a cloud-based platform for hosting Git repositories, offering collaboration, issue tracking, CI/CD integration, and open-source project hosting, simplifying teamwork and code sharing for developers."
  ,aosdelay:"900",
  animation:"fade-left"
},
,
  {
    id:4,
    name:"Net-Beans",
    image:NetBeans,
    link:"#",
    desc:"NetBeans is an open-source integrated development environment (IDE) for Java, PHP, HTML, and other languages. It offers features like code editing, debugging, profiling, and version control, enhancing developer productivity."
  ,aosdelay:"1200",
  animation:"fade-right"
},
{
  id: 5,
  name: "PyCharm",
  image: PyCharm,
  link: "#",
  desc: "PyCharm is a powerful integrated development environment (IDE) developed by JetBrains, specifically designed for Python programming. It offers intelligent code assistance, debugging, testing, and supports Django and Flask.",
  aosdelay: "1200",
  animation: "fade-down"
}

]

const IDES = () => {
  return (
    <div  className='bg-black-900'>
        <div className=' max-w-[70%] mx-auto flex flex-col mt-20'>
            <div>
                <p data-aos="fade-left"
                data-aos-delay="600"
                className='text-yellow-500'
                >Faimiliar IDE and Development Enviroment</p>
            </div>
            <div>
                <h1 data-aos="fade-up" 
                data-aos-delay="1000"
                 className='
                 text-white
                 text-3xl font-bold'
                 style={{ textShadow: "1px 1px 8px  rgba(60, 61, 61, 0.863)" }}
                 >PLATFORM AND TOOLS</h1>
            </div>

            <div>
                <p data-aos="fade-up" 
                data-aos-delay="600"
                 className='text-yellow-500 text-left'>Technical expertise, innovation, and problem-solving drive impactful results.</p>
            </div>
              <div className='mt-20 '>
              <div
              data-aos="fade-up"
               className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-2  '>
                {
                    
                      IDE.map((data)=>(
                        <Cards
                        key={data.id}
                        name={data.name}
                        img={data.image}
                        desc={data.desc}
                        delay={data.aosdelay}
                        animation={data.animation}
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
