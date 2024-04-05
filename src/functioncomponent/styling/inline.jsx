import './external.css';
import sri from './styles.module.css'

const CustomText=()=>{
    const Textstyle={
        color:"darkblue",
        backgroundColor:"lightblue"
    }
    return(
        <>
        <h1 style={{color:"red",
    backgroundColor:"green"}}>Hello world</h1>
    <h1 style={Textstyle}>Hello world</h1>
    <h1 className="name">Hello world</h1>
    <h1 className={sri.Text}>Hello world</h1>
        </>
    )
}

export default CustomText;