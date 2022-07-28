import './ResumeButton.css'
import { Link } from 'react-router-dom'

const ResumeButton = () => {
  return (
    <Link to="/resume" class="resume-button">
        Resume
    </Link>
  )
}

export default ResumeButton