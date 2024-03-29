import React, { useState } from 'react';
import Garagedoorman from '../assets/images/garagedoorman.png';
import { FaCircleArrowRight } from "react-icons/fa6";
import BgCardService1 from '../assets/images/card-service-1.png';
import BgCardService2 from '../assets/images/card-service-2.png';
import BgCardService3 from '../assets/images/card-service-3.png';
import Modal from './components/Modal';
import { data } from 'autoprefixer';


function Page5() {
    const [modalOpen, setModalOpen] = useState(false);
    const [dataContent, setDataContent] = useState({});

    const openModal = (data) => {
        setDataContent(data);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const dataModalContent = {
        INSTALATION: {
            title: 'Professional Installation Services',
            desc: 'We provide professional garage door installation services for both residential and commercial use. Our team of experts will ensure that your garage door is installed properly and safely, so you can enjoy its benefits for a long time. We also offer a wide range of garage door styles and designs to suit your needs and preferences.'
        },
        MAINTENANCE: {
            title: 'Maintenance Service',
            desc: 'We offer preventive maintenance services for all types of garage doors to ensure smooth operation. Our team of experts will inspect your garage door and perform the necessary repairs to keep it in good condition. We also offer a wide range of garage door styles and designs to suit your needs and preferences.'
        },
        REPAIR: {
            title: '24/7 Repair Assistance',
            desc: 'We offer 24/7 emergency garage door repair and replacement services. Our team of experts will inspect your garage door and perform the necessary repairs to keep it in good condition. We also offer a wide range of garage door styles and designs to suit your needs and preferences.'
        }
    }

    return (
        <div id="service">
            <Modal isOpen={modalOpen} onClose={closeModal} content={dataContent} />
            <div className='bg-[#2A2A2A] flex justify-center'>
                <div className='max-w-[1280px] flex grid grid-cols-3 max-md:grid-cols-6 gap-4 flex gap-10 text-white px-32 pt-20 max-lg:flex-col max-md:p-10 max-sm:p-10 max-xl:p-20'>
                    <div className='col-span-3 max-md:col-span-6 flex-5 flex flex-col max-w-[1000px] gap-5'>
                        <div className='flex items-center gap-2'>
                            {/* garis */}
                            <div className='w-10 h-[2px] bg-white'></div>
                            <h2 className='text-3xl'>Our Services</h2>
                        </div>
                        <h1 className='text-4xl font-bold uppercase leading-tight'>FIND OUT MORE ABOUT OUR SERVICES</h1>
                    </div>
                    <div className='flex justify-center max-md:col-span-3 max-sm:col-span-6'>
                        <div className="relative flex flex-col p-5 justify-end h-[400px] w-[350px] max-sm:w-full transition-transform transform hover:brightness-110">
                            {/* Background */}
                            <img src={BgCardService1} alt={`background`} className="absolute max-sm:w-full inset-0 h-full object-cover rounded-xl " />

                            {/* Teks yang dapat ditimpa di depan background */}
                            <div className="relative z-10 flex flex-col gap-3">
                                <h1 className='text-2xl text-white font-bold'>Professional Installation Services</h1>
                                <button
                                    onClick={() => openModal(dataModalContent.INSTALATION)}
                                    className='flex justify-center gap-2 items-center max-w-[220px] h-61 rounded-full bg-[#D74339] bg-opacity-70 px-4 py-2 hover:bg-opacity-90 transition duration-300'>
                                    <p className='text-white font-medium'>More Info</p>
                                    <FaCircleArrowRight className='text-white' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center max-md:col-span-3 max-sm:col-span-6'>
                        <div className="relative flex flex-col p-5 justify-end h-[400px] w-[350px] max-sm:w-full transition-transform transform hover:brightness-110">
                            {/* Background */}
                            <img src={BgCardService2} alt={`background`} className="absolute max-sm:w-full inset-0 h-full object-cover rounded-xl " />

                            {/* Teks yang dapat ditimpa di depan background */}
                            <div className="relative z-10 flex flex-col gap-3">
                                <h1 className='text-2xl text-white font-bold'>Maintenance Service</h1>
                                <button
                                    onClick={() => openModal(dataModalContent.MAINTENANCE)}
                                    className='flex justify-center gap-2 items-center max-w-[220px] h-61 rounded-full bg-[#D74339] bg-opacity-70 px-4 py-2 hover:bg-opacity-90 transition duration-300'>
                                    <p className='text-white font-medium'>More Info</p>
                                    <FaCircleArrowRight className='text-white' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center max-md:col-span-3 max-sm:col-span-6 '>
                        <div className="relative flex flex-col p-5 justify-end h-[400px] w-[350px] max-sm:w-full transition-transform transform hover:brightness-110">
                            {/* Background */}
                            <img src={BgCardService3} alt={`background`} className="absolute inset-0 h-full max-sm:w-full object-cover rounded-xl " />

                            {/* Teks yang dapat ditimpa di depan background */}
                            <div className="relative z-10 flex flex-col gap-3">
                                <h1 className='text-2xl text-white font-bold'>24/7 Repair Assistance</h1>
                                <button
                                    onClick={() => openModal(dataModalContent.REPAIR)}
                                    className='flex justify-center gap-2 items-center max-w-[220px] h-61 rounded-full bg-[#D74339] bg-opacity-70 px-4 py-2 hover:bg-opacity-90 transition duration-300'>
                                    <p className='text-white font-medium'>More Info</p>
                                    <FaCircleArrowRight className='text-white' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page5;