import './Resume.css';
import resume from "../../assets/mockresume.png";

const Resume = () => {
  return (
    <div className="resume">
      <div>
      <h1>Resume</h1>
      <a href='/src/assets/Thita-resume.pdf' className='button' download>
        Download Resume
      </a>
      </div>
      <div>
        <img src={resume} alt="resume" />
      </div>
    </div>
  )
}

export default Resume