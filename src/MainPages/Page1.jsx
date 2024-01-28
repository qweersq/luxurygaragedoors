import React from 'react';
import Bg1 from '../assets/images/background1.png';

function Page1(props) {
    return (
        <div>
            <div className='w-full '>
                <img src={Bg1} alt='Background 1' className='z-[-10] w-full h-[800px] absolute max-sm:h-[500px] object-cover' />

            </div>
        </div>
    );
}

export default Page1;