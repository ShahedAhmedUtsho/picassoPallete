import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCarft = () => {
    const craft = useLoaderData() ;
    console.log(craft)
    return (
        <div>
           this
        </div>
    );
};

export default UpdateCarft;