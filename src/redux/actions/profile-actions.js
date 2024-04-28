import { type } from "@testing-library/user-event/dist/type"




export const profileUpdateAction=(name)=>{
    return{
        type : "UPDATE_USER_NAME",
        payload:name
    }
}