import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
        <nav className="max-width">
          <div className='logo'>
            <Link to="/">Thita Pinsri</Link>
          </div>
          <div className="path-container">
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
          </div>
        </nav>
    </div>
  )
}

export default NavBar