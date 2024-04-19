import { useState } from "react";


const ControlledEx=()=>{
   const [login,setLogin]=useState(false)
   const [data,setData]=useState(null)
   const [formError,setFormError]=useState({
    usernameErr:null,
    passwordError:null
   })
    const [form,setForm]=useState(
        {
            username:null,
            password:null
        }
    )
    //this function is filed validate and control state
    const onChangeHandler=(event)=>{
        const {value,name}=event.target
        console.log(value,name)
        setForm(prevState=>({
            ...prevState,[name]:value
        }))
       
        {/*switch(name){
            case "username":
                if(value.length>6){
                 setFormError(
                    {...formError,usernameErr:"enter name less than 6"}
                   )
                }
                break
                default:
                    setFormError(
                        {...formError,usernameErr:null}
                    )
                    break
        }           
       
    */}
}
     //this function is to collect user credentials
     const handlerSubmit=(event)=>{
        event.preventDefault()
        const {username,password}=form
        console.log(username)
        console.log(password)
         const userDetails={
            username:username,
            password:password,
            expiresInMins: "30"
            //id:Math.random()
         }
         loginHitApi(userDetails)
         console.log(userDetails)
    }
    //this function is to hit the server
    const loginHitApi=async(userInfo)=>{
       const result=await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo)
          })
          
const result1=await result.json()

if(result1.message){
    setLogin(false)
    alert("Invalid credentials")
}
else{
    setLogin(true)
    alert(`Welcome ${result1.username}`)
    setData(result1)
}
console.log(result1)
   }
    return(
        <form onSubmit={handlerSubmit}>
            <label>UserName</label>
            <input type="text"
            value={form.username}
            name="username"
            onChange={onChangeHandler}/>
            {formError.usernameErr && <span style={{color:"red"}}>Invalid username</span>}
            <label>Password</label>
            <input type="password"
            value={form.password}
            name="password"
            onChange={onChangeHandler}/>
            <input type="submit"/>
            {
                login?
                <h1>Welcome ${data.username}</h1>
                :
                <h1>Invalid data</h1>
            }
        </form>
    )
}
export default ControlledEx;