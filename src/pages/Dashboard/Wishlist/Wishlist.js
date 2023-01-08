import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../contexts/AuthProvider';



const Wishlist = () => {
    const {user}=useContext(AuthContext)

    const {data:wishList=[], isLoading}=useQuery({
        queryKey:['wishList'],
        queryFn:async()=>{
            const res=await fetch(`http://localhost:5000/wishlists/${user?.email}`)
            const data= await res.json()
            return data
        }
    })

    if (isLoading) {
       return <div className='flex justify-center h-screen items-center'>
                <progress className="bg-orange-500 progress w-56 "></progress>
             </div>
    }
    
    return (
        <div className="overflow-x-auto">
        <h2 className='text-2xl font-medium italic mb-5 text-black'>My wishlist</h2>
        <table className="table w-full">
            
            <thead className= 'text-black'>
            <tr>
                <th className='bg-gray-200'></th>
                <th className='bg-gray-200'>Product</th>
                <th className='bg-gray-200'>Price</th>
                <th className='bg-gray-200'>Action</th>
            </tr>
            </thead>
            <tbody className='text-lack'>
            
                {
                    wishList.map((wish, i)=>
                    <tr  key={wish._id} className="text-black">
                        <th>{i+1}</th>
                        <td>{wish.productName}</td>
                        <td className='text-xl'>${wish.resalePrice}</td>
                        <td>
                            <button className="btn btn-xs bg-green-200 hover:bg-green-300 text-black">Buy now</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
    );
};

export default Wishlist;