import React from 'react'
import './navbar.css'
import { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { List } from 'phosphor-react'
import { CursorContext } from '../cursor/CursorContext'
import { Link as LinkScroll } from 'react-scroll';



const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)
    const { cursorVariant, x, y, textEnter, textLeave, navTextEnter } = useContext(CursorContext);



    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return (
        <nav className="navbar">
            <div className="container-nav">
                <div className="logo">
                    <a href="https://www.instagram.com/filmic.brandon/" target='_blank'>

                        <div onMouseEnter={navTextEnter} onMouseLeave={textLeave} class="blob"></div>
                    </a>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <List size={40} color='white' />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li onMouseEnter={navTextEnter} onMouseLeave={textLeave}>
                        <LinkScroll smooth={true} duration={1000} to='home' offset={0}>

                            <NavLink onClick={handleShowNavbar} to="/">HOME</NavLink>
                            </LinkScroll>
                        </li>
                        <li onMouseEnter={navTextEnter} onMouseLeave={textLeave}>
                            <LinkScroll smooth={true} duration={1000} to='card' offset={-100}>
                                <NavLink onClick={handleShowNavbar} >GALLERY</NavLink>
                            </LinkScroll>
                        </li>

                        <li onMouseEnter={navTextEnter} onMouseLeave={textLeave}>
                        <LinkScroll smooth={true} duration={3000} to='about-me' offset={-100}>
                            <NavLink onClick={handleShowNavbar} >ABOUT</NavLink>
                            </LinkScroll>

                        </li>

                        <li onMouseEnter={navTextEnter} onMouseLeave={textLeave}>
                        <LinkScroll smooth={true} duration={3000} to='services' offset={-50}  >

                            <NavLink onClick={handleShowNavbar} >SERVICES</NavLink>
                            </LinkScroll>

                        </li>

                        


                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar