import Banner from "../Banner/Banner";
import BestSeller from "../Best Seller/BestSeller";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";
import Section2 from "../Section2/Section2";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <BestSeller></BestSeller>
            <Section2></Section2>
            <Category></Category>
        </div>
    );
};

export default Home;