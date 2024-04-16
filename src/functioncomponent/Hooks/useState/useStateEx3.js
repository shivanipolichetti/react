import { useState } from "react"


const UseStateEx3=()=>{
    const [timer,setTimer]=useState(100)

    const startTimer=()=>{
        setInterval(()=>{
            setTimer(prevTimer=>prevTimer-1)
        },1000)
    }
    return(
        <>
        <h1>Timer</h1>
        <button onClick={startTimer}>Start Timer</button>
        <h4 style={{color:timer<=10?"red":"black"}}>{timer}</h4>
        {
            timer<=10&&<h4>Exam is above to end</h4>
        }
        </>
    )
}
export default UseStateEx3;