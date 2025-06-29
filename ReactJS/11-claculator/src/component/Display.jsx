
const Display = ({toShow}) => {
  return (
    <div>
      {toShow ? <p>{toShow}</p>:<p>0</p>}
    </div>
  )
}

export default Display;
