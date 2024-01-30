import React, { useState } from 'react';
import Garagedoorman from '../assets/images/garagedoorman.png';
import { FaCircleArrowRight } from "react-icons/fa6";
import BgCardService1 from '../assets/images/card-service-1.png';
import BgCardService2 from '../assets/images/card-service-2.png';
import BgCardService3 from '../assets/images/card-service-3.png';
import Modal from './components/Modal';
import { data } from 'autoprefixer';


function GarageDoors() {
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
        RESIDENTIAL: {
            title: 'Residential Garage Doors',
            desc: 'We provide professional garage door installation services for both residential and commercial use. Our team of experts will ensure that your garage door is installed properly and safely, so you can enjoy its benefits for a long time. We also offer a wide range of garage door styles and designs to suit your needs and preferences.'
        },
        COMMERCIAL: {
            title: 'Commercial Overhead Doors',
            desc: 'We offer preventive maintenance services for all types of garage doors to ensure smooth operation. Our team of experts will inspect your garage door and perform the necessary repairs to keep it in good condition. We also offer a wide range of garage door styles and designs to suit your needs and preferences.'
        },
    }

    return (
        <div>
            <Modal isOpen={modalOpen} onClose={closeModal} content={dataContent} />
            <div className='bg-[#2A2A2A] flex justify-center'>
                <div className='max-w-[1280px] flex grid grid-cols-6 max-md:grid-cols-6 gap-4 flex gap-10 text-white px-32 pt-20 max-lg:flex-col max-md:p-10 max-sm:p-10 max-xl:p-20'>
                    <div className='col-span-6 max-md:col-span-6 flex-5 flex flex-col max-w-[1000px] gap-5'>
                       
                        <h1 className='text-4xl font-bold uppercase leading-tight'>GARAGE DOORS</h1>
                    </div>
                    <div className='flex justify-center col-span-3 max-md:col-span-3 max-sm:col-span-6'>
                        <div className="relative flex flex-col p-5 justify-end h-[400px] w-[350px] max-sm:w-full transition-transform transform hover:brightness-110">
                            {/* Background */}
                            <img
                                src={"https://th.bing.com/th/id/R.51dddc939b99d2a5db4003f4adc6d39f?rik=iRBntTtg%2fxHMiA&riu=http%3a%2f%2frichardsonsgaragedoors.com%2fuploads%2fphoto%2f4c472350a2f501701e000009%2f0040639410069_l4.jpg&ehk=PymzU8hvIVAtw1ef3pWoagG%2fDS5Wtb1%2byry3rP%2bF0hg%3d&risl=&pid=ImgRaw&r=0"}
                                alt={`background`}
                                className="absolute bg-black bg-opacity-80 max-sm:w-full inset-0 h-full object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
                            {/* Teks yang dapat ditimpa di depan background */}
                            <div className="relative z-10 flex flex-col gap-3">
                                <h1 className='text-2xl text-white font-bold'>Residential Garage Doors</h1>
                                <button
                                    onClick={() => openModal(dataModalContent.RESIDENTIAL)}
                                    className='flex justify-center gap-2 items-center max-w-[220px] h-61 rounded-full bg-[#D74339] bg-opacity-70 px-4 py-2 hover:bg-opacity-90 transition duration-300'>
                                    <p className='text-white font-medium'>More Info</p>
                                    <FaCircleArrowRight className='text-white' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center col-span-3 max-md:col-span-3 max-sm:col-span-6'>
                        <div className="relative flex flex-col p-5 justify-end h-[400px] w-[350px] max-sm:w-full transition-transform transform hover:brightness-110">
                            {/* Background */}
                            <img 
                            src={"https://th.bing.com/th/id/OIP.IhQRnF_6NPmH1a39mG3-KAHaFa?w=820&h=600&rs=1&pid=ImgDetMain"} 
                            alt={`background`} 
                            className="absolute max-sm:w-full inset-0 h-full object-cover rounded-xl " />
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

                            {/* Teks yang dapat ditimpa di depan background */}
                            <div className="relative z-10 flex flex-col gap-3">
                                <h1 className='text-2xl text-white font-bold'>Commercial Overhead Doors</h1>
                                <button
                                    onClick={() => openModal(dataModalContent.COMMERCIAL)}
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

export default GarageDoors;