import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import MobileMenu from './MobileMenu';
import CartIcon from '../assets/images/icons/icon-cart.svg'
import { SettingsContext } from '../components/SettingsProvider';

const Navbar = () => {
    // console.log(props.headerData);
    const settingsDataFromContext = useContext(SettingsContext);

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
                        <Link to={''} className='mx-4 hover:underline relative'>
                            <img src={CartIcon} className='' title='Cart' alt='Cart icon' width={30} />
                            <span className='bg-black text-white rounded-[50%] text-center text-xs absolute right-[-18%] top-[-22%] w-4 h-4'>0</span>
                        </Link>
                        <Link
                            to={'/blogs'}
                            className="text-neutral-500 underline-offset-4 mx-4 hover:text-black hover:underline"
                        // onClick={(e) => { e.preventDefault(); setLoginOpen('overlay open'); }}
                        >
                            Blogs
                        </Link>
                        <Link
                            to={''}
                            className="text-neutral-500 underline-offset-4 hover:text-black hover:underline"
                        // onClick={(e) => { e.preventDefault(); setLoginOpen('overlay open'); }}
                        >
                            Login
                        </Link>
                        /
                        <Link
                            to={''}
                            className="text-neutral-500 underline-offset-4 hover:text-black hover:underline"
                        // onClick={(e) => { e.preventDefault(); setLoginOpen('overlay open'); }}
                        >
                            Signup
                        </Link>
                    </div>
                </div>
            </nav>
            
            <div className='sticky top-16 z-40 w-100 bg-black text-white p-2 flex justify-between'>
                    <span>Call Us {settingsDataFromContext?.headerManagement?.hotline_no}</span>
                    <span>{settingsDataFromContext?.headerManagement?.hotline_description_bottom}</span>
                </div>
        </>
    );
}
export default Navbar