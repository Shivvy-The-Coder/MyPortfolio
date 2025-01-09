import React from 'react';
import img1 from "/Images/Fast.png";
import img2 from "/Images/ModernDesigns.png";
import img3 from "/Images/Responsive.png";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';


// here i am making a list of images and its attributes that i am going to use 
const ImagesList = [
  {
    id:1,
    img:img1,
    title:"Fast-Track Your Online Presence",
    Description:"Designed a fast Website with modern Technologies , taking no time to load and reload,Stream and view Images, giving best user experience ",
    name:'Explore'
  },
  {
    id:2,
    img:img2,
    title:"Modern Websites for a Progressive Digital Experience.",
    Description:"Modern Websites for a Progressive Digital Experience offers sleek, innovative designs that enhance user engagement and deliver exceptional functionality for the digital age.",
    name:'Visit'
  },
  {
    id:3,
    img:img3,
    title:"Designs That Adapt, No Matter the Device.",
    Description:"ensures seamless user experiences across all screen sizes, providing consistent and optimized layouts for every device",
    name:'Connnect'
  }
]


const Hero = () => {

  // here i am creating a setting object which will help me to handle the carousel and what settings i want to use
  var settings = {
                    dots:false,
                    arrows:false,
                    infinite:true,
                    speed:2000,
                    slidestoScroll:1,
                    autoplay:true,
                    autoplaySpeed:5000,
                    cssEase:"Ease-in-out",
                    pauseonHover:false,
                    pauseonFocus:true
                 }



  return (
    <>
    {/* it is for the designing pattern */}
        <div className='
            overflow-hidden
            sm:max-w-[70%]
            max-w-[90%]
            mx-auto
            mt-[5vh]
            relative
            sm:p-12
            rounded-2xl
            '>
            <div 
            className='h-[50vh] bg-yellow-500/90 
                       w-[50vh] absolute 
                       right-[40%] 
                       rotate-[50deg]  
                       -top-[40vh] 
                       rounded-2xl mt-1
                       sm:right-[60%]
                       sm:h-[60vh]'>
                       
                       </div>
            <div className=' h-[50vh] bg-yellow-500/80
                       w-[50vh] absolute 
                       right-[0%] 
                       rotate-[45deg] -bottom-[40vh] 
                       rounded-2xl mt-1  sm:right-[10%]
                       sm:h-[60vh]'></div>

            {/*Here the image carousel part will be conducted   */}
            <div className='items-center  container pb-8 sm:pb-0 pt-5 px-3 max-w-[100%]'>
                  <Slider {...settings}>

                          {
                            ImagesList.map((data)=>(
                                <div key={data.id}>

                                      {/* from here on we will design the actual carousel */}
                                      <div className='grid grid-cols-1 sm:grid-cols-2   text-white gap-4 relative'>
                                              <div className='flex flex-col gap-6 sm:gap-10 order-2 sm:order-1 px-3'>
                                                    <h1 className='text-3xl sm:text-5xl font-bold font-Poppin'
                                                        style={{ textShadow: "3px 3px 2px rgba(0, 0, 0, 0.5)" }}
                                                    >{data.title}</h1>
                                                    <p className='sm:text-[20px] text-[16px] text-white font-Poppin'>{data.Description}</p>
                                                    <button className=' bg-green-500 w-[20%] sm:h-[3.4vh] p-1  rounded-lg  shadow-white'>{data.name}</button>                                                    
                                              </div>

                                              <div className='order-1 sm:order-2 my-auto'>
                                                      <div>
                                                        <img src={data.img} alt={data.title} />
                                                      </div>
                                              </div>
                                      </div>

                                </div>
                            ))}

                  </Slider>
            </div>
        </div>
    </>
  )
}
export default Hero;