import React from 'react';
import Bg1 from '../assets/images/background1.png';

function Page1(props) {
    return (
        <div>
            <div className='w-full '>
                <img src={Bg1} alt='Background 1' className='z-[-10] w-full h-[800px] max-sm:h-[500px] object-cover' />

                {/* Text */}
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
                    <h1 className='text-6xl font-bold'>Garage Door Repair & Installation</h1>
                    <p className='text-2xl'>We are a family owned and operated business, with over 20 years experience in the garage door industry.</p>
                    <button className='bg-[#FFD700] text-black p-2 rounded-lg mt-5'>Get a Free Quote</button>

                    </div>
            </div>
        </div>
    );
}

export default Page1;