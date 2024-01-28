import React from 'react';
import UpperHeader from './UpperHeader';
import Navbar from './Navbar';
import Page1 from './Page1';
import Page2 from './Page2';

function Index(props) {
    return (
        <div>
            <UpperHeader />
            <Navbar />
            <Page1 />
            <Page2 />
        </div>
    );
}

export default Index;

