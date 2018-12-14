import React from "react"
import { Link } from "react-router-dom"

export default function Header(props) {
  return (
    <div className='Header'>
      <Link to={"/"}>DashBoard</Link>
      <Link to={"/add"}>Add Product</Link>
      {/* <Link to={`/edit/${this.props.id}`}>Form</Link> */}
    </div>
  )
}
