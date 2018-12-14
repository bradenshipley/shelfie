import React, { Component } from "react"
import Form from "../Form/Form"
import axios from "axios"
import Header from "../Header/Header"
import { Link } from "react-router-dom"

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productinventory: []
    }
    this.getCurrentInventory = this.getCurrentInventory.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  componentDidMount() {
    this.getCurrentInventory()
    // axios
    //   .get("/api/inventory")
    //   .then(response => {
    //     console.log(response.data)
    //     const products = response.data
    //     this.setState({ productinventory: products })
    //   })
    //   .catch(err => {
    //     console.log("could not get from server side")
    //   })
  }
  getCurrentInventory() {
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
  handleDelete(product) {
    axios.delete(`/api/product/${product.id}`).then(response => {
      console.log(response.data)
      this.setState({ productinventory: response.data })
    })
  }
  ComponentDidUpdate(prevProps, prevState) {
    if (prevState.productinventory !== this.state.productinventory) {
      this.getCurrentInventory()
    }
  }
  handleUpdate(product) {
    axios.put(`/api/edit/${product.id}`).then(response => {
      console.log(response.data)
      this.setState({ productinventory: response.data })
    })
  }
  render() {
    const product = this.state.productinventory.map(product => {
      return (
        <div className='individualProduct'>
          <span>{product.imgURL}</span>
          <span>{product.name}</span>
          <span>{product.price}</span>
          <div className='productButtons'>
            <button onClick={this.handleDelete}>delete</button>

            <button>edit</button>
          </div>
        </div>
      )
    })
    return (
      <div className='Dashboard'>
        <Header className='Header' />
        <div className='productviewing'>
          {/* <Form
            inventory={this.props.productinventory}
            getCurrentInventory={this.getCurrentInventory}
            className='inventory'
          /> */}
          <div className='ViewProducts'>{product}</div>
        </div>
      </div>
    )
  }
}

export default Dashboard
