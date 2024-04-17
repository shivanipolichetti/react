import { useState } from "react";
import { useRef } from "react";


const UncontrolledInput=()=>{
    const userNameRef=useRef("")
    const passwordRef=useRef("")
    const [errorVisible,setErrorVisible]=useState(false)
    const handleSubmit=(event)=>{
        event.preventDefault()
        const userInput=userNameRef.current.value
        const passwordInput=passwordRef.current.value

         if(userInput.length<5 && passwordInput.length<5){
            setErrorVisible(true)
            //alert("username must be greater than 5 characters")
         }
         else{
            setErrorVisible(false)
            console.log("user submitted")
         }
    
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
  <div className="mb-3 mt-3">
    <label htmlFor="email">Email:</label>
    <input
      type="text"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
      ref={userNameRef}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="pwd">Password:</label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
      ref={passwordRef}
    />
  </div>
  {errorVisible && <span style={{color:"red"}}>username & password must be greater than 5 characters</span>}
  <div className="form-check mb-3">
    {/*<label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" />{" "}
      Remember me
    </label>*/}
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
        </div>
    )
}
export default UncontrolledInput;