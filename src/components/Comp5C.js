import React,{useContext} from 'react';
import {NameContext } from '../App1';
import {FamilyContext}from "../App1";
import {AgeContext} from '../App1';
import { TestContext } from './Comp4B';
const Comp5C = () => {
  return (
    <div>
    Name: {useContext(NameContext)}<br/>
    Family:{useContext(FamilyContext)}<br/>
    Age:{useContext(AgeContext)}<br/>
    Test: {useContext(TestContext)}
    </div>
  )
}

export default Comp5C
