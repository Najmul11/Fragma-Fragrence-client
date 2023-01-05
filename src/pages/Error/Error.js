import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className='error-content h-screen flex items-center justify-center relative'>
            <div className=' w-96 text-white  error-btn absolute md:right-1/3  '>
                <h1 className='text-6xl mb-6 md:text-center font-medium text-red-600'>404</h1>
                <p className='font-medium mb-4'>Sorry we can’t find that page! <br /> Don’t worry, though everything is STILL AWESOME!</p>
                <Link to='/'><button className='btn btn-sm'>Back to Home</button></Link>
            </div>
        </div>
    );
};

export default Error;