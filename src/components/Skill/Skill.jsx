import './Skill.css'

const Skill = ({stack}) => {
  return (
    <div className='skill'>
        {
            stack.map(skill => {
                return <img src={skill.img} alt={skill.name} />
            })
        }
    </div>
  )
}

export default Skill