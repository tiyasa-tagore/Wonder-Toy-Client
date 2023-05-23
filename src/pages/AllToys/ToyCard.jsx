import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ToyCard = ({ toy }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, name, sellerName, subCategory, price, availableQuantity, description, pictureUrl } = toy;


    
    return (
        <div className="card w-96 bg-base-100 shadow-xl lg:grid-cols-3 md:grid-cols-2">
            <figure className="px-10 pt-10">
                <img src={pictureUrl} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Car name: {name}</h2>
                <h2 className="card-title">Seller: {sellerName}</h2>
                <h2 className="card-title">Sub-Category: {subCategory}</h2>
                <h2 className="card-title"> Quantity:{availableQuantity}</h2>
                <h2 className="card-title">Description: {description}</h2>
                <p className="text-xl text-orange-500">Price: ${price}</p>
                <div className="card-actions">
                    <Link to={`/addatoy/${_id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                    <Link to={`/toydetails/${_id}`}>
                        <button className="btn btn-primary">View deatils</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;