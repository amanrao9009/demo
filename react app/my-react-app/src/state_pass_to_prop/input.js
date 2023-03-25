import React ,{useRef} from "react";

const Input = (props) => {

    const nameRef = useRef(null)
    
    const handelClick = (event) =>{
        

        // props.setName(nameRef.current.value)
        props.setName(event.target.value)


    }

    return ( 
        
        <>
          <input type="text" ref = {nameRef} onChange={handelClick} />
        </>
     );
}
 
export default Input;