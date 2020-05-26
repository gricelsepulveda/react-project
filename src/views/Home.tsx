import React, {useState} from "react"

//Components
import TpInput from "../components/TpInput/TpInput"
import Button from "../components/Button/Button"

interface HomeProps {
  user: string,
  age: number
}

const Home:React.FunctionComponent<HomeProps> = (props) => {
  const [textoButton, changeTextoButton] = useState("obtener personajes de starwars")
  const [page, setPage] = useState(1)

  const handleButton = () => {
      setPage(page + 1)
      fetch(`http://swapi.dev/api/people/?page=${page}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
      })
  }

  return (
    <>
      <p>Hora</p>
      <TpInput value="" placeholder="Ej: Rubens 2025" disabled={true}/>
      <Button 
        onclick={() => handleButton()}
        value={textoButton}
        color="blue"
        disabled={false}size="sm"
      />
    </>
  )
}

export default Home