class AppConfig{
    
    public readonly productsUrl ="http://localhost:3030/api/products/"; //Ending /

    public readonly employeesUrl = "http://localhost:3030/api/employees/"; //Ending /

    public readonly registerUrl ="http://localhost:3030/api/auth/register/";

    public readonly loginUrl = "http://localhost:3030/api/auth/login/";

    public readonly categoriesUrl = "http://localhost:3030/api/categories/";
    
}



//Singleton - one and only object that serv all the app, and you cant make another object fro outside
const appConfig = new AppConfig();

export default appConfig;