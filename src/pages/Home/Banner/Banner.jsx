import { Link } from 'react-router-dom';
import img1 from '../../../assets/img/car1.jpg'
import img2 from '../../../assets/img/car2.jpg'
import img3 from '../../../assets/img/car3.jpg'
import img4 from '../../../assets/img/car4.jpg'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

const Banner = () => {
    return (
        
       <div>
        <div className='grid lg:grid-cols-2'>
        <div className="carousel w-full h-[600px] m-20">
        <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
    <div className='text-Black space-y-7 pl-12 w-1/2 m-20'>
                <h2 className='text-6xl font-bold'>
                    BE THE RACING PRO
                </h2>
                <p className='text-2xl'>Exciting toy cars at you one tap.Get Your Kid The BEST TOY CAR !!!
                </p>
                <div>
                    <Link to="/alltoys"><button className="btn mr-5">Discover more</button></Link>
                
                
                </div>
                </div>
        </div>
        <div className='m-20'>

        <h3 className="font-bold text-3xl text-center mb-5 ">Shop by Category</h3>

      <Tabs className='text-center '>
        <TabList>
          <Tab>Models</Tab>
          <Tab>Electric Toy Cars</Tab>
          <Tab>Police Cars</Tab>
          <Tab>Jeep Cars</Tab>
        </TabList>
        <TabPanel></TabPanel>
      </Tabs>
       </div>
       </div>
);
};

export default Banner;