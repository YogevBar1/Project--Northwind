import axios from "axios";
import ProductModel from "../Models/productModel";
import appConfig from "../Utils/AppConfig";

class ProductsService{

    // Get all products from the beckend:
    public async getAllProducts(): Promise <ProductModel[]>{ 
        // Get akk products into response object:
        const response =await axios.get<ProductModel[]>(appConfig.productsUrl);

        // Extract the products from the response:
        const products = response.data;

        // Return products
        return products;
    }
}

const productsService = new ProductsService(); //SingleTon

export default productsService;
