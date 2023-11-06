import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from '../assets/images/chair.png'

const Footer = () => {
    const COMPANY_NAME = "Inmotion";
    const SITE_NAME = "Inmotion";
    const currentYear = new Date().getFullYear();
    const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
    const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
    // const menu = await getMenu('next-js-frontend-footer-menu');
    const copyrightName = COMPANY_NAME || SITE_NAME || '';
    return (
        <>
            <footer className="text-sm text-neutral-500">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm dark:border-neutral-700 md:flex-row md:gap-12 md:px-4 xl:px-0">
                    <div>
                        <Link className="flex items-center gap-2 text-black dark:text-white md:pt-1" to="/">
                            {/* <LogoSquare size="sm" /> */}
                            <img src={FooterLogo} className='' width={120} />
                            {/* <span className="uppercase">{SITE_NAME}</span> */}
                        </Link>
                    </div>
                  
                        {/* <FooterMenu menu={menu} /> */}
                        <nav>
                            <ul>
                                <li>
                                    <Link
                                        to={"/#"}
                                        className={'block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm ' + (window.location.pathname === '/' ? 'text-black ' : '')}
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to={"/#"}
                                        className={'block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm'
                                            // 'text-black ' active
                                        }
                                    >
                                        How Immotion works
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to={"/#"}
                                        className={'block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm'
                                            // 'text-black ' active
                                        }
                                    >
                                        FAQs
                                    </Link>
                                </li>

                            </ul>
                        </nav>

                        <nav>
                            <ul>
                                <li>
                                    <Link
                                        to={"/#"}
                                        className={'block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm ' + (window.location.pathname === '/' ? 'text-black ' : '')}
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to={"/#"}
                                        className={'block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm'
                                            // 'text-black ' active
                                        }
                                    >
                                        How Immotion works
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to={"/#"}
                                        className={'block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm'
                                            // 'text-black ' active
                                        }
                                    >
                                        FAQs
                                    </Link>
                                </li>

                            </ul>
                        </nav>
                        <nav>
                            <ul>
                                <li>
                                    <Link
                                        to={"/#"}
                                        className={'block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm ' + (window.location.pathname === '/' ? 'text-black ' : '')}
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to={"/#"}
                                        className={'block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm'
                                            // 'text-black ' active
                                        }
                                    >
                                        How Immotion works
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to={"/#"}
                                        className={'block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm'
                                            // 'text-black ' active
                                        }
                                    >
                                        FAQs
                                    </Link>
                                </li>

                            </ul>
                        </nav>
                        <nav>
                            <ul>
                                <li>
                                    {/* <Image src={PaymentLogos} className='' /> */}
                                </li>

                            </ul>
                        </nav>

                    <div className="md:ml-auto">
          <a
            className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white"
            aria-label="Deploy on Vercel"
            to="https://vercel.com/templates/next.js/nextjs-commerce"
          >
            <span className="px-3">IM</span>
            <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
            <span className="px-3">GGWP</span>
          </a>
        </div>
                </div>
                <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
                    <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 xl:px-0">
                        <p>
                            &copy; {copyrightDate} {copyrightName}
                            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
                        </p>
                        <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
                        <p>Designed by Jisun Aurnob</p>
                        <p className="md:ml-auto">
                            Crafted by{' '}
                            <a to="https://brandmyth.agency/" target="_blank" className="text-black dark:text-white">
                                Kodeeo
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer