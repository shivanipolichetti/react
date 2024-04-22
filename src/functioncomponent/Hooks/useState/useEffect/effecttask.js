import axios from "axios";
import { useEffect, useState } from "react";


const TaskUseEffect=()=>{
    const [eachProduct,setEachProduct]=useState({})
    const [productlisting,setProductListing]=useState([])
    const [count,setCount]=useState(1)
    useEffect(()=>{
         productsFetch()
    },[])
    const incrementButton=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        eachProductFetch()
    },[count])
    const eachProductFetch=async()=>{
        const response=await axios.get(`https://dummyjson.com/products/${count}`)
        setEachProduct(response.data)
        console.log(response)
    }
    const productsFetch=async()=>{
        const response=await axios.get("https://dummyjson.com/products")
        setProductListing(response.data.products)
        console.log(response)
    }
  

    return(
       <>
       <h1>Click on each button to see its details</h1>
       {
        productlisting.map((val,index)=>{
            return(
                <button onClick={()=>incrementButton(index+1)} key={index}>{index+1}</button>
            )
        })
       }
       {
        <div style={{textAlign:"center",}}>
            <h1>{eachProduct.title}</h1>
            <img src={eachProduct.thumbnail}/>
            <h3>{eachProduct.description}</h3>
            <h5>{eachProduct.category}</h5>
            <h5>${eachProduct.price}</h5>
        </div>
       }
       
       </>
    )
}
export default TaskUseEffect;