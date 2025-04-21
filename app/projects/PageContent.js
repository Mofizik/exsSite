'use client'
import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import CompletedNews from '../components/CompletedNews'
import Footer from '../components/Footer'
import Project from '../components/parts/Project'
import Link from 'next/link'

const PageContent = ({ params }) => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/source/projects.json')
      .then(res => res.json())
      .then(data => {
        const updatedProjects = data.map((project, index) => ({ 
            ...project,
             id: index + 1 ,
            link: `/projects/${index + 1}`, 
            source: `/projects/${index + 1}`
        }))
        setProjects(updatedProjects)
      })
  }, [])

  return (
    <main>
      <Header></Header>
      <div className="section">
        <div className="container">
          <div className="sidePage">
            <div className="leftPart">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/" className='link'>Главная страница</Link>
                  </li>
                  <li className="breadcrumb-item">Выполненные проекты</li>
                </ol>
              </nav>
              <h1 className="title">Выполненные проекты</h1>
              {projects.map(project => <Project key={project.id} {...project}></Project>)}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </main>
  )
}

export default PageContent
