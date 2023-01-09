import axios from 'axios';
import React,{useEffect, useState} from 'react';
import Category from './Category';

const Categories = () => {
    const [categories, setCategoris]=useState([])
    useEffect(()=>{
        axios.get('https://new-folder-najmul11.vercel.app/categories')
        .then(res=>setCategoris(res.data))
    },[])
    return (
        <div className='dark:bg-black lg:pt-20'>
            <h2 className='text-5xl font-light text-center  dark:text-gray-400 mt-16'>Browse By Category</h2>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-12 justify-center py-12 lg:py-28'>
                {
                    categories.map(category=><Category key={category._id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;