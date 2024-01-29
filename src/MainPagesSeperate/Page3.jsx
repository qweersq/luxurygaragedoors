import React from 'react';
import Garagedoorman from '../assets/images/garagedoorman.png';
import { FaCircleArrowRight } from "react-icons/fa6";


function Page3() {
    return (
        <div id="about">
            <div className='bg-[#2A2A2A] flex justify-center items-center gap-10 text-white py-20 max-lg:flex-col'>
                <div className='max-w-[1280px] px-32 flex justify-center items-center max-lg:flex-col max-lg:px-10'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center gap-2'>
                            {/* garis */}
                            <div className='w-10 h-[2px] bg-white'></div>
                            <h2 className='text-3xl'>About Us</h2>
                        </div>
                        <h1 className='text-4xl font-bold uppercase leading-tight'>LUXURY GARAGE DOORS</h1>
                        <p className='text-md leading-9 font-light max-w-[1000px]'>
                            LuxuryGarageDoors, founded in 2009 in Ontario, is a premier luxury garage door service provider. Specializing in residential, commercial, and industrial doors, our skilled professionals operate 24/7 through five units in Southern Ontario. With a stellar reputation and over 5,060 completed projects in the GTA, we prioritize client satisfaction, recognized by the Canadian Door Institute and the Better Business Bureau.
                        </p>
                        <button className='flex justify-center gap-2 items-center max-w-[220px] h-61 rounded-full bg-[#D74339] bg-opacity-90 px-4 py-2 hover:bg-opacity-50 transition duration-300'>
                            <p className='text-white font-medium'>Know Us More</p>
                            <FaCircleArrowRight className='text-white' />
                        </button>
                    </div>
                    <div className='flex justify-center w-full'>
                        <img src={Garagedoorman} alt='garage door' className='w-[400px] object-cover' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page3;