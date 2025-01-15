import React from 'react'
import Me from '/Images/ME.jpg';
const Myself = () => {
  return (
    <div className='mt-[20vh]'>
                {/* flex justify-center align-middle items-center */}
                <div className='max-w-[90%] sm:max-w-[70%] mx-auto bg-white/10 text-white grid sm:grid-cols-2 p-2 relative rounded-3xl'>
                        {/* myself Section */}
                        <div className='flex flex-col sm:order-1 order-2 sm:gap-0 gap-2'>
                                
                                <div className='flex justify-center h-[30%] items-center '>
                                    <h1
                                    className='text-3xl sm:text-4xl font-bold text-center text-yellow-500'>
                                    MYSELF</h1>
                                </div>
                                
                                <div className='h-[50%] flex justify-center items-center'>
                                <p className='p-5 '>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Accusamus officia, quas doloremque repellat ipsa eum reiciendis culpa omnis facilis 
                                    aliquam totam facere dolore iure! Necessitatibus tempore culpa eius dignissimos tenetur!
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Accusamus officia, quas doloremque repellat ipsa eum reiciendis culpa omnis facilis 
                                    aliquam totam facere dolore iure! Necessitatibus tempore culpa eius dignissimos tenetur!
                                </p>
                                </div>
                        </div>

                        {/* my  picture */}
                        <div className='flex justify-center items-center align-middle sm:order-2 order-1'>
                                <img src={Me} alt="" 
                                className='flex h-[80%] aspect-square object-cover rounded-md '
                                />
                        </div>                 
                </div>

                

    </div>
  )
}

export default Myself