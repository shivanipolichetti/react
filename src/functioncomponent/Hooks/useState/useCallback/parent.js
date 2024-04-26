import { useCallback, useState } from "react"
import CustomButton from "./cutomButton"
import Heading from "./heading"




const ParentComponent=()=>{
    const [age,setAge]=useState(10)
    const [salary,setSalary]=useState(10000)
    const increaseAge=useCallback(()=>{
        console.log("age")
        setAge(age+1)
    },[age])
   
    const increaseSalary=useCallback(()=>{
        console.log("salary")
        setSalary(salary+1)
    },[salary])
    return(
        <>
        <h3>Parent component useCallback example</h3>
        <Heading/>
        <h3>Age:{age}</h3>
        <h3>Salary:{salary}</h3>
        <CustomButton title="Age increment"  handleClick={increaseAge}/>
        <CustomButton title="Salary increment" handleClick={increaseSalary}/>
        </>
    )
}
export default ParentComponent;