import React from "react";

const Child= (props)=>{
return(
    <div>
        <p>Child {props.name}</p>
        <button onClick={()=>props.setNameUpdate("Rekha")}>Click Me</button>
    </div>
)
}
export default Child;