import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";


const UseStateExample=()=>{
       const [count,setCount]=useState(0)
       //this function is used to handle increment,decrementand reset functionality
       const changeHandler=(value,type)=>{
        //setCount(preCount=>preCount+1)
        //setCount(preCount=>preCount+1)//--to increment with previous count
        //setCount(count+1)--to increment once
        //setCount(count+1)
        //setCount(count+1)
        if(type==="increment"){
            setCount(count+value)
        }
        else if(type==="decrement"){
            setCount(count-value)
        }
        else{
            setCount(0)
        }
       
       }
    return(
        <>
        <h1>Increment count</h1>
        <h1>{count}</h1>
       <button onClick={()=>changeHandler(1,"increment")}>Increment count</button>
       <button onClick={()=>changeHandler(1,"decrement")}>Decrement count</button>
       <button onClick={()=>changeHandler()}>Reset count</button>
        </>

    )
}

export default UseStateExample;