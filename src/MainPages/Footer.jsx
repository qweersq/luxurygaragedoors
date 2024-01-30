import React from 'react';
import BgForm from '../assets/images/bg-form.png';

import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { MdOutlineArrowRight } from "react-icons/md";



import LuxuryGarageDoorsLogo from '../assets/icon/luxurygaragedoorslogo.png';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function Footer() {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <div>
            <div className='flex justify-center mt-[-130px] hover:brightness-110 transition duration-300' onClick={() => window.open('https://maps.app.goo.gl/VpFfCRAHu7RQRUUTA', '_blank')} style={{ cursor: 'pointer' }}>
                <div className=' max-w-[1280px] w-[1280px] h-[250px] px-32 max-lg:px-10'>
                    <div className="relative w-full h-full overflow-hidden rounded-[30px] shadow-md">
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.713354584199!2d-79.77602739999999!3d43.654131799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b1523041145d5%3A0xd24c887e271e603e!2s1%20Bittersweet%20Rd%2C%20Brampton%2C%20ON%20L6Y%200G8%2C%20Canada!5e0!3m2!1sen!2sid!4v1706601924051!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: '0' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 z-[10]"
                        ></iframe>
                        <div className='absolute inset-0 bg-black opacity-50 z-[11]'></div>

                        <div className="absolute inset-0 flex flex-col h-full p-10 justify-center text-white z-[12]">
                            <h2 className="text-4xl font-bold mb-2">Find Us Here</h2>
                            <p className='text-2xl'>1 Bittersweet Road</p>
                            <p className='text-2xl'>Brampton ON, L6Y0Z1</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#2A2A2A] w-full z-0 mt-[-120px] z-[12] flex justify-center'>
                <div className='grid grid-cols-3 max-w-[1580px] w-[1580px] flex justify-center gap-10 text-white px-32 mt-[100px] pt-40 pb-10 max-lg:flex-col max-md:p-10 max-sm:p-10 max-xl:p-20'>
                    <div className='col-span-1 w-full max-md:col-span-3'>
                        <div className='bg-[#C7C6C6]  flex flex-col items-center p-4 text-black rounded-tl-[50px] rounded-br-[50px] flex justify-center gap-2'>
                            <img src={LuxuryGarageDoorsLogo} alt="" className='h-[70px] w-[250px]' />
                            <p className='font-light '>Explore luxury garage doors at 1 Bittersweet Road, Brampton. Stylish solutions for homes and businesses. Visit for the perfect blend of aesthetics and durability.</p>
                            <div className='flex gap-2 justify-start w-full'>
                                <FaInstagramSquare className='text-[#D74339] text-2xl' />
                                <FaFacebook className='text-[#D74339] text-2xl' />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-col gap-6 max-md:col-span-3'>
                        {/* Contact */}
                        <div className='flex flex-col gap-2 '>
                            <h1 className='text-xl font-bold'>CONTACT</h1>
                            <div className='flex gap-2 items-left'>
                                <MdOutlinePhoneIphone className='text-2xl' />
                                <p className='text-lg'> 647-786-8309</p>
                            </div>
                            <div className='flex gap-2 items-left'>
                                <IoMail className='text-xl' />
                                <p className='text-sm'>luxurygaragedoors@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-xl font-bold'>RESOURCE</h1>
                            <div className='flex gap-2 items-left'>
                                <MdOutlineArrowRight className='text-2xl text-[#595959]' />
                                <p className='text-md font-light'>FAQS</p>
                            </div>
                            <div className='flex gap-2 items-left'>
                                <MdOutlineArrowRight className='text-2xl text-[#595959]' />
                                <p className='text-md font-light'>Privacy Policy</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-1 max-md:col-span-3'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-xl font-bold mb-2'>Other Information</h1>
                            <div className='grid grid-cols-2 gap-3'>
                                <div className='flex flex-col gap-5 items-left'>
                                    <div
                                        className='flex gap-2'
                                        onClick={() => scrollToSection('home')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <MdOutlineArrowRight className='text-2xl text-[#595959]' />
                                        <p className='text-md font-light'>Home</p>
                                    </div>
                                    <div
                                        className='flex gap-2'
                                        onClick={() => scrollToSection('about')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <MdOutlineArrowRight className='text-2xl text-[#595959]' />
                                        <p className='text-md font-light'>About Us</p>
                                    </div>
                                    <div
                                        className='flex gap-2'
                                        onClick={() => scrollToSection('service')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <MdOutlineArrowRight className='text-2xl text-[#595959]' />
                                        <p className='text-md font-light'>Service & Repairs</p>
                                    </div>

                                </div>
                                <div className='flex flex-col gap-5 items-left'>
                                    <div
                                        className='flex gap-2'
                                        onClick={() => scrollToSection('contact')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <MdOutlineArrowRight className='text-2xl text-[#595959]' />
                                        <p className='text-md font-light'>Contact</p>
                                    </div>
                                    <div
                                        className='flex gap-2'
                                        onClick={() => scrollToSection('gallery')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <MdOutlineArrowRight className='text-2xl text-[#595959]' />
                                        <p className='text-md font-light'>Gallery</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='bg-black h-[50px] flex justify-center items-center'>
                <p className='text-white items-center'>© 2023 Luxury Garage Doors.</p>
            </div>
        </div >
    );
}

export default Footer;