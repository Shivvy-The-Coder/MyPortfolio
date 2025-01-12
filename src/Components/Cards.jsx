import React from 'react'


const Cards = ({name , link , img , desc,delay,animation}) => {
  return (
    <div> 

          <div>
                <div 
                data-aos-delay={delay}
                data-aos={animation}
                className='flex flex-col font-Poppin font-bold p-3  mb-[5vh]  sm:scale-90  overflow-auto sm:w-[100%] w-[70%] h-[70%] mx-auto
                                sm:rounded-lg sm:shadow-md sm:shadow-gray-500/50
                bg-white/20
                backdrop-blur-2xl
                border-[5px]
                border-white/10 shadow-lg rounded-sm 
                '>    
                      {/*For HEading Section  */}
                      <div>
                        <h1
                       
                        className='text-2xl sm:text-4xl text-center text-shadow-black '
                        >{name}</h1>
                      </div>

                      {/* for image section */}
                      <div
                        className='p-10 flex justify-center w-[90%] sm:w-[100%] mx-auto '
                      >
                        <img 
                        src={img} alt="" />
                      </div>

                      {/* for information */}
                      <div>
                        <p className='sm:text-sm text-[12px] text-white text-center text-opacity-70'>
                          {desc}
                        </p>
                      </div>
                </div>
          </div>

    </div>
  )
}

export default Cards;