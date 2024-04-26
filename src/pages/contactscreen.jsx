import { useContext } from "react";
import Header from "../components/header";
import { DataShare } from "../navigation/navigation-stack";
import UseMemo from "../functioncomponent/Hooks/useState/useMemo/useMemoEx";
import ParentComponent from "../functioncomponent/Hooks/useState/useCallback/parent";


const ContactScreen=()=>{
    const {data,changeData}=useContext(DataShare)
    return(
       <>
       <Header/>
       {/*<UseMemo/>*/}
       <ParentComponent/>
       </>
    )
}
export default ContactScreen;