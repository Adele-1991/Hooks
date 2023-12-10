import React, { useState } from "react";
import Comp2UseEfffect from './components/Comp2UseEffect';
import Comp1UseState from "./components/Comp1UseState";
// import Comp3A from "./components/Comp3A";
import Comp6UseReducer1 from "./components/Comp6UseReducer1";
import Comp7UseReducer2 from "./components/Comp7UseReducer2";
import Comp8UseReducer3 from "./components/Comp8UseReducer3";
import style from "./style/style.module.css"



export const NameContext = React.createContext();
export const FamilyContext = React.createContext();
export const AgeContext = React.createContext();
function App1() {
  const [flag, setFlag] = useState(true);
  return (
    <>
    <Comp1UseState/> 
      {/* <NameContext.Provider value="Ali">
        <FamilyContext.Provider value="Azizzi">
          <AgeContext.Provider value={45}>
          
            <Comp3A />
          </AgeContext.Provider>
        </FamilyContext.Provider>
      </NameContext.Provider> */}

     {flag && <Comp2UseEfffect />}
      <br />
      <button onClick={() => setFlag(false)} className={style["Comp2b"]}>Remove Comp</button>
      <hr />
      
      <Comp6UseReducer1 />
      <Comp7UseReducer2/>
      <Comp8UseReducer3/>
    </>
  );
}

export default App1;
