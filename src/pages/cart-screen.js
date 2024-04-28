import { useContext } from "react";
import Header from "../components/header";
import { DataShare } from "../navigation/navigation-stack";
import { useSelector } from "react-redux";



const CartScreen=()=>{
   
    const reduxStore=useContext(DataShare)
    console.log(reduxStore)
    return(
        <>
        <Header/>
        <h4>Cart Page</h4>
    
       
        {/*
            cartItems.length>0
            ?
            <>
            {
                cartItems.map(eachCart=>{
                    const {id,thumbnail,title,brand}=eachCart
                    return(
                        <>
                        <h5>{title}</h5>
                         <img src={thumbnail} width={200}/>
                        <h5>{brand}</h5>  
                        <button>Remove Cart Item</button>                    
  </>
                    )
                })
            }
            
            </>
        :
        <h4>Cart is empty</h4>
        */}
        </>
    )
}
export default CartScreen;