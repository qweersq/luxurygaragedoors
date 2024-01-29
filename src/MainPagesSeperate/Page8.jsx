import React from 'react';
import BgForm from '../assets/images/bg-form.png';
import BgForm2 from '../assets/images/bg-form-2.png';

import { IoPersonCircleSharp } from "react-icons/io5";


function Page8() {

    return (
        <div id='contact'>
            <div className='bg-[#2A2A2A] pb-40 z-0' style={{ backgroundImage: `url(${BgForm})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

                <div className='flex py-20 justify-center items-center text-center text-white'>
                    <div className='max-w-[1280px] px-32 flex flex-col justify-center items-center max-lg:px-10'>
                        {/* content */}

                        {/* form */}

                        <div className='flex border border-white border-opacity-30 rounded-[50px] gap-10 p-20 shadow-lg max-lg:flex-col max-lg:p-10' style={{ backgroundImage: `url(${BgForm2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className='flex justify-center items-center text-left text-white'>
                                <div className='flex flex-col gap-8 max-w-[500px] max-xl:col-span-2'>
                                    <h1 className='text-4xl font-bold leading-tight'>Unlock Your <span className='text-[#BD261F]'>Quote</span> : Seamless Solutions Await!</h1>
                                    <p className='text-md leading-9 font-light max-w-[500px]'>
                                        Get the right quote and fast response with our services. We are ready to provide seamless solutions for your needs.
                                    </p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center text-left text-white'>
                                <div className='flex flex-col gap-8 max-xl:col-span-2'>
                                    <h1 className='text-2xl font-bold leading-tight'>Swift Response Guaranteed!</h1>

                                    {/* form input */}

                                    <div className='grid grid-cols-4 gap-4'>
                                        <div className='col-span-2'>
                                            <p className='text-xl font-medium'>First Name</p>
                                            <input type="text" className='w-full h-10  rounded-lg px-3 py-2 text-white bg-[#464646] ' />
                                        </div>
                                        <div className='col-span-2'>
                                            <p className='text-xl font-medium'>Last Name</p>
                                            <input type="text" className='w-full h-10  rounded-lg px-3 py-2 text-white bg-[#464646] ' />
                                        </div>
                                        <div className='col-span-4'>
                                            <p className='text-xl font-medium'>Email Address</p>
                                            <input type="text" className='w-full h-10  rounded-lg px-3 py-2 text-white bg-[#464646] ' />
                                        </div>
                                        <div className='col-span-4'>
                                            <p className='text-xl font-medium'>Message</p>
                                            <textarea rows="3" className='w-full  rounded-lg px-3 py-2 text-white bg-[#464646] '></textarea>
                                        </div>

                                        <div className='col-span-4 flex justify-start'>
                                            <button className=' flex justify-center gap-2 items-center w-[120px] h-61 rounded-full bg-[#D74339] bg-opacity-90 px-4 py-2 hover:bg-opacity-50 transition duration-300'>
                                                <p className='text-white font-medium'>Submit</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page8;