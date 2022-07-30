import './SkillContainer.css'
import Skill from '../Skill/Skill'

const SkillContainer = ({skills}) => {
  return (
    <div className='skill-container'>
        {
            skills.map(skill => {
                return (
                    <div className='skills' >
                        <h2>{skill.type}</h2>
                        <Skill stack={skill.stacks}/>
                    </div>
                )
            })
        }   
     </div>
  )
}

export default SkillContainer