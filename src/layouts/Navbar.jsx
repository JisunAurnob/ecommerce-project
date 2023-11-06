import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import MobileMenu from './MobileMenu';

const Navbar = () => {
    return (
        <>
            <nav className="sticky top-0 z-40 w-full backdrop-blur flex items-center justify-between p-4 lg:px-6 border-b border-gray-200">
                <div className="block flex-none md:hidden">
                    <MobileMenu />
                </div>
                <div className="flex w-full items-center">
                    <div className="flex w-full md:w-1/3">
                        <Link to="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
                            <img src={''} className='' width={40} />
                            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                                Ecommerce
                            </div>
                        </Link>
                    </div>
                    <div className="hidden justify-center md:flex md:w-1/3">
                        <Search />
                    </div>
                    <div className="flex justify-end md:w-1/3">
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
        </>
    );
}
export default Navbar