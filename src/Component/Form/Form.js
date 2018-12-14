import React, { Component } from "react"
import Axios from "axios"
import Header from "../Header/Header"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updatedURL: "",
      updatedName: "",
      updatedPrice: ""
    }
    this.handleURLChange = this.handleURLChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleURLChange(e) {
    this.setState({ updatedURL: e.target.value })
  }
  handleNameChange(e) {
    this.setState({ updatedName: e.target.value })
  }
  handlePriceChange(e) {
    this.setState({ updatedPrice: e.target.value })
  }
  handleCancel() {
    this.setState({ updatedURL: "", updatedName: "", updatedPrice: "" })
  }
  handleAddProduct() {
    Axios.post("/api/product").then()
  }
  render() {
    return (
      <div className='Form'>
        <div className='AddProduct'>
          <img
            src={this.state.imgUrl ? this.state.imgUrl : "defaultURLTOBEADDED"}
            height='100px'
            width='100px'
          />
          <span>
            Image URL:{" "}
            <input
              type='text'
              onChange={this.handleURLChange}
              value={this.state.updatedURL}
            />
          </span>
          <span>
            Product Name:{" "}
            <input
              type='text'
              onChange={this.handleNameChange}
              value={this.state.updatedName}
            />
          </span>
          <span>
            Price:{" "}
            <input
              type='text'
              onChange={this.handlePriceChange}
              value={this.state.updatedPrice}
            />
          </span>
          <button className='Cancelbutton' onClick={this.handleCancel}>
            Cancel
          </button>
          <button className='AddButton' onClick={this.handleAddProduct}>
            Add To Inventory
          </button>
        </div>
      </div>
    )
  }
}

export default Form
