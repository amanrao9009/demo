import {useState} from 'react'
import Input from "./input";
import UserName from "./userName";
const StateasPassProp = () => {
  const [name ,setName] = useState("Enter User Name")
const title = "aman"
    return ( <>
       
       
       <Input setName={setName} />
       <UserName name ={name}/>


    </> );
}
 
export default StateasPassProp;