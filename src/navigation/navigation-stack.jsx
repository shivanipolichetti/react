import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HomeScreen from "../pages/homescreen";
import ContactScreen from "../pages/contactscreen";
import InvalidScreen from "../pages/inavlidscreen";
import ProductDeatils from "../pages/productdetails";
import { createContext, useState } from "react";
import LoginScreen from "../pages/loginscreen";


export const DataShare=createContext()
const NavigationStack=()=>{
    const [login,setLogin]=useState(false)
    const [data,setData]=useState({
        name:"sai",
        city:"hyderabad",
        isIndian:true,
        mobile:67859024
    })
    const changeData=()=>{
        setData({...data,name:"sri"})
    }

    const changeLogin=()=>{
        setLogin(true)
    }
    return(
     <DataShare.Provider value={{
        data,
        changeData,
       changeLogin
     }}>  
    <BrowserRouter>
    {
        login
        ?
    <Routes>
    <Route path="/" Component={HomeScreen}/>
    <Route path="contact" Component={ContactScreen}/>
    <Route path=":brand/:productId" Component={ProductDeatils}/>
    <Route path="*" Component={InvalidScreen}/>
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



