import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import CompletedNews from '@/app/components/CompletedNews'
import { projects } from '@/public/source/projects'
import Link from 'next/link'
export const generateStaticParams = async () => {
    return projects.map(project => ({
      projectid: project.id.toString(),
    }))
  }
const page = ( {params} ) => {
  console.log(params, 'params')
  const project = projects.find(project => project.id == params.projectid)
  return (
    <main>
        <Header></Header>
        <div className="section">
            <div className="container">
                <div className="sidePage">
                    <div className="leftPart">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/" className='link'>Главная страница</Link></li>
                                <li className="breadcrumb-item"><Link href="/news" className='link'>Выполненные проекты</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{project.title}</li>
                            </ol>
                        </nav>
                        <h1 className="title">{project.title}</h1>
                        <p>
                            <img className="fluid" src={project.image} alt="" />
                        </p>
                        <hr></hr>
                        {project.text}
                        <hr></hr>
                    </div>
                    <CompletedNews></CompletedNews>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </main>
  )
}

export default page