import { Component } from "react";
import Counter from "./counter";

class Button extends Component{
    state={
        isSubscribe:false,
        text1:"Subscribe",
        text2:"Subscribed"
      }
      changeSubscribe=()=>{
        console.log("clicked");
        this.setState(
              {
                isSubscribe:!this.state.isSubscribe
               }
        )
      }
    render(){
        return(
            <div>
                <button style={{color:this.state.isSubscribe?"red":"green"}} onClick={this.changeSubscribe}>{this.state.isSubscribe?this.state.text1:this.state.text2}</button>
                {
                    this.state.isSubscribe?
                    <>
                    <h3>Welcome user</h3>
                    <Counter/>
                    </>
                    :
                    <h3>Please subscribe to seee the content</h3>
                }
            </div>
        )
    }
}
export default Button;