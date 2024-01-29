import React from 'react';
import UpperHeader from './UpperHeader';
import Navbar from './Navbar';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Footer from './Footer';

function Index(props) {
    return (
        <div>
                <UpperHeader />
                <Navbar /> 
                <Page1 />
                <Page2 />
                <Page3 />
                <Page4 />
                <Page5 />
                <Page6 />
                <Page7 />
                <Page8 />
                <Footer />
        </div>
    );
}

export default Index;

