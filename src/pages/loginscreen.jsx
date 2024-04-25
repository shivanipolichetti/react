import { useContext } from "react";
import Header from "../components/header";
import { DataShare } from "../navigation/navigation-stack";


const LoginScreen=()=>{
    const {data,changeLogin}=useContext(DataShare)
    return(
        <>
        <Header/>
        <h1>Welcome to Login Screen {data.name}</h1>
        <button onClick={changeLogin}>Click to Login</button>
        </>
    )
}
export default LoginScreen;