import Button from '../../components/Button/Button'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Button buttonName={'Back to Homepage'} buttonPath={'/'} />
    </div>
  )
}

export default NotFound