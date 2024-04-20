import { useEffect, useState } from "react"


const UseEffectEx2=()=>{
    const [count,setCount]=useState(1)
    useEffect(()=>{
        //dom manipulation
        document.title=`Count ${count}`
    },[count])
    const incrementCount=()=>{
        setCount(count+1)
    }
    return(
        <>
        <h1>UseEffect Example2</h1>
        <h3>Current count:{count}</h3>
        <button onClick={incrementCount}>Click to change count</button>
        </>
    )
}
export default UseEffectEx2