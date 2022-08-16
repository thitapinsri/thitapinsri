import './Resume.css';
import resume from "../../../public/assets/mockresume.png";

const Resume = () => {
  return (
    <div className="resume">
      <div>
      <h1>Resume</h1>
      <a href='https://drive.google.com/file/d/1YSDpqMO0QlpAw4wse0HR8IKgHYm_IDYG/view' className='button' target="_blank">
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