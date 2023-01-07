import React from 'react';
import { Link } from 'react-router-dom';

import qna from '../../assets/images/qna.png'
import {useLoaderData} from 'react-router-dom'
import useTitle from '../../hooks/useTitle';
import Collapse from '../Shared/Collapse/Collapse';


const Blog = () => {
    const quesAns=useLoaderData()
    useTitle('blog')
    
    return (
        <div className='dark:bg-black h-screen py-10'>
            <Link to='/' className='flex justify-center '><button className='btn btn-sm hover:bg-orange-500'>Back to Home</button></Link>
            <div className=' my-10 flex flex-col lg:flex-row '>
                <div className=' md:w-1/2'>
                    <img className=' mx-auto' src={qna} alt="" />
                </div>
                <div className='md:w-1/2  lg:p-10 p-2'>
                
                    <h2 className="text-3xl lg:text-4xl font-medium dark:text-gray-300">I did it! Milestone 12 done</h2>
                    <h4 className="text-2xl font-medium mt-3 italic dark:text-gray-300">Matha kapa questions</h4>
                    <div className='mt-6 lg:w-4/5'>
                        {
                            quesAns.map(qna=><Collapse key={qna._id} title={qna.question} description={qna.ans}></Collapse>)
                        }
                    </div>      
                </div>
            </div>
        </div>
    );
};

export default Blog;