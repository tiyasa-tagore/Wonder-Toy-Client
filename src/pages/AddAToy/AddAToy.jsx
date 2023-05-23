
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const AddAToy = () => {
    // useTitle('Add Toy')

    const { user } = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const sellerName = user?.displayName;
        const sellerEmail= user?.email;
        const name = form.name.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const availableQuantity = form.availableQuantity.value;
        const pictureUrl = form.pictureUrl.value;
        const rating = form.rating.value;
        const description = form.description.value;
      
        const addedToys = {
            sellerName,
            sellerEmail,
            name,
            subCategory,
            price,
            availableQuantity,
            pictureUrl,
            rating,
            description
        }

        console.log(addedToys);

        fetch('https://b7a11-toy-marketplace-server-side-tiyasa-tagore.vercel.app/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Toy is added successfully')
                }
            })

    }
    return (
        <div className='max-w-lg mx-auto'>
            <h2 className='text-center text-5xl font-bold  mb-9'>Add Toy </h2>
            <form onSubmit={handleAddToy}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller</span>
                        </label>
                        <input type="text" name="sellerName" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="sellerEmail" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subcategory</span>
                        </label>
                        <input type="text" name="subCategory" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" name="availableQuantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture URL</span>
                        </label>
                        <input type="text" name="pictureUrl" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" name="rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description"  className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-block" type="submit" value="Add Toy" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default AddAToy;