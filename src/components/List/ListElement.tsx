import React from "react"

interface ListElementProps {
  name: string
}

const ListElement:React.FunctionComponent<ListElementProps> = (props) => {
  return(
    <li>{props.name}</li>
  )
}

export default ListElement