import Banner from "../Banner/Banner";
import BestSeller from "../Best Seller/BestSeller";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <BestSeller></BestSeller>
            <Category></Category>
        </div>
    );
};

export default Home;