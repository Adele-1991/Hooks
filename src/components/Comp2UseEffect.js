import React,{useState,useEffect} from 'react';
import style from "../style/style.module.css"

const Comp2UseEfffect = () => {
    const [number,setNumber]=useState(0);
    const [number2,setNumber2]=useState(0);
    const [name,setName]=useState("adele")
//     useEffect(()=>{
// console.log(number);
//     },[name,number]);
    useEffect(()=>{
      console.log(number);
      return ()=>{console.log("The End...")}
          },[name,number]);
  return (
   <div className={style["Comp2UseStateb"]}>
   <h1>
    Number:{number}<br/>
    </h1>
    <button onClick={()=>setNumber(prevNumber=>prevNumber+1)}>Count Up</button><br/>
    <h1>
    Number2:{number2}<br/>
    </h1>
    <button onClick={()=>setNumber2(prevNumber=>prevNumber+1)}>Count Up</button><br/>
   <h2>name:{name}</h2> <br/>
    <button onClick={()=>setName("Milad")}>Change Name</button><br/><br/><hr/>
    </div>
  )
}

export default Comp2UseEfffect
