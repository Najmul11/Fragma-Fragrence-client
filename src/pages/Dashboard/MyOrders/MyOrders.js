import React,{useContext} from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Order from './Order';
import { useQuery } from '@tanstack/react-query';


const MyOrders = () => {
    const {user}=useContext(AuthContext)
    const {data:orders=[], isLoading}=useQuery({
        queryKey:['orders'],
        queryFn:async()=>{
            const res=await fetch(`https://new-folder-najmul11.vercel.app/orders?email=${user?.email}`)
            const data= await res.json()
            return data
        }
    })
    if (isLoading) {
        return <div className='flex justify-center h-screen items-center'><progress className="bg-orange-500 progress w-56 "></progress></div>
    }
    return (
        <div className='dark:bg-black '>
            <h2 className="text-4xl fint-light dark:text-gray-400 mb-10">My orders</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    orders.map(order=><Order key={order._id} order={order}></Order>)
                }
            </div>
        </div>
    );
};

export default MyOrders;