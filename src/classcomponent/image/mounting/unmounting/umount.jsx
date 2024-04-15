import { isVisible } from "@testing-library/user-event/dist/utils";
import { Component } from "react";




class Unmounting extends Component{
    state={
        isVisible:true
    }
    changeHandler=()=>{
        this.setState(
            {
                isVisible:!this.state.isVisible
            }
        )
    }

    render(){
        return(
            <>
            <h3>Unmount Example</h3> 
            <button onClick={this.changeHandler}>Click to remove visible</button>{
                this.state.isVisible?
                <Child/>
                :
                <h5>No child found</h5>
            }       
   </>
        )
    }
}
export default Unmounting;

class Child extends Component{
    componentWillUnmount(){
        alert("unmount");
    }
    render(){
        return(
            <h5>Child</h5>
        )
    }
}
