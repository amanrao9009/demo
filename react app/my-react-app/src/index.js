import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Use_Reducer from './useReducer';
import Use_effect from './useEffect';
import UseRef from './useRef';
import LayoutEffectTutorial from './useLayoutEffect'
import Parent from './prop_demo/parent';
import StateasPassProp from './state_pass_to_prop/parent'
import ParentInchildToParent from './pass_data_from _child_to_parent/parent'
import TodoList from './todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Use_Reducer/> */}
    {/* <Use_effect/> */}
    {/* <UseRef/> */}
    {/* <LayoutEffectTutorial/> */}
    {/* <Parent/> */}
    {/* <StateasPassProp></StateasPassProp> */}
    {/* <ParentInchildToParent/> */}


    <TodoList/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

