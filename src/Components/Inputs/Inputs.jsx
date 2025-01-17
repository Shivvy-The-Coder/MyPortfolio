import React from 'react'

const Inputs = ({name, type,des}) => {

    var height="3vh";
        if(des==true)
            height="10vh";
            

  return (
    <div>
        <div className='flex flex-row justify-center align-middle items-center text-white font-Poppin font-bold '>
            <div
            className='w-[15%] text-left bg-black/30 p-1 rounded-md z-10'
            >
                {name}
            </div>
            
            <div
            className='w-[75%] text-right  h-5  z-10'
            >               
                    <input
                    style={{height:height}}
                    className='font-normal w-[90%] rounded-[5px] p-2 bg-white/30 ' 
                    type={type}  />
                
            </div>
        </div>
    </div>
  )
}

export default Inputs