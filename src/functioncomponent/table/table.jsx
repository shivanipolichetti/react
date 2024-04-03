
import App from "../../App";
import ArrayObjects from "./data";
import { Row } from "./row";

const TableComponent=()=>{
   return(
    <>
     <table border="2">
        <tbody>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
    {
        ArrayObjects.map(eachArray=>{
           return(
            <tr>
            <Row data={eachArray} extra={"submitted"}/>
        </tr>
           )
        })
    }
  
  </tbody>
</table>
</>
   )
}

export default TableComponent;