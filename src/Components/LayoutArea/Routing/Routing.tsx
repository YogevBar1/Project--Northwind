import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import EmployeeList from "../../EmployeelistArea/EmployeeList/EmployeeList";
import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import Page404 from "../Page404/Page404";
import "./Routing.css";
function Routing(): JSX.Element {
    return (

        <div className="Routing">

            <Routes>

                {/*Home Route: */}
                <Route path="/home" element={<Home />} />

                {/*products Route: */}
                <Route path="/products" element={<ProductList />} />

                {/*about Route: */}
                <Route path="/about" element={<About />} />

                {/*Employee Route: */}
                <Route path="/employees" element={<EmployeeList />} />



                {/*Default Route: */}
                {/* <Route path="/" element={<About />} /> */}
                <Route path="/" element={<Navigate to="/home" />} />

                {/* Page not found */}
                <Route path="*" element={<Page404 />}/>

            </Routes>
        </div>
    );
}

export default Routing;
