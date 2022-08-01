import './ProjectCard.css'
import githubLogo from '../../assets/githubLogo.png'

const ProjectCard = ({project}) => {
  return (
    <a className='project-card' href={project.githubLink}>
            <img src={project.img}/>
        <div>
            {/* <a className="card-hover" href={project.githubLink}><img src={githubLogo}/></a> */}
            <h2>{project.name}</h2>
            <h5>
                {
                    project.stacks.map(stack => {
                        return <span>{stack}</span>
                    })
                }
            </h5>
            <p className="description">{project.description}</p>
        </div>
    </a>
  )
}

export default ProjectCard