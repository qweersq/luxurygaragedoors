import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Hamburger icon
import LuxuryGarageDoorsLogo from '../assets/icon/luxurygaragedoorslogo.png';
import { IoMdCloseCircleOutline } from "react-icons/io";

const Navbar = (props) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const menuData = [
        { id: 1, label: 'Home', link: '#home' },
        { id: 2, label: 'About Us', link: '#about' },
        { id: 3, label: 'Service & Repairs', link: '#service' },
        { id: 4, label: 'Residental Doors', link: '#service' },
        { id: 6, label: 'Gallery', link: '#gallery' },
        { id: 7, label: 'Contact', link: '#contact' },
    ];

    const handleMenuClick = (event) => {
        event.preventDefault(); // Prevent default link behavior
        const targetId = event.target.getAttribute('href').substring(1); // Get the target ID from the link

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false); // Close the menu after clicking a menu item
        }
    };

    return (
        <nav className='bg-[#E2E2E2] p-4'>
            <div className={`container mx-auto flex items-center justify-between ${isMenuOpen ? 'flex-col' : 'flex-row'}`}>
                {!isMenuOpen && (<>
                    <div className='flex items-center'>
                        <div className='text-white font-bold text-xl'>
                            <img src={LuxuryGarageDoorsLogo}
                                className={`h-10`}
                                alt='Luxury Garage Doors Logo' />
                        </div>
                    </div>

                    {/* Hamburger Icon for Tablet & Mobile */}
                    <div className='lg:hidden'>
                        <FaBars
                            className={`text-red cursor-pointer`}
                            size={24}
                            onClick={handleToggleMenu}
                        />
                    </div>
                </>
                )}


                {/* Navigation Menu */}
                <div className={`lg:flex items-center gap-6 ${isMenuOpen ? 'flex flex-col ' : 'hidden'}`}>
                    {isMenuOpen && (
                        <div className='lg:hidden flex gap-2 cursor-pointer' onClick={handleToggleMenu}>
                            <IoMdCloseCircleOutline
                                className={`text-red `}
                                size={24}
                            />
                            Close
                        </div>
                    )}
                    <ul className='flex flex-col lg:flex-row lg:items-center gap-10 mt-3'>
                        {menuData.map((menu) => (
                            <li key={menu.id} className='mb-4 relative'>
                                <a
                                    href={menu.link}
                                    onClick={handleMenuClick}
                                    className='text-black text-center relative group'
                                >
                                    {menu.label}
                                    <span className='absolute left-0 right-0 top-0 mt-[-28px] h-1 bg-red-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100'></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button className='bg-[#D74339] text-white px-4 py-2 rounded-md hover:bg-[#eb5348] transition-colors duration-300' onClick={() => window.open('https://wa.me/6477868309' + '?text=Hello%20Luxury%20Garage%20Doors%20Team%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20my%20garage%20door%20project.', '_blank')}>
                        Get a Quote
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
