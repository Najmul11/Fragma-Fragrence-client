import React, { useContext} from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';



const MyProducts = () => {
    const {user}=useContext(AuthContext)



    const {data:products=[], refetch , isLoading}=useQuery({
        queryKey:['products'],
        queryFn:async()=>{
            const res=await fetch(`http://localhost:5000/products?email=${user?.email}`)
            const data= await res.json()
            return data
        }
    })
    if (isLoading) {
        <div className='flex justify-center h-screen items-center'><progress className=" progress w-56 "></progress></div>
    }

    const handleDelete=(id,name)=>{
        fetch(`http://localhost:5000/products/${id}`,{
            method:'DELETE',
           
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.deletedCount >0) {
                refetch()
                toast.success(`${name} deleted successfully`)
            }
        })
    }

    const handleAdvertise=(product)=>{
        fetch('http://localhost:5000/advertisedproducts',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(product)
            })
            .then(res=>res.json())
            .then(data=>{})
    }
  
    return (
         <div className="overflow-x-auto">
                <h2 className='text-2xl font-medium italic mb-5 text-black'>All your products</h2>
                <table className="table w-full">
                    
                    <thead className= 'text-black'>
                    <tr>
                        <th className='bg-gray-200'></th>
                        <th className='bg-gray-200'>Name</th>
                        <th className='bg-gray-200'>Price</th>
                        <th className='bg-gray-200'>Status</th>
                        <th className='bg-gray-200'>Action</th>
                    </tr>
                    </thead>
                    <tbody className='text-lack'>
                    
                        {
                            products.map((product, i)=>
                            <tr  key={product._id} className="text-black">
                                <th>{i+1}</th>
                                <td>{product.productName}</td>
                                <td className='text-2xl'>${product.resalePrice}</td>
                                <td>{product.status}</td>
                                <td>
                                    {
                                        product.status==='unsold' &&
                                        <button onClick={()=>handleAdvertise(product)}  className="btn mr-3 btn-xs bg-green-200 hover:bg-green-400 text-black">Advertise</button>
                                    }
                                    <button onClick={()=>handleDelete(product._id, product.productName)} className="btn btn-xs bg-red-200 hover:bg-red-400 text-black">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default MyProducts;