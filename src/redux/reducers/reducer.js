


const initialState={
    todos: ["banana","mango","sapota"],
    count:100
}  

const todoReducer=(state=initialState,action)=>{

    switch(action.type){
        case "ADD_TODO":
            return {...state,todos: [...state.todos,action.payload]}
        case "DELETE_TODO":
            const id=action.payload
        
            case "INCREMENT_COUNT":
                return {...state,count:state.count+1}
    
                default :
                return state
        }
}

export default todoReducer;