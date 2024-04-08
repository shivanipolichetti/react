import { Component } from "react";


class Counter extends Component{
    state={
        count:0
    }
    incrementCount=(event)=>{
        console.log(event)
        this.setState(
            {
               count: this.state.count+event
            }
        )
    }
    decrementCount=()=>{
        if(this.state.count>0){
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

                <h3>Counter example</h3>
                <h3>{this.state.count}</h3>
                <button onClick={()=>this.incrementCount(1)}>Increment</button>
                <button onClick={()=>this.incrementCount(10)}>Increment by 10</button>
                <button onClick={this.decrementCount}>Decrement</button>
                <button onClick={this.resetCount}>Reset</button>
            </div>
        )
    }
}

export default Counter;