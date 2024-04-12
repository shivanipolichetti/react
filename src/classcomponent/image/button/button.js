import { Component } from "react";
import Counter from "./counter";

class ButtonComponent extends Component{
    state={
    isSubscribe:false,
    text1:"Subscribed",
    text2:"Subscribe",
    fruits:["apple","mango"]
    }

      changeSubscribe=()=>{
        console.log("clicked")
        this.setState(
            {
                isSubscribe:!this.state.isSubscribe
            }
        )
      }
      addFruit=()=>{
       const newFruit=[...this.state.fruits,"newFruit"]
       //console.log(newFruit);
       this.setState(
        {
            fruits:newFruit
        }
       )

      }
      deleteFruit=(index)=>{
        console.log(index)
        const newFruits=this.state.fruits.filter((eachFruit,i)=>i!==index)
        console.log(newFruits)
        this.setState(
            {
                fruits:newFruits
            }
        )
      }
      updateFruit=(index)=>{
        const newFruits=this.state.fruits.map((eachElement,i)=>{
         if(i===index){
            return "orange"
         }
         else{
            return eachElement
         }
        })
        this.setState(
            {
                fruits:newFruits
            }
        )
        console.log(newFruits)
      }



    
    render(){
        return(
            <div>
                <button style={{color:this.state.isSubscribe?"red":"green"}} onClick={this.changeSubscribe}>{this.state.isSubscribe?this.state.text1:this.state.text2}</button>
                {
                        
                        this.state.isSubscribe?
                        <>
                        <h1>Welcome user</h1>
                        <Counter/>
                        <button onClick={this.addFruit}>Add</button>
                        <ol>{
                            this.state.fruits.map((eachElement,index)=>{
                                return(
                                    <>
                                    <li>
                                      {eachElement}
                                    </li>
                                    <button onClick={()=>this.deleteFruit(index)}>Delete</button>
                                    <button onClick={()=>this.updateFruit(index)}>Update</button>
                                    </>
                                )
                            })
                        }
                        </ol>
                        </>
                        :
                        <h1>Please subscribe</h1>
                       
                }
                
            </div>
        )
    }
    
}
export default ButtonComponent;