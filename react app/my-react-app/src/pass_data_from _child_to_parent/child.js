import {useRef} from 'react'

const ChildInChildToParent = (prop) => {

    const inputRef = useRef(null)

    const handelSubmit = ()=>{
        prop.chageTitle(inputRef.current.value)
    }

    return ( <>
    <hr />
       <h1>child </h1> 

       <input type="text" ref={inputRef}/>
       <button onClick={handelSubmit}>clink to chage title of parent</button>  

    </> );
}
 
export default ChildInChildToParent;