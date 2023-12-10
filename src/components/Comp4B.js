import React,{useContext} from 'react';
import Comp5C from "./Comp5C";
import { FamilyContext } from '../App1';
export const TestContext=React.createContext();

const Comp4B = () => {
  return (
   <>
   <TestContext.Provider value="Test">
   <Comp5C />
   <h1>Name is:{useContext(FamilyContext)}</h1>
   </TestContext.Provider>
   </>
  )
}

export default Comp4B
