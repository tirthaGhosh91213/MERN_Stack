import {useState} from 'react';
import Display from "./component/Display";


import NumberPad from "./component/NumberPad";

function App() {
  const [displayVal , setDisplayVal]=useState('')
  return (
    <>
    <div> 
      Calculator
    </div>
    <Display toShow={displayVal}/>
    <NumberPad displayVal={displayVal} setDisplayVal={setDisplayVal}/>
       
    </>
  )
}

export default App;
