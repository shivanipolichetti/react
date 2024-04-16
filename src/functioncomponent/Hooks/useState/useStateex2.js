import { useState } from "react";

const UseSateEx2=()=>{
    const[fruits,setFruit]=useState(["apple","mango"])

    const addFruit=()=>{
        const newFruits=[...fruits,"new fruit"]
        setFruit(newFruits)
    }


    return(
        <>
       <h2>UseState Ex2</h2>
       <button onClick={addFruit}>Add fruit</button>
       {
        fruits.map((value,index)=><h4 key={index}>{value}</h4>)
       }
       </>
    )
}
export default UseSateEx2;