import './App.css';
import { useReducer } from 'react';


const Use_Reducer = () => {

    const reducer = (state , action) =>{
        switch (action.type){
            case "INCREMEN":
               return { count : state.count+1 , Santance: state.Santance};
            case "SHOW":
                return { count : state.count , Santance: !state.Santance }
            default:
                return state
    
        }
    
    }
    

   const [state , dispatch] = useReducer(reducer , {count: 0 , Santance: true})

   

    return ( 
        <>

        <h1>{state.count}</h1>
        <button 
         onClick={()=>{
            dispatch({type:"INCREMEN"});
            dispatch({type:"SHOW"})
         }}
        >Click</button>
        <h2>{ state.Santance &&  "Hi i am ...."}</h2>
        
        </>
     );
}
 
export default Use_Reducer;