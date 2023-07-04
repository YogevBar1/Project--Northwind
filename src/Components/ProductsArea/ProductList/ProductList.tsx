import { useEffect, useState } from "react";
import "./ProductList.css";
import productsService from "../../../Services/ProductsService";
import ProductModel from "../../../Models/productModel";

function ProductList(): JSX.Element {

    // let frontendProducts =[];
    const [frontendProducts, setFrontedProducts] = useState<ProductModel[]>([]);


    useEffect(() => {

        // Get products
        productsService.getAllProducts()
            .then(backendProducts => setFrontedProducts(backendProducts))
            .catch(err => alert(err.message));


    }, []);

    return (

        <div className="ProductList">


            {/* {frontendProducts.map(p => <span key={p.id}>{p.name} 📦</span>)} */}

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        frontendProducts.map(p =>
                            <tr key={p.id}>
                                <td>{p.name}</td>
                                <td>{p.price.toFixed(2)} ₪</td>
                                <td>{p.stock}</td>
                                <td>
                                    <img src={p.imageUrl} />
                                </td>
                            </tr>

                        )
                    }
                </tbody>
        </table>


        </div >
    );
}

export default ProductList;
