import React,{useReducer} from 'react';
import style from "../style/style.module.css";
const initState={
  number:0,
  name:"Mehdi",
message:""
};
const reducer=(state,action)=>{
  switch(action.type){
    case "up":
      return {...state,number:state.number+1,message:action.message};
      case "down":
        return{...state,number:state.number-1,message:action.message};
        case "reset":
          return {...state,number:initState.number,message:action.message}; 
          default:
            return {...state};
  }

};

const Comp6UseReducer1 = () => {
  const [data,dispatch]=useReducer(reducer,initState);


  return (  
    <div className={style["Comp7b"]}>
  
    <h2>Number:{data.number}</h2>
    <h2>Number:{data.name}</h2>
    <h2>Message:{data.message}</h2>
    <button onClick={()=>dispatch({type:"up",message:"Count-Up"})}>Up</button>
    <button onClick={()=>dispatch({type:"down",message:"Count-down"})}>Down</button>
    <button onClick={()=>dispatch({type:"reset",message:"Reset"})}>Reset</button>
  
    
    </div>

    
  )
}

export default Comp6UseReducer1
