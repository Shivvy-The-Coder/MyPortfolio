import React from 'react'


const Cards = ({name , link , img , desc,delay,animation}) => {
  return (
    <div> 

          <div>
                <div 
                data-aos-delay={delay}
                data-aos={animation}
                className='flex flex-col font-Poppin  p-3  mb-[5vh]  sm:scale-90  overflow-auto md:w-[80%] sm:w-[100%] w-[70%] h-[70%] mx-auto
                                sm:rounded-lg sm:shadow-md sm:shadow-gray-500/50
                backdrop-blur-xl
                border-[5px]
                border-white/10 shadow-md rounded-sm 
                cursor-pointer
                gap-2
                shadow-white
                hover:shadow-none
                '>    
                      {/*For HEading Section  */}
                      <div>
                        <h1
                       
                        className='text-2xl sm:text-4xl text-center text-shadow-black text-yellow-500 font-bold '
                        >{name}</h1>
                      </div>

                      {/* for image section */}
                      <div
                        className='p-10 flex justify-center w-[80%] sm:w-[80%] mx-auto bg-white/10 rounded-lg '
                      >
                        <img 
                        className='transition-transform duration-1000 ease-in-out transform hover:scale-[125%]  hover:translate-y-[-3vh] contrast-200 saturate-200 '
                        src={img} alt="" />
                      </div>

                      {/* for information */}
                      <div>
                        <p className='sm:text-sm text-[12px] text-white 
                                  text-center text-opacity-70 shadow-md transition-transform duration-1000 ease-in-out transform hover:scale-[110%] text-shadow-black
                                  bg-gray-500/20 rounded-md hover:bg-yellow-400/10  '>
                          {desc}
                        </p>
                      </div>
                </div>
          </div>

    </div>
  )
}

export default Cards;