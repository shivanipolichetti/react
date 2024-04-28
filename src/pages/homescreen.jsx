import { useContext, useEffect, useState } from "react";
import Header from "../components/header";
import axios from "axios";
import { Link } from "react-router-dom";
import UseEffectExample from "../functioncomponent/Hooks/useState/useEffect/useffectExample";
import { DataShare } from "../navigation/navigation-stack";
import { Button } from "bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { todoActionAdd } from "../redux/actions/action";
import { reduxStore } from "../redux/store/store";
import { productAction, productActionErr } from "../redux/actions/products-action";


const HomeScreen=()=>{
    const [products,setProducts]=useState([])
    const [todoValue,setTodoValue]=useState("")
    const todos=useSelector(state=>state.todos.todos)
    //console.log(reduxStore)
    const dispatch=useDispatch()
    const {addCartItems}=useContext(DataShare)
    useEffect(()=>{
       fetchProduct()
    },[])

    const fetchProduct=async()=>{
       try{
        const response=await axios.get("https://dummyjson.com/products")
        console.log(response)
        if(response.status===200){
            dispatch(productAction(response.data.products))
            //setProducts(response.data.products)
        }else{
            dispatch(productActionErr())
            //console.error("unexpected error")
        }
       }
       catch(err){
        console.error(err)
       }
    }
    const addTodo=()=>{
        console.log(todoValue)
      dispatch(todoActionAdd(todoValue))
    }
    const inputFunction=(event)=>{
        setTodoValue(event.target.value)
    }
    return(
        <>
        <Header/>
       <h1>Welcome to Home Screen</h1>
      <input type="text" value={todoValue}
      onChange={inputFunction}
      />
            <button onClick={addTodo}>Add todo</button>
            {
            todos.map(todo=>
            <>
            <h3>{todo}</h3>
            </>)
            }
      <UseEffectExample/>
       {
           products.length>0
           ?
           <>
           {
               products.map(eachProduct=>{
                     const {brand,price,description,title,category,thumbnail,id}=eachProduct
                   return(
                       <>
                         <h1>{title}</h1>   
                         <img src={thumbnail} width={200}/>
                         <h5>{description}</h5>
                         <h5>{brand}</h5>
                         <h5>{category}</h5>
                         <h6>${price}</h6>
                         <button>
                          <Link to={`${brand}/${id}`}>
                          Click to see  Product
                          </Link>
                           </button>
                           <button onClick={()=>addCartItems(eachProduct)}>Add to cart</button>
                       </>
                   )
               })
           }
           </>
           :
           <h3>Loading......</h3>
       }
       </>
       
    )
}
export default HomeScreen;