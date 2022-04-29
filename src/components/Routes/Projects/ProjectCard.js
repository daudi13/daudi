import React from 'react';
import Jobprofiles from './Jobprofiles';
import Skillsets from './Skillset';
import './Projects.css'

const ProjectCard = ({name, jobProfile, desc, skillSet, order, imageOneDesktop, liveDemo, gitHub}) => {
  return (
    <div className="work-section__card">
      <div className="work-section__card--img mobile">
        <img src={imageOneDesktop} className="image-mobile" alt="card snap" />
      </div>
      <div className={`work-section__card--img desktop ${order}`}>
        <img src={imageOneDesktop} className="image-desktop" alt="card snap" /></div>
      <div className="work-section__card--info">
      <h3 className="project-name">{name}</h3>
        <div className="range">{
          <Jobprofiles jobProfile={jobProfile}/>
      }
      </div>
      <p className="general__desc">
      {desc}
      </p>
        <ul className="tech">{
            <Skillsets
            skills={skillSet}
            />
      }</ul>
      <a href={liveDemo} className="btn see-project btn-one" id="one">live Demo</a>
      <a href={gitHub} className="btn see-project" id="one">get Code</a>
      </div>
</div>
  )
}

export default ProjectCard