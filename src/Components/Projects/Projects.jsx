import React from 'react'
import Cards from '../Cards'
const Projects = () => {
  return (
    <div>
        <div>
            
            {/* Intro Section */}

            <div className=' text-white font-Poppin text-center  max-w-[90%] mx-auto mt-20 '>
            <div>
                <p data-aos="fade-up"
                className='text-yellow-500'
                >Making an Impact with Every Project</p>
            </div>
            <div>
                <h1 data-aos="fade-up" 
                 className='
                 text-3xl font-bold'
                 style={{ textShadow: "1px 1px 8px  rgba(60, 61, 61, 0.863)" }}
                 >PROJECT'S SECTION</h1>
            </div>

            <div>
                <p data-aos="fade-up" 
                 className='text-yellow-500'>Dedicated to creating projects that leave a lasting positive impression.</p>
            </div>
            </div>

            {/* Main Projects Section */}
            <div>
                  <Cards
                  name="DICE GAME USING REACT JS"
                  />
            </div>
        </div>
    </div>
  )
}

export default Projects