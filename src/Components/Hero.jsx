import React from 'react';
import img1 from "../../public/Images/Fast.png";
import img2 from "../../public/Images/ModernDesigns.png";
import img3 from "../../public/Images/Responsive.png";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import Button from './Buttons/Button';


// here i am making a list of images and its attributes that i am going to use 
const ImagesList = [
  {
    id:1,
    img:img1,
    title:"Fast-Track Your Online Presence",
    Description:"Designed a fast Website with modern Technologies , taking no time to load and reload,Stream and view Images, giving best user experience ",
  },
  {
    id:2,
    img:img2,
    title:"Modern Websites for a Progressive Digital Experience.",
    Description:"Modern Websites for a Progressive Digital Experience offers sleek, innovative designs that enhance user engagement and deliver exceptional functionality for the digital age.",
  },
  {
    id:3,
    img:img3,
    title:"Designs That Adapt, No Matter the Device.",
    Description:"ensures seamless user experiences across all screen sizes, providing consistent and optimized layouts for every device",
  }
]


const Hero = () => {

  // here i am creating a setting object which will help me to handle the carousel and what settings i want to use
  var settings = {
                    dots:false,
                    arrows:false,
                    infinite:true,
                    speed:1000,
                    slidestoScroll:1,
                    autoplay:true,
                    autoplaySpeed:4000,
                    cssEase:"Ease-in-out",
                    pauseonHover:false,
                    pauseonFocus:true
                 }



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
            <div className='container pb-8 sm:pb-0'>
                  <Slider {...settings}>

                          {
                            ImagesList.map((data)=>(
                                <div key={data.id}>

                                      {/* from here on we will design the actual carousel */}
                                      <div className='grid grid-cols-1 sm:grid-cols-2 lg:text-7xl font-bold text-white'>
                                              <div>
                                                    <h1 className='text-5xl sm:text-6xl'>{data.title}</h1>
                                                    <p className='text-sm'>{data.description}</p>
                                                    
                                              </div>

                                              <div className='order-1 sm:order-2'>
                                                      <div>
                                                        <img src={data.img} alt={data.title}
                                                        className='' />
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