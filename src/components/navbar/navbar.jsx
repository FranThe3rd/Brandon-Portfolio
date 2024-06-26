import React from 'react'
import './navbar.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { List } from 'phosphor-react'


const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)


    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
  return (
    <nav className="navbar">
            <div className="container-nav">
                <div className="logo">
                <div class="blob"></div>                    
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <List size={40} color='white' />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink onClick={handleShowNavbar} to="/">HOME</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={handleShowNavbar} to="/discover">GALLERY</NavLink>
                        </li>
                        
                        <li>
                        <NavLink onClick={handleShowNavbar} to="/libraries">ABOUT</NavLink>

                        </li>

                        <li>
                        <NavLink onClick={handleShowNavbar} to="/libraries">SERVICES</NavLink>

                        </li>

                        <li>
                        <NavLink onClick={handleShowNavbar} to="/libraries">PORTFOLIO</NavLink>

                        </li>
                       
                    
                    </ul>
                </div>
            </div>
        </nav>

 
  )
}

export default Navbar