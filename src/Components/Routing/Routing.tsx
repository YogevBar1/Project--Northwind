import { Navigate, Route, Routes } from "react-router-dom";
import About from "../AboutArea/About/About";
import EmployeeList from "../EmployeelistArea/EmployeeList/EmployeeList";
import Home from "../HomeArea/Home/Home";
import ProductList from "../ProductsArea/ProductList/ProductList";
import Page404 from "../LayoutArea/Page404/Page404";
import ProductDetails from "../ProductsArea/ProductDetails/ProductDetails";
import AddProduct from "../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../ProductsArea/EditProduct/EditProduct";
function Routing(): JSX.Element {
    return (

        <Routes>

            {/*Home Route: */}
            <Route path="/home" element={<Home />} />

            {/*products Route: */}
            <Route path="/products" element={<ProductList />} />

            {/*about Route: */}
            <Route path="/about" element={<About />} />

            {/*Employee Route: */}
            <Route path="/employees" element={<EmployeeList />} />


            {/*product details Route: */}
            <Route path="/products/details/:prodId" element={<ProductDetails />} />


            {/*Add product: */}
            <Route path="/products/new" element={<AddProduct />} />

            {/*Edit product: */}
            <Route path="/products/edit/:prodId" element={<EditProduct />} />



            {/*Default Route: */}
            {/* <Route path="/" element={<About />} /> */}
            <Route path="/" element={<Navigate to="/home" />} />

            {/* Page not found */}
            <Route path="*" element={<Page404 />} />



        </Routes>
    );
}

export default Routing;
