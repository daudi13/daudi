import React from 'react'

const Skillset = ({skill1, skill2, skill3}) => {
  return (
    <>
    <li className="tech__type">${skill1}</li>
    <li className="tech__type">${skill2}</li>
    <li className="tech__type">${skill3}</li>
    </>
  )
}

export default Skillset