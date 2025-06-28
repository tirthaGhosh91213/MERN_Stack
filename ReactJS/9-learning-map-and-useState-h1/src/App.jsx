import List from "./components/list";
import {useState} from "react"

function App() {
  console.log("Painting app component ");
  const [studentArr,setStudentArr]=useState(["Tirtha","mrittika","pudu","dharos","goru","gopu"]);
  // const studentArr=studentArrState[0];
  // const setStudentArr=studentArrState[1];
  console.log("State value is ",studentArr)
  const onClickHandler =(event)=>{
    if(event.key==="Enter"){
      console.log(event.target.value);
      const newArr=([...studentArr,event.target.value]);
      event.target.value=''
      setStudentArr(newArr)
      console.log(newArr)
    }
  }
  return (
    <>
    <h1 className="text-red-600">Lerner of MERN stack </h1>
    <List list={studentArr}></List>
    <input type="text" Placeholder="Enter a name" onKeyDown={onClickHandler} />
    </>
  )
}

export default App
