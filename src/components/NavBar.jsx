import { useState } from "react"
import { Link } from "react-router-dom"
import { categories } from "../data/products"
import CartWidget from "./CartWidget"

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const closeDropdown = () => {
    setDropdownOpen(false)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#f24d00'}}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/logo-blanco.png" alt="Logo" height="40" />
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}>
              <button 
                className="nav-link dropdown-toggle btn btn-link text-white text-decoration-none border-0 bg-transparent"
                type="button"
                onClick={toggleDropdown}
                style={{ padding: '0.5rem 1rem' }}
              >
                Categorías
              </button>
              <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                {categories.map(category => (
                  <li key={category.id}>
                    <Link 
                      className="dropdown-item" 
                      to={`/category/${category.id}`}
                      onClick={closeDropdown}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link>
            </li>
          </ul>

          <CartWidget />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
