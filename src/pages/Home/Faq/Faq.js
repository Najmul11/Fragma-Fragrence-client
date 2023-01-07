import React from 'react';
import Collapse from '../../Shared/Collapse/Collapse';

const Faq = () => {
    return (
        <div className='dark:bg-black'>
            <div className='container mx-auto py-28 b'>
                <div className="card lg:card-side bg-base-100 rounded-md dark:bg-black">
                    <div className='md:w-1/2 pt-8'>
                        <div className="card-body">
                            <h2 className=" card-title text-5xl font-light dark:text-gray-400">Your Best Fragrence<br />Resale  Store in Town</h2>
                            <h4 className='text-2xl  mt-10  dark:text-gray-400'>Frequrntly asked questions</h4>
                            <div className='mt-3'>
                                <Collapse title={'Why the price is so high?'} description={'Yes everyday'}></Collapse>
                                <Collapse title={'Do you provide inspection service?'} description={'Yes this service is most wanted'}></Collapse>
                                <Collapse title={'Your service avaliavle on midnight?'} description={'No, daytime only'}></Collapse>
                                <Collapse title={'What you do with the broken things?'} description={'Sell and earn money from that also'}></Collapse>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <figure className=''><img src='https://i.ibb.co/GRf4yX2/perfume.png' className='rounded-r-md'  alt="Album"/></figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;