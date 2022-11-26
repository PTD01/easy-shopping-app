import React from 'react';
import { PuffLoader } from 'react-spinners';

const PageLoader = () => {
    return (
        <div className='d-flex justify-content-center align-items-center p-4' >
            <div className='py-3 text-danger h3 text-center' >
                <PuffLoader color='red' size={200} loading={true} />
                Loading ...
            </div>
        </div>
    );
}

export default PageLoader;