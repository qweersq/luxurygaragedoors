import React, { useEffect } from 'react';
import Garagedoorman from '../assets/images/garagedoorman.png';
import { FaCircleArrowRight } from "react-icons/fa6";
import Cardlatestwork from '../assets/images/cardlatestwork.png';
import { Swiper, SwiperSlide } from 'swiper/react';

import Picture1 from '../assets/images/abd1.jpg';
import Picture2 from '../assets/images/abd2.jpeg';
import Picture3 from '../assets/images/abd3.jpg';
import Picture4 from '../assets/images/abd4.jpg';
import Picture6 from '../assets/images/abd6.jpg';
import Picture7 from '../assets/images/abd7.jpg';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



function Page6() {

    const [width, setWidth] = React.useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResizeWindow);
        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        }
    }, []);

    return (
        <div className='bg-[#2A2A2A]'>
            <div className=' grid grid-cols-3 max-md:grid-cols-6 gap-4 flex gap-10 text-white px-40 py-20 max-lg:flex-col max-md:p-10 max-sm:p-10 max-xl:p-20'>
                <div className='col-span-3 max-md:col-span-6 flex-5 flex flex-col max-w-[1000px] gap-5'>
                    <div className='flex items-center gap-2'>
                        {/* garis */}
                        <div className='w-10 h-[2px] bg-white'></div>
                        <h2 className='text-xl'>Latest Work</h2>
                    </div>
                    <h1 className='text-3xl font-medium uppercase leading-tight'>OUR LATEST WORK PHOTOS GALLERY</h1>
                </div>
                <div className='flex justify-center col-span-6'>
                    <div className="relative flex flex-col p-5 justify-center h-[400px] w-full transition-transform transform brightness-90 hover:brightness-100">
                        {/* Background */}
                        <img src={Cardlatestwork} alt={`background`} className="absolute w-full inset-0 h-full object-cover rounded-[100px]" />

                        {/* Teks yang dapat ditimpa di depan background */}
                        <div className="relative z-10 flex flex-col justify-center gap-3 max-w-[500px] p-10">
                            <h1 className='text-3xl text-white font-bold'>Explore Our Diverse Collection of Garage Doors!</h1>
                            <span className='text-lg text-white font-light'>Stylish, reliable garage doors at Luxury Garage Doors. Elevate your space effortlessly.</span>
                            <button className='flex justify-center gap-2 items-center max-w-[200px] h-61 rounded-full bg-white bg-opacity-70 px-4 py-2 hover:bg-opacity-90 transition duration-300'>
                                <p className='text-[#D74339] font-bold opacity-60'>Discuss Now</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-20'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={width > 1024 ? 3 : width > 768 ? 2 : 1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide><img src={Picture1} alt='Picture 1' className='max-h-[300px] object-cover rounded-xl' /></SwiperSlide>
                    <SwiperSlide><img src={Picture2} alt='Picture 2' className='max-h-[300px] object-cover rounded-xl' /></SwiperSlide>
                    <SwiperSlide><img src={Picture3} alt='Picture 3' className='max-h-[300px] object-cover rounded-xl' /></SwiperSlide>
                    <SwiperSlide><img src={Picture4} alt='Picture 4' className='max-h-[300px] object-cover rounded-xl' /></SwiperSlide>
                    <SwiperSlide><img src={Picture6} alt='Picture 6' className='max-h-[300px] object-cover rounded-xl' /></SwiperSlide>
                    <SwiperSlide><img src={Picture7} alt='Picture 7' className='max-h-[300px] object-cover rounded-xl' /></SwiperSlide>
                    ...
                </Swiper>
            </div>


        </div>
    );
}

export default Page6;