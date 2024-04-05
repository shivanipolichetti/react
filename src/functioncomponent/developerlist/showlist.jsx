
import { employees } from "./list";

const ShowList=()=>{
    const filterquery="reactdeveloper";
    const filterArray=(query)=>{
        return employees.filter(value=>value.designation==query&&value.salary==20000)
    }
    return(
        <>
        {
             filterArray("react developer").map(value=><>
            <h4>name:{value.name}</h4>
            <h4>designation:{value.designation}</h4>
            
            </>) 
            
            }



           
        </>
    )
}

export default ShowList;