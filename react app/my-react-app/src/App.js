
import './App.css';

import { useState } from 'react';

function App() {
   const [ counter , setCounter] = useState(1)
   const [text , setText ] = useState("Hello their")
   
   const increase = () =>{
     setCounter(counter+1)
   }
   function  decrease(){

    setCounter(counter-1);
   }

   const inputChage = (event) =>{
        setText(event.target.value)
   }

  return (
    <div className="App">
        <button onClick={decrease}> Increment </button>
        
        {
          counter
        }
        <button onClick={increase}> Increment </button>

        <div>
          
          <input type="text" placeholder='write something' onChange={inputChage} />
          {
            text
          }
        </div>

    </div>
  );
}

export default App;
