



export const todoActionAdd=(todo)=>{
    const todoAction={
        type:"ADD_TODO",
        payload:todo
    }
    return todoAction
}

export const increaseAction=()=>{
    const todoAction={
        type:"INCREMENT_COUNT"
    }
    return todoAction
}

