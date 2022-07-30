import './Projects.css'
import projects from '../../assets/projects'
import ProjectCardContainer from '../../components/ProjectCardContainer/ProjectCardContainer'

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <ProjectCardContainer projects={[...projects, ...projects, projects[0]]} />
    </div>
  )
}

export default Projects