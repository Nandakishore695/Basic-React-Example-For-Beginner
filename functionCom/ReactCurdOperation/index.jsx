import React from 'react';
import CurdFormComponent from './CurdForm';
import CurdTableComponent from './CurdTable';

function CurdOperationComponent() {
    return (
        <>
            <div>
                <div className='text-curd'>
                    <h1>React Curd Operation</h1>
                </div>
                <CurdFormComponent />
                <CurdTableComponent/>
            </div>
        </>
    )
}

export default CurdOperationComponent