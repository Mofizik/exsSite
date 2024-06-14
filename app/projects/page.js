import React from 'react'
import Header from '../components/Header'
import CompletedNews from '../components/CompletedNews'
import Footer from '../components/Footer'
import Project from '../components/parts/Project'
import Link from 'next/link'
import { projects } from '@/public/source/projects'
export const metadata = {
    title: {
        default: 'Выполненные проекты / ООО "Эксперт Сервис" - Эксплуатация зданий и сооружений',
        template: '%s | Выполненные проекты / ООО "Эксперт Сервис" - Эксплуатация зданий и сооружений'
    }
}
const page = () => {
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
                                <li className="breadcrumb-item"><Link href="/news">Выполненные проекты</Link></li>
                            </ol>
                        </nav>
                        <h1 className="title">Выполненные проекты</h1>
                        {projects.map(project => <Project key={project.id} {...project}></Project>)}
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