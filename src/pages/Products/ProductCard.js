import React from 'react';
import { BsCheckAll} from "react-icons/bs";

const ProductCard = ({product, setProductData}) => {

    const {
        productName,
        productImage,
        originalPrice, 
        resalePrice, 
        usingTime,
        bottleSize,
        juiceLeft,
        sellerName,
        location,
        status 
    }=product

    return (
        <div className="card  bg-base-100 dark:bg-black dark:bg-opacity-10 shadow-xl dark:text-gray-400">
            <figure className="px-10 pt-10">
                <img src={productImage} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{productName}</h2>
                <p className='font-medium'>Juice left: <span className='text-lg'>{juiceLeft}</span></p>
                <p className='font-medium'>Resale price: <span className='text-2xl'>${resalePrice}</span></p>
                <p>Original price: <span className='text-lg'>${originalPrice}</span></p>
                <p>Bottle size: {bottleSize}</p>
                <p>Times used: {usingTime}</p>
                <p className=' flex items-center'>Posted by 
                    <span className='bg-gray-200 bg-opacity-75 rounded-lg px-2 mx-2 font-light flex items-center dark:text-black'> 
                        {sellerName}
                        {status==='verified'? <span className='text-2xl text-blue-700'><BsCheckAll/></span>:''}
                    </span>
                </p>
                <p>Location: {location}</p>
                <div className="card-actions justify-center mt-3">
                    <label onClick={()=>setProductData(product)} htmlFor="booking-modal" className="px-5 py-2 font-medium border border-orange-500 hover:bg-orange-400 rounded-xl duration-300 dark:border-gray-200 dark:hover:text-black">BOOK NOW</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;