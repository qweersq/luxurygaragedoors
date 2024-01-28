import React from 'react';
import Garagedoorman from '../assets/images/garagedoorman.png';
import { FaCircleArrowRight } from "react-icons/fa6";
import BgCardService1 from '../assets/images/card-service-1.png';
import BgCardService2 from '../assets/images/card-service-2.png';
import BgCardService3 from '../assets/images/card-service-3.png';


function Page5() {
    return (
        <div>
            <div className='bg-[#2A2A2A] grid grid-cols-3 gap-4 flex gap-10 text-white p-40 max-lg:flex-col max-md:p-10 max-sm:p-10 max-xl:p-20'>
                <div className='col-span-3 flex-5 flex flex-col max-w-[1000px] gap-5'>
                    <div className='flex items-center gap-2'>
                        {/* garis */}
                        <div className='w-10 h-[2px] bg-white'></div>
                        <h2 className='text-xl'>Our Services</h2>
                    </div>
                    <h1 className='text-3xl font-medium uppercase leading-tight'>FIND OUT MORE ABOUT OUR SERVICES</h1>
                </div>
                <div className='flex-5 flex'>
                    <div className="relative bg-gray-300 p-4 shadow-md rounded-xl flex flex-col gap-1">
                        {/* Background */}
                        <img src={BgCardService1} alt={`background`} className="absolute inset-0 w-full h-full object-cover rounded-xl" />

                        {/* Teks yang dapat ditimpa di depan background */}
                        <div className="relative z-10">
                            <h1 className='text-lg text-white'>TEST</h1>
                            <p className='text-sm font-light text-white'>adsfasdf</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page5;