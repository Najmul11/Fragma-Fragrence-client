import { useQuery } from '@tanstack/react-query';
import React, {useState} from 'react';
import { toast } from 'react-hot-toast';
import useDelete from '../../../hooks/useDelete';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

const AllBuyers = () => {
    const handleDelete=useDelete()

    const [modalData, setModalData]=useState(null)
    
    const {data:buyers=[], refetch, isLoading}=useQuery({
        queryKey:['buyers'],
        queryFn:async()=>{
            const res=await fetch('http://localhost:5000/users')
            const data= await res.json()
            return data
        }
    })
    if (isLoading) {
        <div className='flex justify-center h-screen items-center'><progress className=" progress w-56 "></progress></div>
    }

    const closeModal=()=>{
        setModalData(null)
    }
    return (
       <div>
             <div className="overflow-x-auto">
            <h2 className='text-2xl font-medium italic mb-5 text-black'>All Buyers</h2>
            <table className="table w-full">
                
                <thead className= 'text-black'>
                <tr>
                    <th className='bg-gray-200'></th>
                    <th className='bg-gray-200'>Name</th>
                    <th className='bg-gray-200'>Email</th>
                    <th className='bg-gray-200'>Action</th>
                </tr>
                </thead>
                <tbody className='text-lack'>
                
                    {
                        buyers.map((buyer, i)=>
                         <tr  key={buyer._id} className="text-black">
                            <th>{i+1}</th>
                            <td>{buyer.name}</td>
                            <td>{buyer.email}</td>
                            <td>
                                <label onClick={()=>setModalData(buyer)} htmlFor="confirm-modal" className="btn btn-xs bg-red-200 hover:bg-red-400 text-black">Delete</label>
                            </td>
                        </tr>)
                    }
            
                </tbody>
            </table>
        </div>
        {
        //    whole buyer info as modalData
            modalData && <ConfirmModal
            title={`Are you sure you want to delete`}
            message={`If you delete ${modalData.name} it can not be undone`}
            handleDelete={handleDelete}
            refetch={refetch}
            toast={toast}
            modalData={modalData}
            closeModal={closeModal}
            >

            </ConfirmModal>
        }
       </div>
    );
};

export default AllBuyers;