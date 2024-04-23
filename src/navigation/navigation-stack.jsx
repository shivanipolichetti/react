import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/homescreen";
import ContactScreen from "../pages/contact";
import InvalidScreen from "../pages/Invalidscreen";
import ProductDetails from "../pages/productdeatils";
import LoginScreen from "../pages/login-screen";
import { createContext, useState } from "react";


export const DataShare=createContext()

const NavigationStack=()=>{
    const [login,setLogin]=useState(true)
     const [data,setData]=useState(
        {
            name:"sai",
            city:"hyderabad",
            isIndian:true,
            mobile:89807689
            }
     )
     const changeData=()=>{
        setData({...data,name:"ram"})
     }
    
    return(
        <DataShare.Provider value={{
            data,
            changeData,
           
        }}>
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
       </DataShare.Provider>
    )
}
export default NavigationStack;