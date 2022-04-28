import React from 'react'

const ProjectCard = ({name, jobProfile, desc, skillSet, imageOneMobile, order, imageOneDesktop}) => {
  return (
    <div className="work-section__card">
      <div className="work-section__card--img mobile">
        <img src={imageOneMobile} alt="card snap" />
      </div>
      <div className={`work-section__card--img desktop ${order}`}>
        <img src={imageOneDesktop} alt="card snap" /></div>
      <div className="work-section__card--info">
      <h3 className="project-name">{name}</h3>
      <div className="range">${jobProfile}
      </div>
      <p className="general__desc">
      {desc}
      </p>
      <ul className="tech">{skillSet}</ul>
      <button type="button" className="btn see-project" id="one">See Project</button>
      </div>
</div>
  )
}

export default ProjectCard