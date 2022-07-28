import './ProjectButton.css'
import { Link } from 'react-router-dom'

const ProjectButton = ({buttonName}) => {
  return (
    <Link to="/projects" class="project-button">
        {buttonName}
    </Link>
  )
}

export default ProjectButton