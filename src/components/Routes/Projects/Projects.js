import React from 'react';
import modals from '../../DataBase/DataBase';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className="work-section" id="portfolio">

      <div className="work-section__box">
        <h2 className="work-section__title">My Projects</h2>
        <h4 className="work-section__sub-title">A selection of my range of work</h4>
        {
          modals.map((modal) => (
            <ProjectCard
              key={modal.modalId}
              name={modal.name}
              jobProfile={modal.jobProfile}
              desc={modal.desc}
              skillSet={modal.skillSet}
              imageOneDesktop={modal.imageOneDesktop}
              order={modal.order}
              liveDemo={modal.liveDemo}
              gitHub={modal.gitHub}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Projects