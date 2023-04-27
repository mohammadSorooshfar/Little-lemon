import React from 'react'
import Logo from "../assets/Logo.svg"


const Nav = () => {
  return (
    <nav>
        <img src={Logo} alt="Logo" />
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Reservation</a></li>
            <li><a href="">Order Online</a></li>
            <li><a href="">Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav


