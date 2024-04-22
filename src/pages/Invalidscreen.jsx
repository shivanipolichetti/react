import { useNavigate } from "react-router-dom";


const InvalidScreen=()=>{
    const navigate=useNavigate()
    const navigateToHome=()=>{
     //functional routing using navigate
     const loginSuccess=true
     if(loginSuccess){
        navigate("/")
     }else{
        console.log("hello")
     }
    
    }
    return(
        <>
        <h1>Invalid Screen</h1>
        <button onClick={navigateToHome}>Back to Home Page</button>
        </>
    )
}
export default InvalidScreen;