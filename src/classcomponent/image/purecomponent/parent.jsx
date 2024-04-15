import { Component } from "react";
import ChildComponent from "./child";

class ParentComponent extends Component{
    state={
        count:0
    }

    incrementCount=(value)=>{
        this.setState(
            {
                count:this.state.count+value
            }
        )
    }
    decrementCount=()=>{
        if(this.state.count>=0){
        this.setState(
            {
                count:this.state.count-1
            }
        )
    }
    }
    resetCount=()=>{
        this.setState(
            {
                count:0
            }
        )
    }
    render(){
        return(
            <div>
            <h1 style={{color:this.props.Color}}>{this.state.count}</h1>
           <button onClick={()=>this.incrementCount(1)}>Increment</button>
           <button onClick={()=>this.incrementCount(10)}>Increment by 10</button>
           <button onClick={this.decrementCount}>Decrement</button>
           <button onClick={this.resetCount}>Reset</button>
           <ChildComponent count={this.state.count}/>
           </div>

        )
    }
}
export default ParentComponent;