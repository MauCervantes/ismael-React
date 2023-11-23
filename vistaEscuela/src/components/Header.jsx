import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <p>
            <Link to={'/dashboard'}><span> Listado | </span></Link>
            <Link to={'/student'}><span> Nuevo | </span></Link>
            <span>Cerrar Sesión</span>
        </p>
    </>
  )
}

export default Header
