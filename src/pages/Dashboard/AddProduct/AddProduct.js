import React, { useEffect, useState , useContext} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'
import Loader from '../../Shared/Loader/Loader';




const AddProduct = () => {
    const [isLoading, setIsLoading]=useState(false)
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [categories, setCategoris]=useState([])

    const imageHostKey=process.env.REACT_APP_imagebb_api

    useEffect(()=>{
        axios.get('https://new-folder-najmul11.vercel.app/categories')
        .then(res=>setCategoris(res.data))
    },[])

    const handleAddProduct=(data)=>{
        setIsLoading(true)
        const image=data.productImage[0]
        const formData=new FormData()
        formData.append('image', image)
        const url =`https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(imgData=>{
            if (imgData.success) {

                const product={
                    categoryName:data.category,
                    productName:data.productName,
                    resalePrice:data.resalePrice,
                    originalPrice:data.originalPrice,
                    juiceLeft:data.juiceLeft,
                    bottleSize:data.bottleSize,
                    location:data.location,
                    usingTime:data.usingTime,
                    sellerName:user?.displayName,
                    productImage:imgData.data.url,
                    sellerEmail:user?.email
                }

                fetch('https://new-folder-najmul11.vercel.app/products',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json',
                    },
                    body:JSON.stringify(product)
                })
                .then(response=>response.json())
                .then(result=>{
                    toast.success(`${data.productName} is added successfully`)
                    navigate('/dashboard/myproducts')
                    setIsLoading(false)
                })
            }
        })

    }
    return (
        <div className='h-[800px] flex justify-center  dark:bg-black'>
            <div className='w-96 p-7 '>
                <h2 className='text-4xl mb-5 font-light dark:text-gray-400'>Add Product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text dark:text-gray-400">Select category</span>
                        </label>
                        <select className="select select-bordered select-sm w-full max-w-xs" {...register('category', {required: "Category is required"}) }>
                            {
                                categories.map(category=><option key={category._id}>{category.categoryName}</option>)
                            }
                        </select>
                        {errors.category && <p className='text-red-600 my-1'>{errors.category?.message}</p>}

                        <input type="text" placeholder="Product name" className="input input-bordered h-10 w-full max-w-xs mt-2"{...register('productName', {required: "Product name is required"}) } />
                        {errors.productName && <p className='text-red-600 my-1'>{errors.productName?.message}</p>}

                        <input type="text" placeholder="Selling price" className="input input-bordered h-10 w-full max-w-xs mt-2"{...register('resalePrice', {required: "Selling price is required"}) }/>
                        {errors.resalePrice && <p className='text-red-600 my-1'>{errors.resalePrice?.message}</p>}

                        <input type="text" placeholder="Original Price" className="input input-bordered h-10 w-full max-w-xs mt-2"{...register('originalPrice', {required: "Original price is required"}) }  />
                        {errors.originalPrice && <p className='text-red-600 my-1'>{errors.originalPrice?.message}</p>}

                        <input type="text" placeholder="Juice left" className="input input-bordered h-10 w-full max-w-xs mt-2"{...register('juiceLeft', {required: "Juice left is required"}) }  />
                        {errors.juiceLeft && <p className='text-red-600 my-1'>{errors.juiceLeft?.message}</p>}

                        <input type="text" placeholder="Bottle size" className="input input-bordered h-10 w-full max-w-xs mt-2"{...register('bottleSize', {required: "Bottle size is required"}) }/>
                        {errors.bottleSize && <p className='text-red-600 my-1'>{errors.bottleSize?.message}</p>}

                        <input type="text" placeholder="Location" className="input input-bordered h-10 w-full max-w-xs mt-2"{...register('location', {required: "Location  is required"}) }/>
                        {errors.location && <p className='text-red-600 my-1'>{errors.location?.message}</p>}

                        <input type="text" placeholder="Using time" className="input input-bordered h-10 w-full max-w-xs mt-2"{...register('usingTime', {required: "Using time  is required"}) }/>
                        {errors.usingTime && <p className='text-red-600 my-1'>{errors.usingTime?.message}</p>}

                        <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs mt-2" {...register('productImage', {required: "Image is required"}) } />
                        {errors.productImage && <p className='text-red-600 my-1'>{errors.productImage?.message}</p>}


                        <button className='py-2 mt-3 font-medium flex justify-center bg-orange-400 rounded-xl duration-300 hover:text-white dark:hover:text-black dark:text-white cursor-pointer'>
                           {isLoading ? <Loader></Loader> : 'Add product'}
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct