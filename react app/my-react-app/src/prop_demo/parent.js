import Child from "./child";

const Parent = () => {
    return ( <>

        <h2>Full Name </h2>
        
        <Child First="Aman" Last="Rao"/>
        <Child First="Amit" Last="Shing"/>
        <Child First="Rohit" Last="Shing"/>

    
    </>
        
     );
}
 
export default Parent;