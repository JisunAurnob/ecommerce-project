import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search';
import MobileMenu from './MobileMenu';
import CartIcon from '../assets/images/icons/icon-cart.svg'
import { SettingsContext } from '../components/SettingsProvider';
import { useCart } from 'react-use-cart';
import { UserContext } from '../components/UserProvider';
import Toaster from '../components/common/Toaster';
import axios from 'axios';
// import logOut from '../components/common/Logout';

const Navbar = () => {
    // console.log(props.headerData);
    const navigate = useNavigate();

    const settingsDataFromContext = useContext(SettingsContext);

    const { userData, updateUserData } = useContext(UserContext);

    const { totalUniqueItems } = useCart();

    const logOut = () => {

        axios.defaults.headers.common["Authorization"] = `Bearer ${userData?.token}`;

        axios.post("customer/logout")
            .then(function (resp) {
                if (resp.data.success) {

                    Toaster('Successfully logged out', 'success');
                    localStorage.removeItem("user");
                    updateUserData(null);

                    navigate("/", { replace: true });
                }
            })
            .catch((err) => {
                console.log(err);
            });

    }

    // console.log(settingsDataFromContext);
    return (
        <>
            <nav className="sticky top-0 z-40 w-full backdrop-blur flex items-center justify-between p-4 lg:px-6 border-b border-gray-200">
                <div className="block flex-none md:hidden">
                    <MobileMenu />
                </div>
                <div className="flex w-full items-center">
                    <div className="flex w-full md:w-1/3">
                        <Link to="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
                            <img src={settingsDataFromContext?.headerManagement?.site_logo} className='' width={40} />
                            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                                Ecommerce
                            </div>
                        </Link>
                    </div>
                    <div className="hidden justify-center md:flex md:w-1/3">
                        <Search />
                    </div>
                    <div className="flex justify-end md:w-1/3">
                        <Link to={'/cart'} className='mx-4 hover:underline relative'>
                            <img src={CartIcon} className='' title='Cart' alt='Cart icon' width={30} />
                            <span className='bg-black text-white rounded-[50%] text-center text-xs absolute right-[-18%] top-[-22%] w-4 h-4'>{totalUniqueItems}</span>
                        </Link>
                        <Link
                            to={'/blogs'}
                            className="text-neutral-500 underline-offset-4 mx-4 hover:text-black hover:underline"
                        // onClick={(e) => { e.preventDefault(); setLoginOpen('overlay open'); }}
                        >
                            Blogs
                        </Link>
                        {userData ? (
                            <>
                                <Link to={`/user/dashboard`} className='hover:underline'><h3>{userData?.name}</h3></Link>
                                <button className='' onClick={logOut}>Logout</button>
                            </>
                        ) :
                            (
                                <>
                                    <Link
                                        to={'/login'}
                                        className="text-neutral-500 underline-offset-4 hover:text-black hover:underline">
                                        Login
                                    </Link>
                                    /
                                    <Link
                                        to={'/sign-up'}
                                        className="text-neutral-500 underline-offset-4 hover:text-black hover:underline">
                                        Signup
                                    </Link>
                                </>
                            )}
                    </div>
                </div>
            </nav>

            <div className=' w-100 bg-black text-white p-2 flex justify-between'>
                <span>Call Us {settingsDataFromContext?.headerManagement?.hotline_no}</span>
                <span>{settingsDataFromContext?.headerManagement?.hotline_description_bottom}</span>
            </div>
        </>
    );
}
export default Navbar