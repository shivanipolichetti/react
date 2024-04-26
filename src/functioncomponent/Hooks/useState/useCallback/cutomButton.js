import React from "react";


const CustomButton=({handleClick=()=>{},title="click"})=>{
    console.log("button rendering",title)
    return(
        
        <button onClick={handleClick}>{title}</button>
       
    )
}

export default React.memo(CustomButton);