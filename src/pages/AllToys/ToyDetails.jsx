import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ToyDetails = () => {
    const { id } = useParams(); // Get the id from the URL parameters
    const [alltoys, setAlltoys] = useState([]); // Initialize the toy state


    // Fetch the toy data when component mounts
    useEffect(() => {
        fetch('http://localhost:5000/cars') // Path to your JSON file
            .then(res => res.json())
            .then(data => {
                // Find the toy with the matching id
                const matchedToy = data.toys.find(alltoys => alltoys.id === id);
                setAlltoys(matchedToy);
            });
    }, [id]); // Re-fetch when the id changes

    if (!alltoys) {
        return <div>Loading...</div>; // Display a loading message while the data is being fetched
    }

    // Render the toy details
    return (
        <div>
            <h1>{alltoys.name}</h1>
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
