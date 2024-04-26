import { useMemo, useState } from "react";


const UseMemo=()=>{

    const [age,setAge]=useState(10)
    const [salary,setSalary]=useState(10000)

     const ageEvenCalculation=useMemo(()=>{
         console.log("ageEventCalculation is rendering")
         const even=age%2===0
         return even?"even":"odd"
     },[age])
    /*const ageEvenCalculation=()=>{
        console.log("ageEvenCalculation is rendering")
        const even= age % 2 === 0
        return even ? "EVEN" : "ODD"
    }*/
    const increaseAge=()=>{
        setAge(age+1)
    }
    const increaseSalary=()=>{
        setSalary(salary+1)
    }
    return(
        <>
        <h1>UseMemo Example</h1>
        <h3>Age Calculation :{ageEvenCalculation}</h3>
        <h4>Age:{age}</h4>
        <h4>Salary:{salary}</h4>
        <button onClick={increaseAge}>Age increment</button>
        <button onClick={increaseSalary}>Salary increment</button>
        </>
    )
}
export default UseMemo;