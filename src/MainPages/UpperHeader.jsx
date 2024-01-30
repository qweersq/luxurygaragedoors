import React, { useState, useEffect } from "react";
import { IoStarSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { motion, useTime } from "framer-motion"
import { MdOutlinePhoneAndroid } from "react-icons/md";


function UpperHeader() {
    const texts = ['Covering the entire GTA region', '24/7 Service', 'Affordable Prices', 'Best Quality', 'Satisfaction Guaranteed'];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [currentTextIndex]);

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        // upper header
        <div>
            <div className='bg-[#2A2A2A] w-100 flex lg:flex-row max-sm:flex-col max-sm:gap-3 max-sm:items-center justify-between p-5 pl-20 pr-20'>
                {/* REVIEW GOOGLE */}
                <div className='flex gap-5'>
                    <FcGoogle className='scale-150' />
                    <div className='flex gap-2'>
                        <IoStarSharp className='text-[#FFD700] scale-150' />
                        <IoStarSharp className='text-[#FFD700] scale-150' />
                        <IoStarSharp className='text-[#FFD700] scale-150' />
                        <IoStarSharp className='text-[#FFD700] scale-150' />
                        <IoStarSharp className='text-[#FFD700] scale-150' />
                    </div>
                </div>

                {/* Slider */}
                <div className='flex flex-col h-5 gap-5'>
                    <motion.p
                        key={currentTextIndex}
                        className='text-white'
                        variants={textVariants}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-semibold">{texts[currentTextIndex]}</p>
                    </motion.p>
                </div>

                {/* Phone */}
                <div className='flex gap-2 items-center'>
                    <MdOutlinePhoneAndroid className='scale-150 text-white' />
                    <p className='text-white'>647-786-8309</p>
                </div>
            </div>
        </div>
    );
}

export default UpperHeader;