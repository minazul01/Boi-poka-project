import { Outlet } from "react-router-dom";
import Navbar from "./HeaderComponent/Navbar";
import Footer from "./Footer/Footer";


const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;