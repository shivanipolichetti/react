import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/homescreen";
import ContactScreen from "../pages/Contact";
import InvalidScreen from "../pages/Invalidscreen";


const NavigationStack=()=>{
    return(
       <BrowserRouter>
       <Routes>
       <Route path="/" Component={HomeScreen}/>
       <Route path="contact" Component={ContactScreen}/>
       <Route path="*" Component={InvalidScreen}/>
       </Routes>
       </BrowserRouter>
    )
}
export default NavigationStack;