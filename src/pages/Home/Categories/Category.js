import React from 'react';
import {Link} from 'react-router-dom'

const Category = ({category}) => {
    const {categoryName, image,_id, tag}=category
    return (
        <Link to={`/categories/${_id}`}>
            <div className="card w-full shadow-xl image-full my-3">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body ">
                    <h2 className="card-title font-light text-3xl my-3">{categoryName}</h2>
                    <p className=''>{tag}</p>
                </div>
            </div>
        </Link>
    );
};

export default Category;