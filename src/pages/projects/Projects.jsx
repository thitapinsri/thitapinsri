import './Projects.css'
import projects from '../../assets/projects'
import ProjectCardContainer from '../../components/ProjectCardContainer/ProjectCardContainer'

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <ProjectCardContainer projects={[...projects]} />
    </div>
  )
}

export default Projects