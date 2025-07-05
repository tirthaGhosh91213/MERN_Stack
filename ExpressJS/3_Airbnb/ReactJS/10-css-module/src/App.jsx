import style from  './App.module.css'
import Container from './container'
function App() {
 

  return (
    <>
    <Container><h1 className={style.heading}>Hey Tirtha</h1>
    <p className={`${style.heading} ${style.para}`}>this is a para </p>
    </Container>
    <Container>
      <p>This i an another para that add by a user </p>
    </Container>
     
    </>
  )
}

export default App
