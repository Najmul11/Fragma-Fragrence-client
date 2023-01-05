import React from 'react';
import { Link } from 'react-router-dom';

import qna from '../../assets/images/qna.png'
import {useLoaderData} from 'react-router-dom'


const Blog = () => {
    const quesAns=useLoaderData()
    
    return (
        <>
            <Link to='/' className='flex justify-center my-10'><button className='btn btn-sm hover:bg-orange-500'>Back to Home</button></Link>
            <div className=' py-20 flex flex-col lg:flex-row '>
                <div className=' md:w-1/2'>
                    <img className=' mx-auto' src={qna} alt="" />
                </div>
                <div className='md:w-1/2  lg:p-10 p-2'>
                
                    <h2 className="text-3xl lg:text-4xl font-medium">I did it! Milestone 12 done</h2>
                    <h4 className="text-2xl font-medium mt-3 italic">Matha kapa questions</h4>
                    <div className='mt-6 lg:w-4/5'>
                        {
                            quesAns.map(qna=>
                                <div key={qna._id} tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-lg mt-2">
                                    <div className="collapse-title text-xl font-medium">{qna.question}</div>
                                    <div className="collapse-content"> 
                                        <p>{qna.ans}</p>
                                    </div>        
                                </div> 
                            )
                        }
                    </div>      
                </div>
            </div>
        </>
    );
};

export default Blog;