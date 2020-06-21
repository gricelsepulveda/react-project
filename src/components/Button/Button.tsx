import React from "react"

interface ButtonProps {
  value: string,
  onsaludo: (valor:string) => void
}


const Button:React.FunctionComponent<ButtonProps> = (props) => {

  const handleClick = () => {
    props.onsaludo(props.value)
  }

  return(
    <button 
      type="button"
      onClick={() => handleClick()}
    >
      soy {props.value}
    </button>
  )
}

export default Button