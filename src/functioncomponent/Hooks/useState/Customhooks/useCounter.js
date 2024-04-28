const { useState } = require("react")


const useCounter=(value,scale)=>{
    const [count,setCount]=useState(value)
  
   const incrementCount=()=>{
    setCount(count+scale)
   }
   const decrementCount=()=>{
    setCount(count-scale)
   }
   const reset=()=>{
    setCount(0)
   }
   return [count,incrementCount,decrementCount,reset]

}
export default useCounter;