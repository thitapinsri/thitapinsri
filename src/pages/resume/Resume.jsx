import './Resume.css'
import Button from '../../components/Button/Button'
import resume from "../../assets/mockresume.png"

const Resume = () => {
  return (
    <div className="resume">
      <div>
      <h1>Resume</h1>
      <Button
        buttonName={'download'}
        buttonPath={''}
      />
      </div>
      <div>
        <img src={resume} alt="resume" />
      </div>
    </div>
  )
}

export default Resume