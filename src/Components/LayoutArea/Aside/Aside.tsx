import { NavLink } from "react-router-dom";
import "./Aside.css";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";

function Aside(): JSX.Element {
    return (
        <div className="Aside">

            
      

            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/employees">Employees</NavLink>


            <TotalProducts />

            
        </div>
    );
}

export default Aside;
