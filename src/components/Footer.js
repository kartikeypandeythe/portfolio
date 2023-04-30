import React from 'react'

function Footer() {
  return (
    <div>
        <div className='font-railway bg-[#0A0C12] flex flex-col pt-10 px-40 justify-around'>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex space-x-4 items-center'>

            <div className="bg-[#10D876] h-4 w-4"></div>
             <div className="text-white text-2xl font-railway font-bold ">Genvin</div>
             </div>

             <div className='flex space-x-2'>
                <img src="imageLinkedIn.png"/>
                <img src="imageTwitter.png"/>
                <img src="imagePintrest.png"/>
                <img src="imageFacebook.png"/>
            </div>

            </div>
            <div className='flex pt-4 space-x-4'>
                <button className='text-white'>
                    About us 
                </button>
                <button className='text-white'>
                    Our Project 
                </button>
                <button className='text-white'>
                    Contact Us 
                </button>
        </div>
        <div>
            All right reserved 
        </div>
            </div>
          
    </div>
  )
}

export default Footer
