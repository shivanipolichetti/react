







export const productAction=(data)=>{
    return{
        type:"PRODUCT_SUCCESS",
        payload:data
    }
}
export const productActionErr=(data)=>{
    return{
        type:"PRODUCT_FAILURE",
        payload:"something went wrong"
    }
}