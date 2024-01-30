import React from 'react';
import Garagedoorman from '../assets/images/garagedoorman.png';
import { FaCircleArrowRight } from "react-icons/fa6";
import BgCardService1 from '../assets/images/card-service-1.png';
import BgCardService2 from '../assets/images/card-service-2.png';
import BgCardService3 from '../assets/images/card-service-3.png';
import { IoStarSharp } from "react-icons/io5";

import { IoPersonCircleSharp } from "react-icons/io5";


function Page7() {

    const dataTestimoni = [
        {
            name: 'Alexandra Thompson',
            review: 'Luxury Garage Doors exceeded my expectations! The installation process was seamless, and the final result transformed the entire look of my home.',
            url_picture: 'https://www.heysaturday.co/wp-content/uploads/2016/11/best-dating-photos-men-768x512.jpg',
            stars: 5
        },
        {
            name: 'Ricky Rodriguez',
            review: 'I had a fantastic experience with Luxury Garage Doors. From the friendly customer service to the skilled technicians, they made the entire process stress-free.',
            url_picture: "https://www.rp-assets.com/images/news/2021/11/28/101623-large.jpeg",
            stars: 4
        },
        {
            name: 'Emily Carter',
            review: 'Luxury Garage Doors delivers exceptional quality! The durability and craftsmanship of their doors are truly impressive. ',
            url_picture: "https://i.ytimg.com/vi/pn7_PB72u5Q/maxresdefault.jpg",
            stars: 5
        },
        {
            name: 'Timothy Ronald',
            review: 'I recently upgraded to a stunning garage door from Luxury Garage Doors, and I couldnt be happier! The attention to detail and the quality of their products exceeded my expectations. A perfect blend of elegance and functionality!',
            url_picture: "https://i.pinimg.com/originals/95/14/61/9514610efc683f8c2e40ff91b795faf4.jpg",
            stars: 5
        },
        {
            name: 'Ethan Thornton',
            review: 'Luxury Garage Doors turned my vision into reality. Their customizable options allowed me to personalize every detail of my garage door. The result? A masterpiece that adds value to my property and leaves a lasting impression on everyone who sees it.',
            url_picture: "https://yt3.ggpht.com/a/AATXAJxyAZcZEKZaVeSMa1WrMhaOAF_kGBZeSeJXag=s900-c-k-c0xffffffff-no-rj-mo",
            stars: 4
        },
        {
            name: 'Lucas Harrington',
            review: 'Luxury Garage Doors exceeded my expectations! The installation process was seamless, and the final result transformed the entire look of my home.',
            url_picture: "https://th.bing.com/th/id/R.227c68dab4519731a4ea15eaf5235ab2?rik=m%2biMOmBlWtk74w&riu=http%3a%2f%2fcs.bilkent.edu.tr%2f~aytek.aman%2fprofile.jpg&ehk=vwDfvK02z1EpKFJz%2fbTnXxUpYuZmc5G%2fDrMZhlcSpBI%3d&risl=&pid=ImgRaw&r=0",
            stars: 5
        },
    ]

    const TestimonialComponent = ({ item }) => (
        <div className='flex justify-center max-md:col-span-3 max-sm:col-span-6'>
            <div className="bg-[#E2E2E2] flex flex-col rounded-lg shadow-lg p-4 border border-gray-300 gap-2">
                <div className='flex gap-2 items-center'>
                    <img src={item.url_picture} alt={item.name} className='rounded-full h-16 w-16 object-cover' />
                    <div>
                        <p className='text-lg'>{item.name}</p>
                        <div className='flex gap-2'>
                            {[...Array(item.stars)].map((_, index) => (
                                <IoStarSharp key={index} className='text-[#E0B040] scale-150' />
                            ))}
                        </div>
                    </div>
                </div>
                <p className='text-md'>{item.review}</p>
            </div>
        </div>
    );

    return (
        <div id='testimonial'>
            <div className='bg-[#E2E2E2] flex justify-center'>
                <div className='max-w-[1280px] grid grid-cols-3 max-md:grid-cols-6 gap-4 flex gap-10 text-black px-32 py-20 max-lg:flex-col max-md:p-10 max-sm:p-10 max-xl:p-20'>
                    <div className='col-span-3 max-md:col-span-6 flex-5 flex flex-col max-w-[1000px] gap-5'>
                        <div className='flex items-center gap-2'>
                            {/* garis */}
                            <div className='w-10 h-[2px] bg-black'></div>
                            <h2 className='text-3xl'>What People Talk About</h2>
                        </div>
                        <h1 className='text-4xl font-bold  leading-tight'>Unveiling the <span className='text-[#BD261F]'> Positive Impact </span> of Our Exceptional Service</h1>
                        <p className='text-lg opacity-80'>Explore customer reviews on our site for insights into the excellence of Luxury Garage Doors' services.</p>
                    </div>

                    <>
                        {dataTestimoni.map((item, index) => (
                            <TestimonialComponent key={index} item={item} />
                        ))}
                    </>
                </div>
            </div>
        </div>
    );
}

export default Page7;