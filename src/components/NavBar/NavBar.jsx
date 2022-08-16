import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const removeActive = () => {
    document.querySelector('.hamburger').classList.remove('active')
    document.querySelector('.path-container').classList.remove('active')
  }

  return (
    <nav className="navbar">
          <div className='logo'>
            <Link to="/">THITA PINSRI</Link>
          </div>
          <div className="path-container">
            <div>
              <Link to="/about" onClick={removeActive}>About</Link>
            </div>
            <div>
              <Link to="/projects" onClick={removeActive}>Projects</Link>
            </div>
              <Link to="/resume" onClick={removeActive}><div className='resumelink'>Resume</div></Link>
          </div>
          <div className='hamburger' onClick={() => {
            document.querySelector('.hamburger').classList.toggle('active')
            document.querySelector('.path-container').classList.toggle('active')
          }}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
    </nav>
  )
}

export default NavBar
