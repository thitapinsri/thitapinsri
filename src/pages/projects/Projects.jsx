import './Projects.css'
import projects from '../../../public/assets/projects'
import ProjectCardContainer from '../../components/ProjectCardContainer/ProjectCardContainer'

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-container">
      <h1>Projects</h1>
      <ProjectCardContainer projects={[...projects]} />

      </div>
    </div>
  )
}

export default Projects