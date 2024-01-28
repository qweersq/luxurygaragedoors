import React from 'react';
import Bg1 from '../assets/images/background1.png';

function Page1(props) {
    return (
        <div>
            <div className='relative w-full h-[800px] max-sm:h-[700px]'>
                <img src={Bg1} alt='Background 1' className='w-full h-full object-cover' />

                {/* Text */}
                <div className='absolute inset-0 flex flex-col justify-center items-center px-10 text-center text-white'>
                    <h1 className='text-5xl font-medium uppercase leading-tight'>
                        Elevate Your Space with
                        <span className='text-[#BD261F] ml-3'>Luxury Garage Doors</span>
                    </h1>
                    <p className='opacity-60 font-poppins text-lg font-medium max-w-[1000px]'>
                        Your Premier Garage Door Service and Repair Solution, delivering top-notch expertise and unmatched reliability for all your garage door needs!
                    </p>

                    <div className='flex gap-3 items-center justify-center mt-6'>
                        <button className='w-190 h-61 rounded-full bg-white bg-opacity-90 px-4 py-2 hover:bg-opacity-50 transition duration-300'>
                            <p className='text-black font-medium'>About Us</p>
                        </button>
                        <button className='w-190 h-61 rounded-full border border-white bg-opacity-90 px-4 py-2 hover:bg-gray-800 hover:border-gray-800 transition duration-300'>
                            <p className='text-white font-poppins font-medium hover:opacity-50 transition duration-300'>Request A Quote</p>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Page1;