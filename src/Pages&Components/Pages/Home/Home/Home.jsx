import Banner from "../Banner/Banner";
import InfoCarts from "./InfoCarts/InfoCarts";

import backgroundImage from "../../../../assets/images/bg.png";

const Home = () => {
    return (
        <div>
            <div className="" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                 <Banner></Banner>
                <InfoCarts></InfoCarts>
            </div>
        </div>
    );
};

export default Home;