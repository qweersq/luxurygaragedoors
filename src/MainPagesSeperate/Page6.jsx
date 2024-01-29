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
        <div id="gallery" className='bg-[#2A2A2A] flex justify-center'>
            <div className='max-w-[1280px] w-full flex flex-col justify-center items-center'>
                <div className='gap-4 w-full flex flex-col gap-10 text-white px-32 py-10 max-md:p-10 max-sm:p-10 max-xl:p-20'>
                    <div className='col-span-3 max-md:col-span-6 flex-5 flex flex-col w-full gap-5'>
                        <div className='flex items-center gap-2'>
                            {/* garis */}
                            <div className='w-10 h-[2px] bg-white'></div>
                            <h2 className='text-3xl'>Latest Work</h2>
                        </div>
                        <h1 className='text-4xl font-bold uppercase leading-tight'>OUR LATEST WORK PHOTOS GALLERY</h1>
                    </div>
                    <div className='flex justify-center col-span-6 w-full'>
                        <div className="flex flex-col p-5 justify-center h-[300px] max-sm:h-[400px] w-full transition-transform transform brightness-90 hover:brightness-100" style={{ backgroundImage: `url(${Cardlatestwork})`, backgroundPosition: 'center', borderRadius: '50px' }}>
                            {/* Background */}
                            {/* <img src={Cardlatestwork} alt={`background`} className="absolute w-full inset-0 h-full object-cover rounded-[100px]" /> */}

                            {/* Teks yang dapat ditimpa di depan background */}
                            <div className="z-10 flex flex-col justify-center gap-3 max-w-[500px] p-10">
                                <h1 className='text-3xl text-white font-semibold opacity-80'>Explore Our Diverse Collection of Garage Doors!</h1>
                                <span className='text-lg text-white font-light'>Stylish, reliable garage doors at Luxury Garage Doors. Elevate your space effortlessly.</span>
                                <button className='flex justify-center gap-2 items-center max-w-[200px] h-61 rounded-full bg-white bg-opacity-70 px-4 py-2 hover:bg-opacity-90 transition duration-300'>
                                    <p className='text-[#D74339] font-bold opacity-60'>Discuss Now</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[1000px] flex justify-center items-center max-xl:w-full p-10'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={width > 1024 ? 3 : width > 768 ? 2 : 1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                                <img src={Picture1} alt='Picture 1' style={{ width: '400px', height: '220px', objectFit: 'cover', borderRadius: '20px' }} />
                        </SwiperSlide>
                        <SwiperSlide>
                                <img src={Picture2} alt='Picture 2' style={{ width: '400px', height: '220px', objectFit: 'cover', borderRadius: '20px' }}  />
                        </SwiperSlide>
                        <SwiperSlide><img src={Picture3} alt='Picture 3' style={{ width: '400px', height: '220px', objectFit: 'cover', borderRadius: '20px' }} />
                        </SwiperSlide>
                        <SwiperSlide><img src={Picture4} alt='Picture 4' style={{ width: '400px', height: '220px', objectFit: 'cover', borderRadius: '20px' }}  /></SwiperSlide>
                        <SwiperSlide><img src={Picture6} alt='Picture 6' style={{ width: '400px', height: '220px', objectFit: 'cover', borderRadius: '20px' }}  /></SwiperSlide>
                        <SwiperSlide><img src={Picture7} alt='Picture 7' style={{ width: '400px', height: '220px', objectFit: 'cover', borderRadius: '20px' }}  /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Page6;