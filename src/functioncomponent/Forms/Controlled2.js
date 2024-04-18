import { useState } from "react";


const ControlledEx=()=>{

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
    const onChangeHandler=(event)=>{
        const {value,name}=event.target
        console.log(value,name)
        setForm(prevState=>({
            ...prevState,[name]:value
        }))
       
        switch(name){
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
       
    }
    
   
    const handlerSubmit=(event)=>{
        event.preventDefault()
        {/* const userDetails={
            username:username,
            password:password,
            id:Math.random()
         }
        console.log(userDetails)*/}
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
            <input type="text"
            value={form.password}
            name="password"
            onChange={onChangeHandler}/>
            <input type="submit"/>
        </form>
    )
}
export default ControlledEx;