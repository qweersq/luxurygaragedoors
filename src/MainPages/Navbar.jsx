import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Hamburger icon
import LuxuryGarageDoorsLogo from '../assets/icon/luxurygaragedoorslogo.png';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = (props) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;


    const handleToggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const menuData = [
        { id: 1, label: 'Home', link: '/' },
        { id: 2, label: 'About Us', link: '/about' },
        { id: 3, label: 'Service & Repairs', link: '/service' },
        { id: 4, label: 'Garage Doors', link: '/garage-doors' },
        { id: 8, label: 'Review', link: '/review' },
        { id: 6, label: 'Gallery', link: '/gallery' },

    ];

    const handleMenuClick = (menu) => {
        // event.preventDefault(); // Prevent default link behavior
        // const targetId = event.target.getAttribute('href').substring(1); // Get the target ID from the link

        // const targetElement = document.getElementById(targetId);
        // if (targetElement) {
        //     targetElement.scrollIntoView({ behavior: 'smooth' });
        //     setMenuOpen(false); // Close the menu after clicking a menu item
        // }

        // Navigate to the link
        navigate(menu.link);
    };

    useEffect(() => {
        console.log('currentPath', currentPath);
    }, [currentPath]);

    return (
        <nav className='bg-[#E2E2E2] p-4'>
            <div className={`container mx-auto flex items-center justify-between`}>
                {!isMenuOpen && (<>
                    <div className='flex items-center max-xl:min-w-[150px]'>
                        <div className='text-white font-bold text-xl'>
                            <img src={LuxuryGarageDoorsLogo}
                                className={`h-10`}
                                alt='Luxury Garage Doors Logo' />
                        </div>
                    </div>

                    {/* Hamburger Icon for Tablet & Mobile */}
                    {/* <div className='lg:hidden'>
                        <FaBars
                            className={`text-red cursor-pointer`}
                            size={24}
                            onClick={handleToggleMenu}
                        />
                    </div> */}
                </>
                )}


                {/* Navigation Menu */}
                <div className={`lg:flex items-center gap-6 flex max-xl:overflow-x-auto`} style={{ scrollbarWidth: "none" }}>
                    {isMenuOpen && (
                        <>
                            {/* <div className='lg:hidden flex gap-2 cursor-pointer' onClick={handleToggleMenu}>
                            <IoMdCloseCircleOutline
                                className={`text-red `}
                                size={24}
                            />
                            Close
                        </div> */}
                        </>
                    )}
                    <ul className='flex flex-row lg:flex-row lg:items-center gap-10 mt-3'>
                        {menuData.map((menu) => (
                            <li key={menu.id} className={`mb-4 relative transition-colors duration-300`}>
                                <button
                                    // href={menu.link}
                                    onClick={() => handleMenuClick(menu)}
                                    className={`text-black text-center relative group whitespace-nowrap ${currentPath === menu.link ? 'text-red-700' : 'text-black'} hover:text-red-700 transition-colors duration-300`}
                                >
                                    {menu.label}
                                    <span className='absolute left-0 right-0 top-0 mt-[-28px] h-1 bg-red-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100'></span>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => navigate('/contact')}
                        className='bg-[#D74339] text-white px-4 py-2 rounded-md whitespace-nowrap hover:bg-[#eb5348] transition-colors duration-300'>
                        Get a Quote
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
