import React from "react"
import ListElement from "./ListElement"

const List = () => {
  return(
    <ul>
      <ListElement name="Luke"/>
      <ListElement name="Han Solo"/>
      <ListElement name="Mandalorian"/>
    </ul>
  )
}

export default List