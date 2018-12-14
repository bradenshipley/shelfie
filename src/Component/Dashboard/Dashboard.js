import React, { Component } from "react"
import Form from "../Form/Form"
import axios from "axios"
import Header from "../Header/Header"

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inventory: []
    }
  }
  componentDidMount() {
    axios
      .get("/api/inventory")
      .then(response => {
        this.setState({ inventory: response.data })
      })
      .catch(err => {
        console.log("could not get from server side")
      })
  }
  render() {
    const product = this.state.inventory.map(product => {
      return (
        <div className='individualProduct'>
          <span>{product.img}</span>
          <span>{product.name}</span>
          <span>{product.price}</span>
        </div>
      )
    })
    return (
      <div className='Dashboard'>
        <Header />
        <div className='ViewProducts'>{product}</div>
        <Form inventory={this.props.inventory} />
      </div>
    )
  }
}

export default Dashboard
