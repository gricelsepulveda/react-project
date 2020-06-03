import React from "react"
import List from "../components/List/List"

const Characters = () => {
  return(
    <>
      <h1>My primer CRUD de Starwars</h1>
      <p>Bienvenidos a mi lista de personajes favoritos de Starwars</p>

      <List/>

      <input type="text"/>
      <br/>
      <button type="button">Añadir un personaje</button>
      <br/>
      <button type="button">Eliminar un personaje</button>
      <br/>
      <button type="button">Editar un personaje</button>
    </>
  )
}

export default Characters