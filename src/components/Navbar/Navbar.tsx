import './Navbar.css'
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <header className="navbar">

      {/* LOGO + TITULO */}
      <div className="left-section">

        <img
          src="/logoco.png"
          alt="Logo"
          className="logo"
        />

        <h1>Mantenimiento de Cocción</h1>

      </div>

      {/* BOTON HAMBURGUESA */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >

        {
          menuOpen
            ? <FaTimes />
            : <FaBars />
        }

      </button>

      {/* MENU */}
      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>

        <a href="#servicios">
          Servicios
        </a>

        <a href="#nosotros">
          Nosotros
        </a>

        <a href="#equipos">
          Marcas
        </a>

        <a href="#galeria">
          Galeria
        </a>

        <a href="#blog">
          Blog
        </a>

        <a href="#contacto">
          Contacto
        </a>

      </nav>

      {/* TELEFONO */}
      <button className="phone-btn">

        <FaPhoneAlt />

        <span>+52 156 5931 0139</span>

      </button>

    </header>
  )
}

export default Navbar