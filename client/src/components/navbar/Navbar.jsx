import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'><h3>Nutrition Analyser</h3></Link>
    </div>
  )
}

export default Navbar
