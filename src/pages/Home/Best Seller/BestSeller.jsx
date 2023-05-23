import img6 from '../../../assets/img/car19.jpg'
import img7 from '../../../assets/img/car18.jpg'
import { Link } from 'react-router-dom';

const BestSeller = () => {
    return (
        <div className='m-20 '>
             <h2 className='text-6xl font-bold text-center mt-10'>
                    Best Seller
                </h2>
            <div className='mt-20 grid lg:grid-cols-2'>
            <div className='m-10'>
                <img src={img6} alt="" />
                <p className='text-xl text-center'>With best playing experience.</p>
                <p className='text-xl text-center'>take a chill pill and driveeeeeee..</p>
                
            </div>
            <div  className='m-10'>
                <img src={img7} alt="" />
                <p className='text-xl text-center mt-10'>With best playing experience.</p>
                <p className='text-xl text-center'>take a chill pill and driveeeeeee..</p>
                <Link to="/addatoy">
            <button className="btn mt-20 ml-15 ">Wanna Buy?</button>
            </Link>
            </div>
            </div>
            
           
            
        </div>
    );
};

export default BestSeller;