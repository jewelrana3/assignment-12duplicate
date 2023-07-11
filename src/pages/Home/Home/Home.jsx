import Banner from "../Banner/Banner";
import Instructor from "./Instructor/Instructor";
import Popular from "./Popular/Popular";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Popular></Popular>
           <Instructor></Instructor>
        </div>
    );
};

export default Home;