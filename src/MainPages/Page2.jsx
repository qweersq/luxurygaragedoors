import React from 'react'
import bg2 from '../assets/images/bg2.webp';
import foto1 from '../assets/images/foto1.webp';

function Page2() {
  return (
    <div id="whyus" className="bg-cover bg-center flex justify-center" style={{ backgroundImage: `url(${bg2})` }}>
      <div className='max-w-[1280px] px-32 flex justify-center items-center max-lg:px-12'>
        <div className="flex justify-center gap-20 items-center mx-auto max-lg:flex-col">
          <div className=" font-medium mx-auto pt-5 sm:pt-3 md:pt-10 place-items-center">
            <h1 className="text-4xl font-bold text-red-100 opacity-80">WHY YOU SHOULD CHOOSE US?</h1>
            <div className="w-10 pt-5 border-t-4 border-red-100 opacity-80"></div>
            <p className="text-white font-light text-justify pb-5 md:text-xl lg:text-xl lg:pb-10 leading-9 text-justify">Elevate your experience with Luxury Garage Doors. Our <b class="font-bold">skilled professionals</b> ensure top-notch expertise,
              <b className="font-bold">delivering swift and reliable services</b> at <b className="font-bold">unbeatable prices</b>. Choose us for a commitment to
              excellence and unmatched satisfaction!
            </p>
          </div>
          <div className="">
            <img src={foto1} alt="" className='w-[300px] h-[320px] max-w-[400px] object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page2
