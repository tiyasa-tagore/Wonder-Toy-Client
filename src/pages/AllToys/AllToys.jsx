import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const AllToys = () => {
    const [alltoys, setAlltoys] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setAlltoys(data));
    }, [])

    const filteredToys = alltoys.filter(toy => 
        toy.name.toLowerCase().includes(search.toLowerCase())
      ).slice(0, 20);

    return (
        <div>
            <div className="mt-4">
            <div className="text-center">
                
                <h2 className="text-5xl">ALL TOYS </h2>
                
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
            <div>
      <input 
        type="text" 
        placeholder="Search toys..." 
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{filteredToys.map((toy) => (
        <ToyCard key={toy.id} toy={toy} />
      ))} </div>
      
            </div>
        </div>
        </div>
    );
};

export default AllToys;
