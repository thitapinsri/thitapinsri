import './Button.css'
import { Link } from 'react-router-dom'

const Button = ({buttonName, buttonPath}) => {
  return (
    <Link to={buttonPath} className="button">
        {buttonName}
    </Link>
  )
}

export default Button