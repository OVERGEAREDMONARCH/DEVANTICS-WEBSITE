import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen text-gray-800 font-sans">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
