import React, { useEffect } from 'react';
import Garagedoorman from '../assets/images/garagedoorman.png';
import { FaCircleArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import Bg2 from '../assets/images/background-tools.png';
import Bgcard1 from '../assets/images/bg-card-1.png';
import Bgcard2 from '../assets/images/bg-card-2.png';
import Bgcard3 from '../assets/images/bg-card-3.png';
import Bgcard4 from '../assets/images/bg-card-4.png';
import Bgcard5 from '../assets/images/bg-card-5.png';
import Bgcard6 from '../assets/images/bg-card-6.png';
import Bgcard7 from '../assets/images/bg-card-7.png';
import Bgcard8 from '../assets/images/bg-card-8.png';


function Page4(props) {
    const [width, setWidth] = React.useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResizeWindow);
        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        }
    }, []);

    const cardData = [
        {
            picture: Bgcard1,
            title: 'Installation',
            desc: 'Tailored garage door installations for both residential and commercial use.'
        },
        {
            picture: Bgcard2,
            title: 'Repair',
            desc: 'Repairing all types of garage doors, including overhead, roll-up, and sectional.'
        },
        {
            picture: Bgcard3,
            title: 'Maintenance',
            desc: 'Preventive maintenance for all garage door types to ensure smooth operation.'
        },
        {
            picture: Bgcard4,
            title: 'Replacement',
            desc: 'Replacing broken garage door parts and components with high-quality ones.'
        },
        {
            picture: Bgcard5,
            title: 'Inspection',
            desc: 'Thorough inspection of garage doors to ensure safety and security.'
        },
        {
            picture: Bgcard6,
            title: 'Emergency',
            desc: '24/7 emergency garage door repair and replacement services.'
        },
        {
            picture: Bgcard7,
            title: 'Commercial',
            desc: 'Commercial garage door services for all types of businesses.'
        },
        {
            picture: Bgcard8,
            title: 'Residential',
            desc: 'Residential garage door services for all types of homes.'
        },
    ];

    return (
        <div id="experience">
            <div className='relative w-full bg-white py-20' style={{ backgroundImage: `url(${Bg2})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                {/* <img src={Bg2} alt='Background' className='' /> */}
                <div className='flex justify-center items-center'>
                    <div className='max-w-[1280px] px-32 grid grid-cols-2 gap-4 max-xl:px-10'>
                        <div className='flex flex-col gap-8 max-w-[500px] max-xl:col-span-2'>
                            <h1 className='text-4xl font-bold leading-tight'>Mastering Garage Doors Since 2009</h1>
                            <p className='text-md leading-9 font-light max-w-[500px]'>
                                Elevate your garage with expertise since 2009! We are your trusted specialists in crafting top-notch garage door solutions. Experience unmatched service and quality at Luxury Garage Doors.
                            </p>
                            {/* <button className='flex justify-center gap-2 items-center max-w-[220px] h-61 rounded-full bg-[#D74339] bg-opacity-90 px-4 py-2 hover:bg-opacity-50 transition duration-300'>
                                <p className='text-white font-medium'>Know Us More</p>
                                <FaCircleArrowRight className='text-white' />
                            </button> */}
                        </div>
                        <div className='max-w-[1000px] max-xl:col-span-2'>
                            <Swiper
                                // install Swiper modules
                                spaceBetween={10}
                                slidesPerView={width > 1024 ? 3 : width > 768 ? 3 : width > 640 ? 2 : 1}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                className='h-full'
                            >
                                {cardData.map((card, index) => (
                                    <SwiperSlide key={index} style={{ width:"240px" }}>
                                        <div key={index} className={`rounded-xl bg-gray-300 p-2 shadow-md flex flex-col gap-1 `}>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-center">
                                                    <img src={card.picture} alt={`card${index + 1}`} className='object-cover' />
                                                </div>
                                            </div>
                                            {/* text */}
                                            <div className="flex-1 flex flex-col justify-center items-left gap-1">
                                                <h1 className='text-lg  text-left'>{card.title}</h1>
                                                <p className='text-sm font-light text-left'>{card.desc}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page4;