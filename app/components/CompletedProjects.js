import React from 'react'
import ProjectItem from './parts/ProjectItem'

const CompletedProjects = () => {
    const projectsList = [
        {
          image: '/images/projects/1.jpeg',
          title: 'Заголовок проекта',
          date: '01.01.2022',
          link: '/projects/1'
        },
        {
          image: '/images/projects/2.jpeg',
          title: 'Заголовок проекта',
          date: '01.01.2022',
          link: '/projects/2'
        },
        {
          image: '/images/projects/3.jpeg',
          title: 'Заголовок проекта',
          date: '01.01.2022',
          link: '/projects/3'
        },
        {
          image: '/images/projects/4.jpeg',
          title: 'Заголовок проекта',
          date: '01.01.2022',
          link: '/projects/4'
        }
      ]
  return (
    <div className="rightPart">
              <h2 className="title">Выполненные проекты</h2>
              {projectsList.map(project => <ProjectItem key={project.id} {...project} />)}
    </div>
  )
}

export default CompletedProjects