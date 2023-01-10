import React from 'react';
import { TailSpin} from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='font-bold text-white'>
            <TailSpin
            height="24"
            width="80"
            color="black"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass="font-bold"
            visible={true}
        />
        </div>
    );
};

export default Loader;