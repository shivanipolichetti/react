import { Component, PureComponent } from "react";

class ChildComponent extends PureComponent{
    render(){
        console.log("rendering the child")
        return(
           <div>
            <h1>Child</h1>
           </div>
        )
    }
}
export default ChildComponent;