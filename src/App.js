import React, { Component } from "react"

import "./App.css"
import Dashboard from "./Component/Dashboard/Dashboard"
import Form from "./Component/Form/Form"
import { Route, Switch } from "react-router-dom"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <div>
            <Route path='/' component={Dashboard} />
            <Route path='/edit/:id' component={Form} />
            <Route path='/add' component={Form} />
          </div>
        </Switch>
      </div>
    )
  }
}

export default App
