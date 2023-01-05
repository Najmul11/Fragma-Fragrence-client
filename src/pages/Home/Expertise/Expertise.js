import React from 'react';
import ServiceInfo from './ServiceInfo';

const Expertise = () => {
    return (
        <div className='dark:bg-black py-20' id='experience'>
                <div className='container mx-auto  grid md:grid-cols-2 lg:grid-cols-4 md:gap-3 lg:gap-12 justify-items-center'>
                    <ServiceInfo number={'1'} info={'YEAR IN MARKET'}></ServiceInfo>
                    <ServiceInfo number={'100+'} info={'VERIFIED SELLERS'}></ServiceInfo>
                    <ServiceInfo number={'2K+'} info={'LISTED PRODUCTS'}></ServiceInfo>
                    <ServiceInfo number={'100K+'} info={'HAPPY CUSTOMERS'}></ServiceInfo>
                </div>
            </div>
    );
};

export default Expertise;