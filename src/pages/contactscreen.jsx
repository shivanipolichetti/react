import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import useAxios from "../functioncomponent/Hooks/useState/Customhooks/useAxios";
import useCounter from "../functioncomponent/Hooks/useState/Customhooks/useCounter";
import { profileUpdateAction } from "../redux/actions/profile-actions";


const ContactScreen=()=>{
   const [age,incrementAge,decrementAge,resetAge]=useCounter(100,1)
   const [salary,incrementSalary]=useCounter(10000,500)
   const [data]=useAxios("https://randomuser.me/api/") 
   const [femaledata]=useAxios("https://randomuser.me/api/?gender=female")
   const [products]=useAxios("https://fakestoreapi.com/products")
   const profileinfo=useSelector(state=>state.profile)
   console.log(products)
   console.log(femaledata)
   console.log(data)
   const dispatch=useDispatch()
   const profileUpdate=()=>{
        dispatch(profileUpdateAction("kumar"))
   }
   return(
       <>
       <Header/>
       <h1>Profile Information</h1>
       <p>{profileinfo.profileName}</p>
       <p>{profileinfo.age}</p>
       <p>{profileinfo.city}</p>
      <h3>{age}</h3>
      <button onClick={profileUpdate}>update profile name</button>
       <button onClick={incrementAge}>increment Age</button>
       <button onClick={resetAge}>Reset Age</button>
       <h3>{salary}</h3>
   <button onClick={incrementSalary}>increment Salary</button>
    
       </>
    )
}
export default ContactScreen;