import React , {useRef , useState} from 'react'

const UseRef = () => {


  const inputRef = useRef(null)

  const handelClick = () =>{

    // setTitle(inputRef.current.value)
    // inputRef.current.focus()
    inputRef.current.value = ""
  }

  const [title ,setTitle] = useState("Aman")
   
        return(
          <>
          {/* <h1>{title}</h1> */}


          <input type="text" ref={inputRef} />
          <button onClick={handelClick}>click</button>
          </>
        )
    
}
 
export default UseRef;