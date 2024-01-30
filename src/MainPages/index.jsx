import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpperHeader from './UpperHeader';
import Navbar from './Navbar';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import GarageDoors from './GarageDoors';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Footer from './Footer';
import Layout from './components/Layout';

function Index(props) {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <Layout>
                        <Page1 />
                    </Layout>
                } />
                <Route path="/about" element={
                    <Layout>
                        <Page3 />
                    </Layout>
                } />
                <Route path="/service" element={
                    <Layout>
                        <Page5 />
                    </Layout>
                } />
                <Route path="/garage-doors" element={
                    <Layout>
                        <GarageDoors />
                    </Layout>
                } />
                <Route path="/gallery" element={
                    <Layout>
                        <Page6 />
                    </Layout>
                } />
                <Route path="/contact" element={
                    <Layout>
                        <Page8 />
                    </Layout>
                } />
                <Route path="/review" element={
                    <Layout>
                        <Page7 />
                    </Layout>
                } />
            </Routes>
        </Router>
    );
}

export default Index;

