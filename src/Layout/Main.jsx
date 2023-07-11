import { Outlet } from "react-router-dom";
import Navber from "../pages/Home/Navber/Navber";
import Footer from "../pages/Home/Footer/Footer";



const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;