import React from 'react'


const Cards = ({name , link , img , desc}) => {
  return (
    <div> 

          <div>
                <div className='flex flex-col font-Poppin font-bold p-3  overflow-hidden  mb-[10vh]  sm:scale-90
                sm:rounded-lg sm:shadow-md sm:shadow-gray-500/50
                bg-white/10
                backdrop-blur-3xl
                border-[5px]
                border-white/10 shadow-lg rounded-sm 
                '>    
                      {/*For HEading Section  */}
                      <div>
                        <h1 className='text-4xl text-center '
                        >{name}</h1>
                      </div>

                      {/* for image section */}
                      <div
                        className='p-10 flex justify-center w-[100%] mx-auto '
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