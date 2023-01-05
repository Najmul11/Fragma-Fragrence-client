import React from 'react';
import './Banner.css'
import { AiOutlineDown } from "react-icons/ai";
import bannerImg from '../../../assets/images/home/banner.png'

const Banner = () => {
    return (
        <div className=' relative w-full'>
            <div className='banner-img'>
                <img src={bannerImg} className='w-full h-56 lg:h-full' alt="" />
            </div>
            <div className='absolute w-full top-1/4 p-0 '>
                <h1 className='text-center text-3xl lg:text-6xl font-light text-white mb-2 lg:mb-6 dark:text-gray-300'>
                    Your One Stop Solution 
                </h1>
                <h1 className='text-center text-3xl lg:text-6xl font-light text-white '>
                    <span className='bg-orange-500 bg-opacity-25 rounded-md px-2 py-1 dark:text-gray-300'>For Fragrence Resale </span></h1>
                <div className='text-white text-center mt-5 mx-auto'>
                    <AiOutlineDown className='animate-bounce  text-5xl text-orange-500  mx-auto'></AiOutlineDown>
                </div>
            </div>
        </div>
    );
};

export default Banner;