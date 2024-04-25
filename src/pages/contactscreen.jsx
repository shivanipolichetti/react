import { useContext } from "react";
import Header from "../components/header";
import { DataShare } from "../navigation/navigation-stack";
import UseReducerExample from "../functioncomponent/Hooks/useState/useReducer/useReducer";


const ContactScreen=()=>{
    const {data,changeData}=useContext(DataShare)
    return(
       <>
       <Header/>
       <UseReducerExample/>
       <h1>Welcome to Contact Screen {data.name}</h1>
       <button onClick={changeData}>Click to change the name</button>
       </>
    )
}
export default ContactScreen;