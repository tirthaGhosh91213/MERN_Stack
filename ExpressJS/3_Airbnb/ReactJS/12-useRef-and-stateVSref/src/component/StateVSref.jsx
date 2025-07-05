import React from 'react';
import {useState} from 'react';
import {useRef} from 'react';

function StateVSref() {

 const [stateClick, setstateClick] = useState(0)
 const refClick =useRef(0);
 const onStateclickHandler =()=>{
  console.log("state is click");
  // setstateClick(stateClick+1)
  setstateClick(currentVal=>currentVal+1)
 }
 const onRefclickHandler =()=>{
  console.log("ref is click")
  refClick.current++;
 }
  return (
    <>
      <h1>State click :- {stateClick}</h1>
      <h1>Ref  click :- {refClick.current}</h1>
      <button onClick={onStateclickHandler}>state </button>
      <br />
      <hr />
      <button onClick={onRefclickHandler}>Ref </button>
    </>
  )
}

export default StateVSref
