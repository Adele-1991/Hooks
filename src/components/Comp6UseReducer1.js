import React,{useState, useReducer} from 'react';
import style from "../style/style.module.css"
const initState=0;
const reducer=(state,action)=>{
  switch(action){
    case "up":
      return state+1;
      case "down":
        return state-1;
        case "reset":
          return initState;
          default:
            return state;
  }

}

const Comp6UseReducer1 = () => {
  const[number1,setNumber1]=useState(initState);

const [number2,dispatch]=useReducer(reducer,initState );
  return (
    <div className={style["Comp6b"]}>
       <div>
      <h1>Number1:{number1}</h1>
      <button onClick={()=>setNumber1((prevNumber1)=>prevNumber1+1)}>Up</button>
      <button onClick={()=>setNumber1(initState)}>Reset</button>

      <button onClick={()=>setNumber1((prevNumber1)=>prevNumber1-1)}>Down</button>
    </div>
<hr/>
    <h2>Number2:{number2}</h2>
    <button onClick={()=>dispatch("up")}>Up</button>
    <button onClick={()=>dispatch("reset")}>Reset</button>
    <button onClick={()=>dispatch("down")}>Down</button>
    
    </div>
 
    
  )
}

export default Comp6UseReducer1
