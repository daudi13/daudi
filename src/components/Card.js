import { Avatar } from '@material-ui/core'
import React from 'react'

const Card = ({img}) => {
  return (
    <div className="card">
      <Avatar src={img} className="avatar"/>
      <p>When I think of David, the first thing that comes to mind is Solid Foundations. He is always striving to use the best practices in his websites, writing good quality code all while meeting deadlines. He is a diligent programmer, with a keen eye for details, and a goal-oriented mindset. Highly recommended!!</p>
      <p><span>Davina Jorge</span>, Media personality</p>
    </div>
  )
}

export default Card