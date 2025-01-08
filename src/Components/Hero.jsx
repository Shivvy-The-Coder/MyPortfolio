import React from 'react';

const Hero = () => {
  return (
    <>
    {/* it is for the designing pattern */}
        <div className='
            overflow-hidden
            h-[60vh]
            max-w-[90%]
            mx-auto
            mt-2
            relative'>
            <div 
            className='h-[50vh] bg-purple-400/20 
                       w-[50vh] absolute 
                       right-[40%] 
                       rotate-[50deg]  
                       -top-[40vh] 
                       rounded-2xl mt-1
                       sm:right-[60%]
                       sm:h-[60vh]'>
                       
                       </div>
            <div className='
                       h-[50vh] bg-purple-400/20 
                       w-[50vh] absolute 
                       -right-[10%] 
                       rotate-[50deg] -bottom-[40vh] 
                       rounded-2xl mt-1  sm:right-[20%]
                       sm:h-[60vh]'></div>

            {/*Here the image carousel part will be conducted   */}
            <div></div>
        </div>
    </>
  )
}
export default Hero;