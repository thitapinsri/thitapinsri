import './ProjectCard.css'
import githubLogo from '../../assets/githubLogo.png'

const ProjectCard = ({project}) => {
  return (
    <div className='project-card'>
        <div>
            <a href={project.githubLink}><img src={githubLogo}/></a>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
        </div>
        <h6>
            {
                project.stacks.map(stack => {
                    return <span>{stack}</span>
                })
            }
        </h6>
    </div>
  )
}

export default ProjectCard