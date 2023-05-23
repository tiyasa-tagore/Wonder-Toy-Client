import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ToyCard = ({ toy }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, name, sellerName, subCategory, price, availableQuantity, description, pictureUrl } = toy;

    return (
        
        <div >
            
            

            <tr >

            
            <td><img src={pictureUrl} alt={name} className="rounded-xl" style={{width: "400px"}}/></td>
            

            <td>{name}</td>
            <td>{sellerName}</td>
            <td>{subCategory}</td>
            <td>{availableQuantity}</td>
            <td>{description}</td>
            <td>${price}</td>
            
                <Link to={`/addatoy`}>
                    <button className="btn btn-primary">Buy Now</button>
                </Link>
                <Link to={`/toydetails/${_id}`}>
                    <button className="btn btn-primary">View Details</button>
                </Link>
            
        </tr>
        </div>
    );
};

export default ToyCard;
