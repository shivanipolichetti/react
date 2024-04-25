import { useEffect, useState } from "react"



const UseEffectExample=()=>{
    const [X,setX]=useState(0)
    const [Y,setY]=useState(0)
    useEffect(()=>{
        const mouseMoveCapture=(event)=>{
            setX(event.clientX)
            setY(event.clientY)  
          console.log(event.clientX ,"event captured by x-axios")
           console.log(event.clientY,"event captured by y-axios")    
        }
        window.addEventListener("mousemove",(event)=>{
        return()=>{

            window.removeEventListener("mousemove",mouseMoveCapture)
        }
    })
    },[])
    return(
        <>
        <h4>UseEffect Example</h4>
        <h5>X axios coordinates {X}</h5>
        <h5>Y axios coordinates {Y}</h5>
        </>
    )
}
export default UseEffectExample