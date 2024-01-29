import React from 'react';
import Garagedoorman from '../assets/images/garagedoorman.png';
import { FaCircleArrowRight } from "react-icons/fa6";
import BgCardService1 from '../assets/images/card-service-1.png';
import BgCardService2 from '../assets/images/card-service-2.png';
import BgCardService3 from '../assets/images/card-service-3.png';
import { IoStarSharp } from "react-icons/io5";

import { IoPersonCircleSharp } from "react-icons/io5";


function Page7() {

    const dataTestimoni = [
        {
            name: 'Axxxxx xxxxxx',
            review: 'Luxury Garage Doors exceeded my expectations! The installation process was seamless, and the final result transformed the entire look of my home.'
        },
        {
            name: 'Axxxxx xxxxxx',
            review: 'Luxury Garage Doors exceeded my expectations! The installation process was seamless, and the final result transformed the entire look of my home.'
        },
        {
            name: 'Axxxxx xxxxxx',
            review: 'Luxury Garage Doors exceeded my expectations! The installation process was seamless, and the final result transformed the entire look of my home.'
        },
        {
            name: 'Axxxxx xxxxxx',
            review: 'Luxury Garage Doors exceeded my expectations! The installation process was seamless, and the final result transformed the entire look of my home.'
        },
        {
            name: 'Axxxxx xxxxxx',
            review: 'Luxury Garage Doors exceeded my expectations! The installation process was seamless, and the final result transformed the entire look of my home.'
        },
        {
            name: 'Axxxxx xxxxxx',
            review: 'Luxury Garage Doors exceeded my expectations! The installation process was seamless, and the final result transformed the entire look of my home.'
        },
    ]

    return (
        <div>
            <div className='bg-[#E2E2E2] grid grid-cols-3 max-md:grid-cols-6 gap-4 flex gap-10 text-black p-40 max-lg:flex-col max-md:p-10 max-sm:p-10 max-xl:p-20'>
                <div className='col-span-3 max-md:col-span-6 flex-5 flex flex-col max-w-[1000px] gap-5'>
                    <div className='flex items-center gap-2'>
                        {/* garis */}
                        <div className='w-10 h-[2px] bg-black'></div>
                        <h2 className='text-xl'>What People Talk About</h2>
                    </div>
                    <h1 className='text-4xl font-bold leading-tight'>Unveiling the Positive Impact of Our Exceptional Service</h1>
                    <p className='text-lg'>Explore customer reviews on our site for insights into the excellence of Luxury Garage Doors' services.</p>
                </div>

                {dataTestimoni.map((item, index) => {
                    return (
                        <>
                            <div className='flex justify-center max-md:col-span-3 max-sm:col-span-6'>
                                <div className="bg-white rounded-lg bg-gray-300 shadow-lg p-4">
                                    <div className='flex gap-2'>
                                        <IoPersonCircleSharp className='text-6xl text-gray-500' />
                                        <div>
                                            <p className='text-lg'>{item.name}</p>
                                            <div className='flex gap-2'>
                                                <IoStarSharp className='text-[#FFD700] scale-150' />
                                                <IoStarSharp className='text-[#FFD700] scale-150' />
                                                <IoStarSharp className='text-[#FFD700] scale-150' />
                                                <IoStarSharp className='text-[#FFD700] scale-150' />
                                                <IoStarSharp className='text-[#FFD700] scale-150' />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-md'>{item.review}</p>
                                </div>
                            </div>
                        </>
                    )
                }
                )}

            </div>
        </div>
    );
}

export default Page7;