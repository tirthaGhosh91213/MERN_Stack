import React from 'react'

const Button = ({text,onclickHandeler }) => {
  return (
    <button onClick={onclickHandeler}>
      {text}
    </button>
  )
}

export default Button;
