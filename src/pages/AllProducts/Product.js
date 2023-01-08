import React from 'react';

const Product = ({p}) => {
    return (
        <div className="card  bg-base-100 shadow-xl dark:text-gray-400 dark:bg-black">
            <figure><img src={p.productImage} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{p.productName}</h2>
                <p className='text-2xl'>{p.resalePrice}</p>
                <div className="card-actions justify-end">
                <label  className="px-5 py-2 font-medium border border-orange-500 hover:bg-orange-400 rounded-xl duration-300 dark:border-gray-200 dark:hover:text-black">Buy now</label>
                </div>
            </div>
        </div>
    );
};

export default Product;