import React from 'react'
import ReactDOM from 'react-dom'

import Characters from "./views/Characters"

import "./styles/general.scss"

const App = () => <Characters/>

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'))