import './Home.css'
import Button from '../../components/Button/Button'
import projects from '../../assets/projects'
import ProjectCardContainer from '../../components/ProjectCardContainer/ProjectCardContainer'
import githubLogo from '../../assets/githubLogo.png'
import linkedinLogo from '../../assets/linkedinLogo.png'
import emailLogo from "../../assets/emailLogo.png"

const Home = () => {
  return (
    <div className='home'>
      <section id="banner">
          <div className='text'> 
            <h1>Hello, I'm Thita Pinsri!</h1>
            <p>Bangkok-based full-stack developer<br />
            with an academic background in Film and Advertising</p>

          </div>
          <div className='button-container'>
            <Button buttonName={'Projects'} buttonPath={'/projects'}/>
            <Button buttonName={'Resume'} buttonPath={'/projects'}/>
          </div>
      </section>

      <section id="projects"> 
        <h1>Projects</h1>
        <ProjectCardContainer projects={projects} />
        <Button buttonName={'See More'} buttonPath={'/projects'} className="button"/>
      </section>

      <section id="skills"> 
        <h1>Skills</h1>
        <div></div>
      </section>

      <section id="contact"> 
        <div>
          <h1>Let's get in touch!</h1>
          {/* <p>Thita Pinsri</p>
          <p>Bangkok, Thailand</p> */}
          <a href="#">
            <img src={emailLogo} />
            <p>thitapinsri@gmail.com</p>
          </a><br/>
          <a href="https://www.linkedin.com/in/thitapinsri/">
            <img src={linkedinLogo}/>
            <p>/in/thitapinsri</p>
          </a><br/>
          <a href="https://github.com/thitapinsri">
            <img src={githubLogo}/>
            <p>thitapinsri</p>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home