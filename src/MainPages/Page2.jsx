import React from 'react'
import bg2 from '../assets/images/bg2.webp';
import foto1 from '../assets/images/foto1.webp';

function Page2() {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bg2})` }}>
    <div className="container">
      <div className="flex flex-wrap sm:justify-between items-center ">
        <div class="w-full px-4 font-medium mx-auto pt-5 sm:pt-3 md:pt-10   sm:w-2/3 place-items-center ">
          <h1 className=" text-3xl font-bold sm:text-4xl lg:text-5xl text-red-100">WHY YOU SHOULD CHOOSE US?</h1>
          <div className="w-10  pt-5 border-t-4 border-red-100"></div>
          <p className="text-white text-justify pb-5 md:text-xl lg:text-2xl lg:pb-10">Elevate your experience with Luxury Garage Doors. Our <b class="font-bold">skilled professionals</b> ensure top-notch expertise, 
            <b className="font-bold">delivering swift and reliable services</b> at <b class="font-bold">unbeatable prices</b>. Choose us for a commitment to 
            excellence and unmatched satisfaction!</p>
        </div>
        <div className="w-full flex justify-center px-4 mx-auto pt-5 sm:pt-3 md:pt-5 sm:w-1/3 items-end">
          <img src={foto1} alt="" className='"w-1/2 sm:w-[30rem] sm:h-60 md:h-64  md:w-[35rem] lg:h-64 lg:w-80'/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Page2
