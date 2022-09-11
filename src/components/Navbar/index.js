import React, { useState, useEffect } from 'react';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav,
    NavLogo,
    NavbarContainer,
    NavMenu,
    NavItem,
    NavLinks,
    MobileIcon 
} from './NavbarElements';


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

useEffect(() => {
    window.addEventListener('scroll', changeNav)
}, [])

const toggleHome = () => {
    scroll.scrollToTop();
}

  return (
    <>
    <IconContext.Provider value={{color: '#E3F2FD'}}>
        <Nav scrollNav ={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>MP</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks 
                        to="work"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Work</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar