import React from "react"

import "./button.scss"

interface PropsButton {
  value: string,
  color: "blue" | "pink" | "red",
  size: "xs" | "sm" | "md" | "lg" | "xl",
  disabled: boolean,
  onclick: () => void
}

const Button:React.FunctionComponent<PropsButton> = (props) => {

  const handleClick = () =>{
    props.onclick()
  }

  return (
    <button onClick={handleClick} type="button" className={`tp-button ${props.color}`}>
      {props.value}
    </button>
  )
}

export default Button