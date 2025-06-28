import { Camera, Icon } from 'lucide-react';
import {bottleBaby} from '@lucide/lab'

function App() {
  

  return (
    <>
      <Camera strokeWidth={1} size={67} color='blue'/>
      <Icon color='blue' strokeWidth={1} size={67} iconNode={bottleBaby}/>
    </>
  )
}

export default App
