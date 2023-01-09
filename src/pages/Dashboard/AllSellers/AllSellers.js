import { useQuery } from '@tanstack/react-query';
import React,{useState} from 'react';
import useDelete from '../../../hooks/useDelete';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import { toast } from 'react-hot-toast';

const AllSellers = () => {
    const handleDelete=useDelete()

    const [modalData, setModalData]=useState(null)

    const {data:sellers=[], refetch, isLoading}=useQuery({
        queryKey:['sellers'],
        queryFn:async()=>{
            const res=await fetch('https://new-folder-najmul11.vercel.app/sellers')
            const data= await res.json()
            return data
        }
    })
    if (isLoading) {
        <div className='flex justify-center h-screen items-center'><progress className=" progress w-56 "></progress></div>
    }

    const handleVerify=(email)=>{
        fetch(`https://new-folder-najmul11.vercel.app/verifyseller/${email}`,{
            method:'PUt',
        })
        .then(res=>res.json())
        .then(data=>{})
    }

    const closeModal=()=>{
        setModalData(null)
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <h2 className='text-2xl font-medium italic mb-5 text-black'>All Sellers</h2>
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
                            sellers.map((seller, i)=>
                            <tr  key={seller._id} className="text-black">
                                <th>{i+1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>
                                    <label onClick={()=>setModalData(seller)} htmlFor="confirm-modal" className="btn btn-xs bg-red-200 hover:bg-red-400 text-black">Delete</label>
                                    <button onClick={()=>handleVerify(seller.email)} className="btn ml-3 btn-xs bg-green-200 hover:bg-green-300 text-black">Verify</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
            //    whole seller info as modalData
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

export default AllSellers;