import './Resume.css';
import resume from "../../../public/assets/Thita_resume.png";

const Resume = () => {
  return (
    <div className="resume">
        <div>
          <h1>Resume</h1>
          <a href='https://drive.google.com/file/d/1yTpbglq24MyegmhitqOccify-O4oq8Tr/view?usp=sharing' className='button' target="_blank">
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