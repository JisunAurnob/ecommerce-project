import React, { useContext, useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import axios from "axios";
import Slider from "react-slick";
import { SettingsContext } from "../components/SettingsProvider";

const Home = () => {
    const settingsDataFromContext = useContext(SettingsContext);

    // console.log(settingsDataFromContext);

    // console.log(settings);
    var slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    var slickCategorySettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
    autoplaySpeed: 2700,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
        <>
            <Layout>

                <h3 className="text-red-500">This is home page</h3>




                {/* <div id="default-carousel" class="relative w-full" data-carousel="slide">
            
                    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                      
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="https://uol-v2-space.sgp1.digitaloceanspaces.com/frontend/images/banner_images/53049.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                      
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="https://uol-v-2.hostprohub.com/frontend/images/banner_images/74712.webp" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                 
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="https://uol-v-2.hostprohub.com/frontend/images/banner_images/55486.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                    </div>
   
                    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                    </div>
       
                    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div> */}

                <Slider {...slickSettings}>
                    {settingsDataFromContext?.hompageBanner.map((banner, index) => {
                        return (
                            <div>
                                <img src={banner.banner_image} className="h-[300px] w-[100%]" />
                            </div>
                        )
                    })}
                </Slider>
                <br/>
                <br/>
                <Slider {...slickCategorySettings}>
                    {settingsDataFromContext?.categories.map((category, index) => {
                        return (
                            <div>
                                <div className="p-10 border mx-4 flex items-center justify-center">
                                <div className="text-center">
                                <img src={category.image} className="w-[80px] h-[80px]" />
                                <span>{category.name}</span>
                                </div>
                            </div>
                            </div>
                        )
                    })}
                </Slider>

            </Layout>
        </>
    );
}

export default Home;