import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/homescreen";
import ContactScreen from "../pages/Contact";
import InvalidScreen from "../pages/Invalidscreen";
import ProductDetails from "../pages/productdeatils";
import LoginScreen from "../pages/login-screen";
import { useState } from "react";


const NavigationStack=()=>{
    const [login,setLogin]=useState(false)
    return(
       <BrowserRouter>
        {
            login
            ?
        <Routes>
       <Route path="/" Component={HomeScreen}/>
       <Route path="/contact" Component={ContactScreen}/>
       <Route path=":brand/:productId" Component={ProductDetails}/>
       //<Route path="*" Component={InvalidScreen}/>
       </Routes>
       :
       <Routes>
       <Route path="/" Component={LoginScreen}/>
       </Routes>
    }
       
       </BrowserRouter>
    )
}
export default NavigationStack;