import Header from "../components/header";
import useAxios from "../functioncomponent/Hooks/useState/Customhooks/useAxios";
import useCounter from "../functioncomponent/Hooks/useState/Customhooks/useCounter";


const ContactScreen=()=>{
   const [age,incrementAge,decrementAge,resetAge]=useCounter(100,1)
   const [salary,incrementSalary]=useCounter(10000,500)
   const [data]=useAxios("https://randomuser.me/api/") 
   const [femaledata]=useAxios("https://randomuser.me/api/?gender=female")
   const [products]=useAxios("https://fakestoreapi.com/products")
   console.log(products)
   console.log(femaledata)
   console.log(data)
   return(
       <>
       <Header/>
       <h3>{age}</h3>
       <button onClick={incrementAge}>increment Age</button>
       <button onClick={resetAge}>Reset Age</button>
       <h3>{salary}</h3>
       <button onClick={incrementSalary}>increment Salary</button>
    
       </>
    )
}
export default ContactScreen;