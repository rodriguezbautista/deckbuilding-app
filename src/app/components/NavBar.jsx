import React from 'react'
import Link from 'next/link'

export function NavBar () {
  return (
    <nav className="navbar container">
      <ul className="navbar-list">
        {/* Crear contexto de sesion y usarlo para boton de boton de perfil/registro y log in/log out
        {isLogged &&
          <li>
            <a href=""></a>
          </li>
        } */}
        <li className="navbar-list-item home-btn">
          <Link className='navbar-list-link' href={'/'}>Home</Link>
        </li>
        <li className="navbar-list-item">
          <Link className='navbar-list-link' href={'/register'}>Register</Link>
        </li>
        <li className="navbar-list-item">
          <Link className='navbar-list-link' href={'/login'}>Log In</Link>
        </li>
      </ul>
    </nav>
  )
}
