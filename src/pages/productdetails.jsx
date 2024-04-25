import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductDeatils=()=>{
    const {productId}=useParams()
    const [product,setProduct]=useState({})
    useEffect(()=>{
        fetchProduct()
    },[productId])
    const fetchProduct=async()=>{
        try{
            const response=await axios.get("https://dummyjson.com/products/1")
            if(response.status===200){
                setProduct(response.data)
            }
        }
        catch(err){
            console.error(err)
        }    
    }
    //console.log(dynamicContent,"Step 1")
    
    return(
    <>
    <h1>Products Details</h1>
        {
            <>
            <h5>{product?.brand}</h5>
            <h5>{product.title}</h5>
            <img src={product.thumbnail}/>
            <h5>{product?.description}</h5>
             <h5>{product.category}</h5> 
             <h5>${product.price}</h5>
              </>
        }
    
    
    
    </>
    )
}
export  default ProductDeatils;