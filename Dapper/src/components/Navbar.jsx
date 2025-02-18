import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa'
import './Navbar.css'
// import logo from '../assets/logo.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Calista" />
          </NavLink>
        </div>

        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            HOME
          </NavLink>
          <NavLink to="/new-arrivals" className={({ isActive }) => isActive ? 'active' : ''}>
            NEW ARRIVALS
          </NavLink>
          <NavLink to="/shop-all" className={({ isActive }) => isActive ? 'active' : ''}>
            SHOP ALL
          </NavLink>
          <div className="dropdown">
            <NavLink to="/collections" className={({ isActive }) => isActive ? 'active' : ''}>
              COLLECTIONS <span className="arrow">▼</span>
            </NavLink>
            <div className="dropdown-content">
              <NavLink to="/collections/summer">Summer Collection</NavLink>
              <NavLink to="/collections/winter">Winter Collection</NavLink>
              <NavLink to="/collections/casual">Casual Wear</NavLink>
              <NavLink to="/collections/formal">Formal Wear</NavLink>
            </div>
          </div>
          <NavLink to="/super-deals" className={({ isActive }) => isActive ? 'active' : ''}>
            SUPER DEALS
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            ABOUT
          </NavLink>
        </div>

        <div className="nav-icons">
          <button className="icon-btn search-btn">
            <FaSearch />
          </button>
          <button className="icon-btn account-btn">
            <FaUser />
          </button>
          <button className="icon-btn wishlist-btn">
            <FaHeart />
            <span className="badge">0</span>
          </button>
          <button className="icon-btn cart-btn">
            <FaShoppingCart />
            <span className="badge">0</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar