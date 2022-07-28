import './ProjectCardContainer.css'
import ProjectCard from '../ProjectCard/ProjectCard'

const ProjectCardContainer = ({projects}) => {
  return (
    <div className='project-card-container'>
        {
            projects.map(project => {
                return <ProjectCard project={project} />
            })  
        }
    </div>
  )
}

export default ProjectCardContainer