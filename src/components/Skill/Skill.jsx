import './Skill.css'

const Skill = ({stack}) => {
  return (
    <div className='skill'>
        {
            stack.map(skill => {
                return <img src={skill.img} alt={skill.name}  className='image'/>
            })
        }
    </div>
  )
}

export default Skill