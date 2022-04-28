import React from 'react'

const Jobprofiles = ({jobs}) => {
  return (
    <>
      <p className="range__canopy">{jobs[0]}</p>
      <div className="range__circle"></div>
      <p className="range__txt">${jobs[1]}</p>
      <div className="range__circle"></div>
      <p className="range__txt">${jobs[2]}</p>
    </>
  )
}

export default Jobprofiles