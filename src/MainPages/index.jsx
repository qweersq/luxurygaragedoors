import React from 'react';
import UpperHeader from './UpperHeader';
import Navbar from './Navbar';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

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
        </div>
    );
}

export default Index;

