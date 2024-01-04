import React from 'react'
import './CTA.css'
const CTA = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between items-center m-4 border-2 border-violet-500 p-4 rounded-xl gradient-bg ">
        <div className="flex flex-col m-2 md:px-5">
          <div className="m-1 font-medium p-2 text-orange-300">Request Early Access to Get Started</div>
          <div className="text-2xl text-center font-medium p-2">Register today and start exploring the endless possiblities</div>
        </div>
        <div className='border-2 sm:py-2 px-8 p-1 rounded-full border-black bg-black text-sky-50 mx-5'>
          <button>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default CTA
