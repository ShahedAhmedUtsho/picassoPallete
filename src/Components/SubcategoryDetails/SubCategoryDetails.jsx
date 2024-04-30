import React from 'react';
import { useParams } from 'react-router-dom';

const SubCategoryDetails = () => {
    const data = useParams()
    console.log(data)
    
    return (
        <div>
            subcategory
            
        </div>
    );
};

export default SubCategoryDetails;