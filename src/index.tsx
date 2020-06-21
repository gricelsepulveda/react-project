import React from 'react'
import ReactDOM from 'react-dom'

import Characters from "./views/Characters"
import Demo from "./views/Demo"

import "./styles/general.scss"

const App = () => <Demo/>

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'))