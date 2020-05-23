import React from "react"

//Components
import TpInput from "../components/TpInput/TpInput"

interface HomeProps {
  user: string,
  age: number
}


const Home:React.FunctionComponent<HomeProps> = (props) => {

  const setTime = () => {
    let today = new Date()
    let hour = today.getHours()
    let minutes = today.getMinutes() + 15
    
    const setMinutes = (min:number) => {
      if (min + 15 <= 59){
        minutes = min + 15
      }
      else {
        let result = min
        let new_result = result - 60
        minutes = new_result
        if (hour + 1 > 23){
          hour = 0
        }
        else {
          hour = hour + 1
        }
      }
    }
    
    setMinutes(minutes)

    return (hour + ":" + minutes).toString()
  }


  return (
    <>
      <p>Hola {props.user} mi edad es {props.age}</p>
      <p>Rut:</p>
      <TpInput value="" placeholder="Ej: 17.xxx.xxx-x" disabled={false}/>
      <p>Direccion:</p>
      <TpInput value="" placeholder="Ej: Rubens 2025" disabled={false}/>
      <p>Hora</p>
      <TpInput value={setTime()} placeholder="Ej: Rubens 2025" disabled={true}/>
    </>
  )
}

export default Home