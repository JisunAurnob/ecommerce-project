import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../components/UserProvider';
import Toaster from '../components/common/Toaster';
import axios from 'axios';

const DashboardLayout = ({ children }) => {

    const { userData } = useContext(UserContext);

    const navigate = useNavigate();

    let isLoaded = 0;
    
    useEffect(()=>{

        if(userData){

        if(isLoaded==0 && !userData?.token){
            Toaster('You need to login first!', 'warn');
            navigate('/login', {replace: true})
        }
        else{
            axios.defaults.headers.common["Authorization"] = `Bearer ${userData?.token}`;
        }

        isLoaded=1;
        }

    },[userData])

    return (
        <>
            <div className="grid grid-cols-6">

                <div className="col-span-2 p-6">
                    <Link to={'/user/dashboard'} className={`mx-4 p-2 ${window.location.pathname === '/user/dashboard' ? 'bg-blue-800 text-white' : 'bg-blue-400'} rounded-lg flex w-100 justify-center mb-4`}>Dashboard</Link>
                    <Link to={'/user/profile'} className={`mx-4 p-2 ${window.location.pathname === '/user/profile' ? 'bg-blue-800 text-white' : 'bg-blue-400'} rounded-lg flex w-100 justify-center mb-4`}>Profile</Link>
                    <Link to={'/user/addresses'} className={`mx-4 p-2 ${window.location.pathname === '/user/addresses' ? 'bg-blue-800 text-white' : 'bg-blue-400'} rounded-lg flex w-100 justify-center mb-4`}>Address Book</Link>
                </div>

                <div className="col-span-4 p-6">
                    {children}
                </div>


            </div>
        </>
    )
}
export default DashboardLayout;