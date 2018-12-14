import React, { Component } from "react"
import Form from "../Form/Form"
import axios from "axios"
import Header from "../Header/Header"

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productinventory: []
    }
  }
  componentDidMount() {
    axios
      .get("/api/inventory")
      .then(response => {
        console.log(response.data)
        const products = response.data
        this.setState({ productinventory: products })
      })
      .catch(err => {
        console.log("could not get from server side")
      })
  }
  ComponentDidUpdate(prevProps, prevState) {
    if (prevState.productinventory != this.state.productinventory) {
      //method to go here
    }
  }
  render() {
    const product = this.state.productinventory.map(product => {
      return (
        <div className='individualProduct'>
          <span>{product.imgURL}</span>
          <span>{product.name}</span>
          <span>{product.price}</span>
        </div>
      )
    })
    return (
      <div className='Dashboard'>
        <Header className='Header' />
        <div classname='productviewing'>
          <Form inventory={this.props.productinventory} className='inventory' />
          <div className='ViewProducts'>{product}</div>
        </div>
      </div>
    )
  }
}

export default Dashboard
