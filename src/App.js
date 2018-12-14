import React, { Component } from "react"

import "./App.css"
import Dashboard from "./Component/Dashboard/Dashboard"
import Form from "./Component/Form/Form"
import { Route, Switch } from "react-router-dom"
import Header from "./Component/Header/Header"
import Product from "./Component/Product/Product"

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
            <Route path='/edit/:id' component={Form} />
            <Route exact path='/add' component={Form} />
            <Route path='/' component={Dashboard} />
          </div>
        </Switch>
      </div>
    )
  }
}

export default App
