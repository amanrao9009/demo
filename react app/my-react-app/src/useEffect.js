import React , {useState , useEffect} from "react";




const Use_effect = () => {
 
    const [count , setCount] = useState(0)

    const increase = () =>{
        setCount(count+1)
    }

    useEffect(()=>{
        console.log("api called");
    },[count])

    return ( 
       <>
       <h1>use effect</h1>

       <h2>{count}</h2>
       <button onClick={increase}>click</button>
       </>

       
     );
}
 
export default Use_effect;