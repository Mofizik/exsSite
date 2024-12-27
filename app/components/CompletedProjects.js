'use client'
import React, { useState, useEffect } from 'react'
import ProjectItem from './parts/ProjectItem'
import Link from 'next/link'
const CompletedProjects = () => {
  const [projectsList, setProjectsList] = useState([])
  useEffect(() => {
    fetch('/source/projects.json').then(res => res.json()).then(data => setProjectsList(data.map((project, index) => ({ ...project, id: index + 1 , link: `/projects/${index + 1}`, source: `/projects/${index + 1}` }))))
  }, [])
  return (
    <div className="rightPart">
              <h2 className="title">Выполненные проекты</h2>
              {projectsList.slice(0, 5).map(project => <ProjectItem key={project.id} {...project} />)}
              <div className="center"><button className="buttonPrimary"><Link href="/projects">Все проекты...</Link></button></div>
    </div>
  )
}

export default CompletedProjects