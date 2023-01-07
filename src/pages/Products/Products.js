import React,{useState} from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import BookingModal from './BookingModal';


const Products = () => {
    const params=useParams()
    const [productData, setProductData]=useState(null)

    const {data:products=[], isLoading}=useQuery({
        queryKey:['products'],
        queryFn:async()=>{
            const res=await fetch(`http://localhost:5000/categories/${params.id}`)
            const data= await res.json()
            return data
        }
    })
    return (
        <div className='py-5 dark:bg-black'>
            <h1 className="text-center text-5xl font-light dark:text-gray-400 ">All products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center container mx-auto gap-10 pt-12 pb-20'>
               {
                products.map(product=><ProductCard key={product._id} product={product} setProductData={setProductData}></ProductCard>)
               }
            </div>
            {
               productData && <BookingModal productData={productData} setProductData={setProductData}></BookingModal>
            }
        </div>
    );
};

export default Products;