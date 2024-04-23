import { useContext } from "react";
import Header from "../components/header";
import { DataShare } from "../navigation/navigation-stack";


const ContactScreen=()=>{
  const {data,changeData}=useContext(DataShare)
    return(
        <>
          <Header/>
        <h1>Welcome to Contact Screen {data.name}</h1>
        <button onClick={changeData}>Click to change name</button>
        </>
    )
}
export default ContactScreen;