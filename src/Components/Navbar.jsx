import React from 'react'
import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <nav>
      <img src = {logo} alt="logo" width="130px" />
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
          </ul>
        </nav>
  )
}

export default Navbar