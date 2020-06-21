import React from "react"

import Button from "../components/Button/Button"

const Demo = () => {

  const Greeting = (val:string) => {
    alert(`Hola ${val}`)
  }

  return (
    <>
      <Button value="John" onsaludo={Greeting}/>
      <Button value="Pato" onsaludo={Greeting}/>
    </>
  )
}

export default Demo