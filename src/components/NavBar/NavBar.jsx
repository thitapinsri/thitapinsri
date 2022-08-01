import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
        {/* <nav> */}
          <div className='logo'>
            <Link to="/">THITA PINSRI</Link>
          </div>
          <div className="path-container">
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/projects">Projects</Link>
            </div>
            {/* <div> */}
              <Link to="/resume"><div className='resumelink'>Resume</div></Link>
            {/* </div> */}
          </div>
        {/* </nav> */}
    </nav>
  )
}

export default NavBar
