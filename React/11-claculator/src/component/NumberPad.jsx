import React from 'react'
import Button from './Button';

const NumberPad = ({displayVal,setDisplayVal}) => {
  const number =["1","2","3","4","5","6","7","8","9","0","."];
  const operation =["+","-","*","/"];
  const addToDisplay=(text)=>{
    setDisplayVal(displayVal+text)
  }
  const EvaluateExpression=()=>{
    const result=eval(displayVal);
    setDisplayVal(result);
  }

  return (
    <div>
      <Button text={"c"} onclickHandeler={()=>setDisplayVal('')}/>
      <br />
      {operation.map(text=><Button key={text} text={text} onclickHandeler={()=>addToDisplay(text)}/>)}
      <br />
      {number.map(text=><Button key={text} text={text} onclickHandeler={()=>addToDisplay(text)}/>)}
      <br/>
      <Button text={"="} onclickHandeler={EvaluateExpression}/>
    </div>
  )
}

export default NumberPad;
