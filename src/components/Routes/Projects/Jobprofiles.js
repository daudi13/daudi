import React from 'react'

const Jobprofiles = ({jobProfile}) => {
  return (
    <>
      <p className="range__canopy">{jobProfile[0]}</p>
      <div className="range__circle"></div>
      <p className="range__txt">{jobProfile[1]}</p>
      <div className="range__circle"></div>
      <p className="range__txt">{jobProfile[2]}</p>
    </>
  )
}

export default Jobprofiles