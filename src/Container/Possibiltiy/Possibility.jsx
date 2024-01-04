import React from 'react'
import './Possibility.css'
import possibility from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div>
      <div className="flex m-4 border rounded-xl lg:items-center">
        <div className="image hidden md:block m-1 lg:max-w-[40%]">
          <img src={possibility} alt="" className=''/>
        </div>
        <div className="flex flex-col items-center m-4 gap-4 lg:gap-10">
          <div className="text-base lg:text-xl">Request Early Access to Get Started</div>
          <div className="heading text-2xl lg:text-4xl text-center gradient-text font-medium p-1">The possibilities are beyond your imagination</div>
          <div className="text-sm text-center text-neutral-500 border-dashed border-[3px] lg:text-base p-1">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</div>
          <button className="my-4 border-2 border-dotted p-2 font-medium rounded-md text-orange-600 text-xl lg:text-2xl">Request Early Access to Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Possibility
