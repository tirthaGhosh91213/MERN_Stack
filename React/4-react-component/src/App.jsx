import './App.css'
import  { SuccessButtan,DangerButtan } from './component/DangerButtan'
import DynamicComponent from './component/DynamicComponent'
import Heading from './component/heading'
import NewButtan from './component/NewButtan'
import Paragraph from './component/Paragraph'
import RandomNumber from './component/RandomNumber'
import StudentList from './component/StudentList'
import Title from './component/Title'


function App() {
  const clickMeHandler=()=>{
    console.log("Click me Handler")
  }
  const deletMeHandler=()=>{
    console.log("delete me Handler")
  }
  const sendMeHandler=()=>{
    console.log("send me Handler")
  }
  return (
    <>
    <Title Title="Hey tirtha"/>
    <Title Title="Hey mrittika"/>
    <Title Title="Hey pudu"/>
    <Title Title="Hey tirtha"/>
    <NewButtan btnType='sucess' btnText="Sucess" handler={clickMeHandler} />
    <NewButtan btnType='danger' btnText="danger" handler={deletMeHandler} />
    <NewButtan  btnText="good" handler={sendMeHandler} />
    <Heading/>
    <Paragraph/>
    <DangerButtan/>
    <SuccessButtan/>
    <DynamicComponent/>
    <DynamicComponent/>
    <DynamicComponent/>
    <DynamicComponent/>
    <StudentList/>
    <RandomNumber/>
    <RandomNumber/>
    <RandomNumber/>
    </>
  )
}
export default App
