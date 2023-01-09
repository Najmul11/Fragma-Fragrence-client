import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Product from './Product';

const AllProducts = () => {
    const {data:products=[], isLoading}=useQuery({
        queryKey:['products'],
        queryFn:async()=>{
            const res=await fetch(`https://new-folder-najmul11.vercel.app/products`)
            const data= await res.json()
            return data
        }
    })
    if (isLoading) {
        return <div className='flex justify-center h-screen items-center'><progress className="bg-orange-500 progress w-56 "></progress></div>
    }
    return (
        <div className='py-20 dark:bg-black'>
            <h1 className='text-center dark:text-gray-400 text-5xl font-light pb-20'>All products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 container mx-auto'>
                {
                    products.map(p=><Product key={p._id} p={p}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;