import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-gray-50 dark:bg-black'>
            <footer className="footer p-20   container mx-auto justify-items-center">
            <div className='font-medium  dark:text-gray-300'>
                <span className="footer-title dark:text-orange-500">Services</span> 
                <a href='http://localhost:3000/' className="link link-hover">Coating</a> 
                <a href='http://localhost:3000/' className="link link-hover">Replacing</a> 
                <a href='http://localhost:3000/' className="link link-hover">Inspecting</a> 
                <a href='http://localhost:3000/' className="link link-hover">Repairing</a>
            </div> 
            <div className='font-medium dark:text-gray-300'>
                <span className="footer-title dark:text-orange-500">Explore</span> 
                <a href='#home' className="link link-hover">About</a> 
                <a href='#experience' className="link link-hover">Experiences</a> 
                <a href='#faq' className="link link-hover">Faq</a> 
                <a href='#services' className="link link-hover">Services</a>
            </div> 
            <div className='font-medium  dark:text-gray-300'>
                <span className="footer-title dark:text-orange-500">Social</span> 
                <div className="grid grid-flow-col gap-4 text-2xl text-orange-500">
                    <a href="https://twitter.com/" target={'_blank'} rel="noreferrer"><FaTwitter/></a>
                    <a href="https://youtube.com/" target={'_blank'} rel="noreferrer"><FaYoutube/></a>
                    <a href="https://facebook.com/" target={'_blank'} rel="noreferrer"><FaFacebook/></a>
                </div>
                <div className="relative mt-3">
                    <input type="text" placeholder="xyz@site.com" className="input border-inherit w-full pr-16" /> 
                    <button className="btn absolute top-0 right-0 rounded-l-none  hover:text-white text-black border-0  bg-orange-500 hover:bg-orange-500 hover:border-0">Subscribe</button>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;