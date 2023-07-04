import { NavLink } from "react-router-dom";
import "./Aside.css";

function Aside(): JSX.Element {
    return (
        <div className="Aside">

            
      

            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/employees">Employees</NavLink>

            
        </div>
    );
}

export default Aside;
