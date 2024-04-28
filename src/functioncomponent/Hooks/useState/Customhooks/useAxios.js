import axios from "axios"
import { useEffect, useState } from "react"

const endPoint="https://randomuser.me/api/?gender=female"
const useAxios=(url=endPoint)=>{
   const [data,setData]=useState([])
    useEffect(()=>{
        axios.get(url)
        .then(response=>{
            console.log(response)
setData(response.data)
        })
    },[])
    return [data]
}
export default useAxios;