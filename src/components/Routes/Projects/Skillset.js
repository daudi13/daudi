import React from 'react'

const Skillsets = ({skills}) => {
  return (
    <>{
      skills.map((skill, i) => (
        <li key={i} className="tech__type">{skill}</li>
      )) 
    }
    </>
  )
}

export default Skillsets