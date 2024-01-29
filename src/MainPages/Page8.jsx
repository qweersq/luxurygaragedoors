import React from 'react';
import BgForm from '../assets/images/bg-form.png';

import { IoPersonCircleSharp } from "react-icons/io5";


function Page8() {

    return (
        <div>
            <div className='bg-[#E2E2E2] grid grid-cols-3 max-md:grid-cols-6 gap-4 flex gap-10 text-black p-40 max-lg:flex-col max-md:p-10 max-sm:p-10 max-xl:p-20'>
                <img src={BgForm} alt={`background`} className="absolute w-full inset-0 h-full object-cover rounded-[100px]" />

                TEST
            </div>
        </div>
    );
}

export default Page8;