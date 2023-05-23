import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const AllToys = () => {
    const [alltoys, setAlltoys] = useState([]);

    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setAlltoys(data));
    }, [])
    return (
        <div className="mt-4">
            <div className="text-center">
                
                <h2 className="text-5xl">ALL TOYS </h2>
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    alltoys.map(alltoy => <ToyCard
                        key={alltoy._id}
                        alltoy={alltoy}
                    ></ToyCard>)
                }
            </div>
            </div>
    );
};

export default AllToys;
