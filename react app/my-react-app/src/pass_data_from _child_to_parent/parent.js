import { useState } from "react";
import  Child from "./child"
const ParentInchildToParent = () => {
    
    const [title , setTitle] = useState("parent ")

    return ( <>
       <h1>{title}</h1>
       <Child chageTitle={(data)=>{setTitle(data)}}/>

    </> );
}
 
export default ParentInchildToParent;