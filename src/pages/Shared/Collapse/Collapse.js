import React from 'react';

const Collapse = ({title, description}) => {
    return (
        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-lg mt-2">
            <div className="collapse-title text-xl font-medium dark:bg-gray-300">
                {title}
            </div>
            <div className="collapse-content"> 
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Collapse;