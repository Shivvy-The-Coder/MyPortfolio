import React from 'react'
import Connect from "/Images/Connect.png"
import Inputs from '../Inputs/Inputs';



const FormData=
[
  {
    name:"Name",
    type:"text",
    des:false
  },
  {
    name:"Email",
    type:"enail",
    des:false
  },
  {
    name:"Phone",
    type:"phone",
    des:false
  },
  {
    name:"Message",
    type:"text",
    des:true
  },
]

const Form = () => {
  return (
  <div className='mt-[10vh]   mb-[10vh]'>
        <div className="container" style={{padding:"20px"}}>
          <h1 className='text-3xl font-bold text-center text-white'>GET CONNECT</h1>
          <p className='text-center text-yellow-400'
          >Lets connect and grow together</p>
        </div>
        <div className='flex items-center 
                        sm:max-w-[70%]  sm:h-[50vh] sm:p-5 
                        w-[90%] mx-auto p-1  bg-white/1
                        backdrop-blur-xl border border-white/20 rounded-sm 
                        shadow-md shadow-white'>
            <div className='grid sm:grid-cols-2 mx-auto'>
      {/* this section is for the form */}
              <div className='
                      order-2 sm:order-1
                      grid grid-rows-
                      font-Poppin
                      items-center
                      gap-10
                      '>
                <div className='text-center '>
                  <h1 className='text-4xl font-bold text-yellow-500 '
                      >LOREM EPSUM</h1>
                </div>

                <p className='text-center text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, maxime.</p>

                <div className='text-center'>
              <form
              className='flex flex-col  gap-2' 
              action="">

                {/* <Inputs
                labels="Name"/> */}
                {
                  FormData.map((data)=>(
                    <div
                      key={data.id}
                    >
                      <Inputs
                      name={data.name}
                      type={data.type}
                      placeholder={data.placeholder}
                      des={data.des}
                      />
                    </div>
                  ))
                }

                
              </form>
                </div>
           
                 <div className='flex flex-row justify-end  mt-2 '>
              <button
              className='bg-green-600 border-2 rounded-md shadow-sm shadow-white mt-7 felx mr-5 text-white p-1 '
              >Submit</button>
                 </div>
              </div>

      {/* this section will contain the image */}
      <div className='order-1 sm:order-2 flex justify-center items-center '>
      <img className='aspect-w-1 aspect-h-1 w-[70%]'
       src={Connect} alt="" />
      </div>
</div>

</div>
  </div>
  )
}

export default Form;

