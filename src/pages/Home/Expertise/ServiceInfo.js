import React from 'react';

const ServiceInfo = ({number, info}) => {
    return (
        <div className="card w-full   dark:bg-transparent  text-neutral-content rounded-md hover:bg-gray-100 shadow-md hover:shadow-xl dark:shadow-orange-500/20 dark:border-orange-500 border border-orange-500 mt-4 lg:mt-0">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-black text-6xl dark:text-gray-400">{number}</h2>
                <p className='text-black font-medium dark:text-gray-400'>{info}</p>    
            </div>
        </div>
    );
};

export default ServiceInfo;