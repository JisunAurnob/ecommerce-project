import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

const Layout = ({ children }) => {
    const [settings, setSettings] = useState();

    useEffect(() => {

        axios.get('https://uol-v-2.hostprohub.com/api/settings?platform=web')
            .then(response => {
                // console.log(response.data);
                setSettings(response.data);
            })

    }, [])

    // console.log(settings);
    return (
        <div>
                <Navbar headerData={settings?.headerManagement} />

                <div className='min-h-[75vh] bg-slate-100'>
                {children}
                </div>

                <Footer />
        </div>
    )
}
export default Layout;