import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className='container'>
        <div className="name">
              <p className='hidden'>
              Thita Pinsri
              </p>
              <p >
                <a href="mailto: thitapinsri@gmail.com">
                  thitapinsri@gmail.com
                </a>
              </p>
        </div>
          <p className="credit">
            Illustration by <a href="https://icons8.com/illustrations/author/599244">Aleksey Chizhikov</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
          </p>
      </div>
    </div>
  )
}

export default Footer