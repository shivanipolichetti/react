import { Component } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import "./index.css";

class ProductList extends Component{
    state={
        products:[]
    }

    deletecard=(index)=>{
        const newCard=this.state.products.filter((eachObject,i)=>i!==index)
        console.log(newCard)
        this.setState(
            {
                products:newCard
            }
        )

    }
    
    
    componentDidMount(){
       this.fetchData()
    }
    /*fetchData=()=>{
        fetch("https://dummyjson.com/products")
        .then(response=>response.json())
        .then(response=>console.log(response))
    }*/
    fetchData=async()=>{
        /*let result=await fetch("https://dummyjson.com/products")
        let result1=await result.json()
        console.log(result1)*/
        //axios
        const result=await axios.get("https://dummyjson.com/products")

        console.log(result)
       this.setState({
        products:result.data.products
       })
    
    }
    
    render(){
        console.log(this.state.products, "log render")
        return(
            <>
            <h4>Product Listing</h4>
           {
            this.state.products.length>0
            ?
            <div className="productlist">
            {
                this.state.products.map((eachObject,index)=>{
                    const{title,thumbnail,category,description,price}=eachObject
                    return(
                        <div className="cardform">
                        <h4>{title}</h4>
                        <img src={thumbnail} alt={title} width={80}></img>
                        <h6>{description}</h6>
                        <h6>{category}</h6>
                        <h6>${price}</h6>
                        <button onClick={()=>this.deletecard(index)}>delete</button>
                        </div>
                    )
                })
            }
            </div>
            :
            <Spinner/>
           }
             
            
            </>
        )
    }
}
export default ProductList;