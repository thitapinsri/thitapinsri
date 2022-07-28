import './Home.css'
import ProjectButton from '../../components/ProjectButton/ProjectButton'
import ResumeButton from '../../components/ResumeButton/ResumeButton'

const Home = () => {
  return (
    <div className='home'>
      <section id="banner">
        banner 
      </section>
      <section id="projects"> 
        projects
      </section>
      <section id="skills"> 
        skills
      </section>
      <section id="contact"> 
        contacts
      </section>
      
      <ProjectButton buttonName={'See More'} />
      <ProjectButton buttonName={'Projects'} />
      <ResumeButton />
    </div>
  )
}

export default Home