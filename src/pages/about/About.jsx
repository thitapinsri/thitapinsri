import './About.css'
import profile from '../../assets/profile.jpg'

const text1 = `I’m Thita Pinsri, a software developer based in Bangkok with backgrounds in Film and Advertising.`
const text2 = `I started on a clear academic path studying the arts of media and communications, working part-time as a director of photography and earning my BA degree through lots of film and advertising projects. I also spent time as a freelance personal photographer delicately capturing clients’ important moments at many university graduation events.`
const text3 = `Taking break from media field, I worked three months in bakery department at Acme Markets in New Jersey, USA using my design skills on decorating cake and pastries according to customers' specifications. After that, I took a gap year start learning things and understanding my own self. I realized that not only how fascinating coding it is, it can combine with my art skills in the field of web design and development. So, as a non-stop learning person, I enrolled in Generation Thailand’s  bootcamp program planing to transition to Software developer career.`
const text4 = `Currently, I’m seeking a software Developer role in tech-related field. If you would like to know more about me, my work, or have any questions, don't hesitate to email me at thitapinsri@gmail.com.`

const About = () => {
  return (
    <div className='about'>
      <h1>About Me</h1>
      <div className="container">
        {/* <div className="pic"> */}
          <img src={profile}/>
        {/* </div> */}
        <div className="text">
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
          <p>{text4}</p>
        </div>
      </div>
      {/* <h1>Education</h1>
      <div></div>
      <h1>Certificate & Training</h1>
      <div></div>
      <h1>Achievements</h1>
      <div></div> */}
    </div>
  )
}

export default About