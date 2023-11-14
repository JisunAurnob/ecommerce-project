import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

const Layout = ({ children }) => {

    // console.log(settings);
    return (
        <div>
                <Navbar />

                <div className='min-h-[75vh] bg-slate-100'>
                {children}
                </div>

                <Footer />
        </div>
    )
}
export default Layout;