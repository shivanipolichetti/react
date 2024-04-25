import { useReducer } from "react"


const  reducerFunction=(state,action)=>{
 switch(action.type){
    case "INCREMENT_AGE":
        return{...state,age:state.age+10}
    case "DECREMENT_AGE":
        return{...state,age:state.age-10}
    case  "RESET_AGE":
        return{...state,age:100}
    case "INCREMENT_COUNT":
        return{...state,count:state.count+1}
    case  "DECREMENT_COUNT":
        return{...state,count:state.count-1}
    case  "CHANGE_NAME":
        return{...state,name:"xyz"}
  case "ADD_TODO":
    return{...state,todos:[...state.todos,"New TODO"]}    
        default:
        return state
    }


}
const initialState={
    name:"abc",
    count:10,
    age:100,
    salary:1000,
    subject:[1,2,4],
    todos:[]
}


const UseReducerExample=()=>{
  const [currentValue,dispatchFunction]=useReducer(reducerFunction,initialState)
   const incrementAge=()=>{
     const action={
        type:"INCREMENT_AGE"
     } 
    
    dispatchFunction(action)
   }
   const decrementAge=()=>{
    const action={
       type:"DECREMENT_AGE"
    } 
   
   dispatchFunction(action)
  }
  return(
     <>
        <h4>UseReducer Example</h4>
        <h5>{currentValue.name}</h5>
        <h5>{currentValue.age}</h5>
        <button onClick={incrementAge}>Increment age</button>
        <button onClick={decrementAge}>Decrement age</button>
        <button>Increment count</button>
       <button>Decrement count</button>
        <button onClick={()=>{
            dispatchFunction({
                type:"CHANGE_NAME"
            })
        }}>Change name</button>
        
        </>
    )
}
export default UseReducerExample;