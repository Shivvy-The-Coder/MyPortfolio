import React from 'react';
import Connect from "/Images/Connect.png";
import Inputs from '../Inputs/Inputs';

const FormData = [
  {
    id: 1,
    name: "Name",
    type: "text",
    placeholder: "Enter your name",
    des: false,
  },
  {
    id: 2,
    name: "Email",
    type: "email",
    placeholder: "Enter your email",
    des: false,
  },
  {
    id: 3,
    name: "Phone",
    type: "tel",
    placeholder: "Enter your phone number",
    des: false,
  },
  {
    id: 4,
    name: "Message",
    type: "text",
    placeholder: "Enter your message",
    des: true,
  },
];

const Form = () => {
  return (
    <div className="mt-[10vh] mb-[10vh]">
      <div className="container" style={{ padding: "20px" }}>
        <h1 className="text-3xl font-bold text-center text-white">GET CONNECT</h1>
        <p className="text-center text-yellow-400">
          Let's connect and grow together
        </p>
      </div>
      <div
        className="flex items-center 
                        sm:max-w-[70%] sm:h-[50vh] sm:p-5 
                        w-[70%] sm:w-[90%] mx-auto p-1 bg-white/1
                        backdrop-blur-xl border border-white/20 rounded-sm 
                        shadow-md shadow-white"
      >
        <div className="grid sm:grid-cols-2 mx-auto">
          {/* Form Section */}
          <div
            className="
                      order-2 sm:order-1
                      grid
                      font-Poppin
                      items-center
                      gap-10
                      overflow-hidden
                      
                      relative 
                      "
          >
            <div className="text-center z-10">
              <h1 style={{ textShadow: "5px 1px 2px rgba(1, 1, 1, 0.5)" }} className="text-4xl font-bold text-yellow-600 ">FORM SECTION</h1>
            </div>

            <p className="text-center text-white z-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, maxime.
            </p>

            <div className="text-center ">
              <form className="flex flex-col gap-2 z-10 " action="">
                {FormData.map((data) => (
                  <Inputs
                    key={data.id} // Added key directly to Inputs
                    name={data.name}
                    type={data.type}
                    placeholder={data.placeholder}
                    des={data.des}
                  />
                ))}
                {/* Submit Button Inside the Form */}
                <button
                  type="submit"
                  className="bg-green-600 border-2 rounded-md shadow-sm shadow-white mt-16 flex mx-auto text-white p-2 z-10"
                >
                  Submit
                </button>
              </form>

              <div className='absolute bg-yellow-500/80 sm:h-[250px] sm:w-[250px] h-[150px] w-[450px] -top-[30%]  rotate-[50deg] -right-[10%] z-0 rounded-xl'> </div>
              <div className='absolute bg-yellow-500/80 sm:h-[250px] sm:w-[250px] h-[150px] w-[350px] -bottom-[25%]  rotate-[50deg] -left-[29%] z-0  rounded-xl'> </div>


            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 sm:order-2 flex justify-center items-center">
            <img
              className="aspect-w-1 aspect-h-1 w-[70%]"
              src={Connect}
              alt="Connect"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
