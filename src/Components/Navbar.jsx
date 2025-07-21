import React from 'react'
import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <nav>
    <img src={logo} alt="logo" width="130px" />
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/todo">Todo</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar