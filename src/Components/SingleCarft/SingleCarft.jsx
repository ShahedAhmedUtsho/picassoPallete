import { useLoaderData } from "react-router-dom";


const SingleCarft = () => {
    const carft = useLoaderData();
    console.log(carft)
    return (
        <div>
            this is single carft
            
        </div>
    );
};

export default SingleCarft;