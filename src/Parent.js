import React, { useState } from "react";
import Child from "./Child";

const Parent=()=> {
  const [name, setName] = useState("Tishka")
  return(
    <div>
      <p>Rakesh</p>
      <Child name={name} setNameUpdate={setName}/>
    </div>
  )
}
export default Parent;

