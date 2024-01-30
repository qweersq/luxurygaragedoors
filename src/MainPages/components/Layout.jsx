// Layout.js
import React from 'react';
import UpperHeader from '../UpperHeader';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Layout({ children }) {
  return (
    <div>
      <UpperHeader />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
