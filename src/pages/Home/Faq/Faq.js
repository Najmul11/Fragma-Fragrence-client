import React from 'react';
import image from '../../../assets/images/qna.png'
import Collapse from '../../Shared/Collapse/Collapse';

const Faq = () => {
    return (
        <div className='dark:bg-black'>
            <div className='container mx-auto py-28 b'>
                <div className="card lg:card-side bg-base-100 rounded-md dark:bg-gray-200">
                    <div className='md:w-1/2 pt-8'>
                        <div className="card-body">
                            <h2 className=" card-title text-5xl font-light">Your Best Fragrence<br />Resale  Store in Town</h2>
                            <h4 className='text-2xl  mt-10'>Frequrntly asked questions</h4>
                            <div className='mt-3'>
                                <Collapse title={'Why the price is so high?'} description={'Yes everyday'}></Collapse>
                                <Collapse title={'Do you provide inspection service?'} description={'Yes this service is most wanted'}></Collapse>
                                <Collapse title={'Your service avaliavle on midnight?'} description={'No, daytime only'}></Collapse>
                                <Collapse title={'What you do with the broken things?'} description={'Sell and earn money from that also'}></Collapse>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <figure><img src={image} className='rounded-r-md'  alt="Album"/></figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;