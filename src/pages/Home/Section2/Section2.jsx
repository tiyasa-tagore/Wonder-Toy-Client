import logo1 from '../../../assets/logo/logo1.png'
import logo2 from '../../../assets/logo/logo2.png'

import logo4 from '../../../assets/logo/logo4.png'
import logo5 from '../../../assets/logo/logo5.png'
import logo6 from '../../../assets/logo/logo6.png'
const Section2 = () => {
    return (
        <div className='m-20 '>
             <h2 className='text-6xl font-bold text-center mt-10'>
                    Licensed Toy Brands
                </h2>

            <div className='m-20  mx-auto  gap-9
            grid lg:grid-cols-6 sm:grid-cols-2'>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
            </div>

                </div>
    );
};

export default Section2;