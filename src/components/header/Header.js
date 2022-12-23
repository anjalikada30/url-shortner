import React from 'react'
import { Nav, NavLink, NavMenu, Title } from './NavElements'

function Header() {
  return (
    <Nav>
        <Title>Shortly</Title>
        <NavMenu>
            <NavLink to={'/'} activeStyle>
                Home
            </NavLink>
            <NavLink to={'/contact'} activeStyle>
                Contact us
            </NavLink>
        </NavMenu>
    </Nav>
  )
}

export default Header
