import React from "react"

//Graphic Styles
import "./tp-input.scss"

interface TpInputProps {
  value: string,
  placeholder: string,
  disabled: boolean
}

const TpInput:React.FunctionComponent<TpInputProps> = (props) => {
  return(
    <input className="tp-input" type="text" value={props.value == "" ? undefined : props.value} placeholder={props.placeholder} disabled={props.disabled}/>
  )
}

export default TpInput