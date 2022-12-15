import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.css'

export const Navbar = () => {
  return (
    <>
      <header className="header-home">
        <i>Logo</i>
        <nav>
          <NavLink to="/cart"> Carrinho</NavLink>
        </nav>
      </header>
    </>
  )
}
