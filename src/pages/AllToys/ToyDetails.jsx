import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ToyDetails = () => {
    const { id } = useParams(); // Get the id from the URL parameters
    const [alltoys, setAlltoys] = useState([]); // Initialize the toy state


    // Fetch the toy data when component mounts
    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-tiyasa-tagore.vercel.app/cars/${id}`) 
            .then(res => res.json())
            .then((data) => setAlltoys(data))
    })

    return (
        <div className='m-20'>
            <h1 className='text-3xl'>{alltoys.name}</h1>
            <img src={alltoys.pictureUrl} alt={alltoys.name} />
            <p>Seller: {alltoys.sellerName}</p>
            <p>Sub-Category: {alltoys.subCategory}</p>
            <p>Quantity: {alltoys.availableQuantity}</p>
            <p>Description: {alltoys.description}</p>
            <p>Price: ${alltoys.price}</p>
        </div>
    );
};

export default ToyDetails;
