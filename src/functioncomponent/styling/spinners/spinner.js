import { DNA, FallingLines } from "react-loader-spinner"

const Spinner=()=>{
   return(
    <>
     {/*<DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
   />*/}
   <FallingLines
  color="darkblue"
  width="100"
  visible={true}
  ariaLabel="falling-circles-loading"
  /></>
   )
}

export default Spinner;