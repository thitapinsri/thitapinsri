import './Home.css'
import Button from '../../components/Button/Button'
import projects from '/public/assets/projects'
import ProjectCardContainer from '../../components/ProjectCardContainer/ProjectCardContainer'
import skillList from '/public/assets/skillList'
import SkillContainer from '../../components/SkillContainer/SkillContainer'
import githubLogo from '/public/assets/githubLogo.png'
import linkedinLogo from '/public/assets/linkedinLogo.png'
import emailLogo from "/public/assets/emailLogo.png"
import bannerGif from '/public/assets/droll-project-launch.gif';
import Footer from '../../components/Footer/Footer';
import skillGif from '/assets/droll-statistic.gif'
import contactGif from '/public/assets/droll-mobility.gif'

const Home = () => {
  return (
    <div className='home'>
      <section id="banner">
          <div className='text'>
            <h1>Thita Pinsri</h1>
            <p>Filmmaker turned to Software Developer
              <br />
              I visualize the concept into real life solution
            </p>
            <span className='button-container'>
              <Button buttonName={'Projects'} buttonPath={'/projects'}/>
              <Button buttonName={'Resume'} buttonPath={'/resume'}/>
            </span>
          </div>

          <div className='image'>
            <img src={bannerGif} />
          </div>
          
      </section>

      <section id="projects"> 

      <div className='project-head'>
        <h3>PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS</h3>
      </div>
      <div className='projects-container'>
        <ProjectCardContainer projects={projects} />
        <Button buttonName={'See More'} buttonPath={'/projects'} className="button"/>
      </div>
      </section>

      <section id="skills">
        <div className='img'>
          <div className='head'>
            <h1>Skills</h1>
          </div>
          <div className='container'>
          <div >
            <img src={skillGif} />
          </div>
          </div>
        </div>
        <div className='sk'>
          {/* <div className='head'>
            <h1>Skills</h1>
          </div> */}
          <div className='body'>
            <SkillContainer skills={skillList}/>
          </div>
        </div>
      </section>

      <section id="contact"> 
        <div className='info'>
          <h1>Let's get in touch!</h1>
          <p>Thita Pinsri</p>
          <p>Bangkok, Thailand</p>
          <a href="mailto: thitapinsri@gmail.com">
            <img src={emailLogo} />
          </a>
          <a href="https://www.linkedin.com/in/thitapinsri/">
            <img src={linkedinLogo}/>
          </a>
          <a href="https://github.com/thitapinsri">
            <img src={githubLogo}/>
          </a>
        </div>
        <div className='img'>
          <img src={contactGif}/>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home