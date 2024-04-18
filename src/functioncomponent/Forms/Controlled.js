import { useState } from "react";
// only for two or three inputs
const ControlledComponent=()=>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [UsernameErr,setUsernameErr]=useState(null)
    const userNameHandler=(event)=>{
        event.preventDefault()
        const userName=event.target.value
        setUsername(userName)
        if(userName.trim().length>6){
            setUsernameErr("input must not be greater than 6")
        }
        else{
            setUsernameErr(null)
        }
        
    }
    const passwordHandler=(event)=>{
        event.preventDefault()
        const password=event.target.value
        setPassword(password)
  
    }
    const handlerSubmit=(event)=>{
        event.preventDefault()
       //console.log(username)
       //console.log(password)
       const userDetails={
        username:username,
        password:password,
        id:Math.random()
       }
       console.log(userDetails)
    }
    return(
        <form onSubmit={handlerSubmit}>
         <label>UserName</label>
         <input type="text"
         value={username}
         onChange={userNameHandler}
         />
         {UsernameErr&&<span style={{color:"red"}}>Invalid username</span>}
         <label>Password</label>
         <input type="text"
         value={password}
         onChange={passwordHandler}
         />
         <input type="submit"
         />
        </form>
    )
}

export default ControlledComponent;