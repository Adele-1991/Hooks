import React, { useState } from "react";
import style from "../style/style.module.css";
const Comp1UseState = () => {
  const [name, setName] = useState("adle");
  const [age, setAge] = useState(43);
  const [flag, setFlag] = useState(false);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [number, setNumber] = useState(100);
  const [person, setPerson] = useState({
    name: "adiJon",
    family: "YazdiPAZ",
    age: 32,
    city: "Tehran",
  });
  const ChangeInfoHandler = () => {
    setName("Alireza");
    setAge(58);
    setFlag(!flag);
    const x = Math.floor(Math.random() * 100);
    setNumbers([...numbers, x]);
    setNumber((prevNumber) => prevNumber + 1);
    setPerson({ ...person, family: "jalil", age: 100 });
  };
  const changePersonHandler=(event)=>{
setPerson({...person,[event.target.name]:event.target.value});
  }
  return (
    <div className={style["Comp1UseStateb"]}>
      <div>Name:{name}</div>
      <div>Age:{age}</div>
      <div>{flag ? "Yes" : "No"}</div>
      <div>Number:{number}</div>
      <div>
        Numbers:
        <ul>
          {numbers.map((num) => (
            <li>{num}</li>
          ))}
        </ul>
      </div>
      <div className={style["person-info"]}>
        Name:{person.name}
        <br />
        Family:{person.family}
        <br />
        Age:{person.age}
        <br />
        City:{person.city}
        <br />
        <br />
        <div>
          Name:
          <input
            type="text"
            name="name"
            value={person.name}
            onChange={changePersonHandler}
          />
          <br />
          <br />
          Family:
          <input
            type="text"
            name="family"
            value={person.family}
            onChange={changePersonHandler}
          />
          <br />
          <br />
          Age:
          <input
            type="Number"
            name="age"
            value={person.age}
            onChange={(event)=>setPerson({...person,name:event.target.value})}
          />
          <br />
          <br />
          City:
          <input
            type="text"
            name="city"
            value={person.city}
            onChange={changePersonHandler}
          />
          <br />
        </div>
      </div>
      <button onClick={ChangeInfoHandler}>Change info</button>
    </div>
  );
};

export default Comp1UseState;
