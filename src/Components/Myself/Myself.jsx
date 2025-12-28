import Me from '/Images/ME.jpg'
import Fan from '/Images/Fan.png'
const Myself = () => {
  return (
   <>
    <div className='md:mt-[14vh] mt-[10vh] 
                            md:w-[80%] sm:w-[70%] w-[95%] mx-auto'>
                {/* flex justify-center align-middle items-center */}
                <div className=' bg-white/10 text-white grid sm:grid-cols-2 p-2 relative rounded-3xl mx-auto'>
                        {/* myself Section */}
                        <div className='flex flex-col sm:order-1 order-2 sm:gap-0 gap-2 relative overflow-hidden'>
                                
                                <div className='flex justify-center h-[30%] items-center '>
                                    <h1
                                    style={{ textShadow: "5px 1px 2px rgba(1, 1, 1, 0.5)" }}
                                    className='text-3xl sm:text-4xl font-bold text-center text-yellow-600 z-20  '>
                                    MYSELF</h1>
                                </div>
                                
                                <div
                                className='h-[50%] flex justify-center items-center z-30'>
                                <p className='p-5 '>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Accusamus officia, quas doloremque repellat ipsa eum reiciendis culpa omnis facilis 
                                    aliquam totam facere dolore iure! Necessitatibus tempore culpa eius dignissimos tenetur!
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Accusamus officia, quas doloremque repellat ipsa eum reiciendis culpa omnis facilis 
                                    aliquam totam facere dolore iure! Necessitatibus tempore culpa eius dignissimos tenetur!
                                </p>
                                </div>

                                <div className='absolute bg-yellow-500/80 sm:h-[250px] sm:w-[250px] h-[150px] w-[150px] -top-[15%]  rotate-[50deg] -left-[10%] z-0 rounded-xl'> </div>

                                <div className='absolute bg-yellow-500/80 sm:h-[250px] sm:w-[250px] h-[150px] w-[150px] -bottom-[25%]  rotate-[50deg] right-[0%] z-0  rounded-xl'> </div>
                                
                        </div>

                        {/* my  picture */}
                        <div className='flex justify-center items-center align-middle sm:order-2 order-1 relative overflow-hidden'>
                                <img src={Me} alt="" 
                                className='flex h-[80%] aspect-square object-cover rounded-md z-10 shadow-xl shadow-black'
                                />

                        <div className='absolute bg-yellow-500/80 sm:h-[450px] sm:w-[450px] h-[150px] w-[590px] -top-[15%]  rotate-[50deg] -left-[10%] z-0 '> </div>
                        <div className='absolute bg-yellow-500/80 sm:h-[450px] sm:w-[450px] h-[150px] w-[590px] -bottom-[15%]  rotate-[50deg] -right-[10%] z-0 '> </div>

                        </div>    

                        <div className='absolute sm:w-[10%] w-[20%] animate-slow-spin-pulse z-10'>
                                <img src={Fan} 
                                alt="" />
                                </div>             
                        </div>

                        

                

    </div>
   </>
  )
}

export default Myself