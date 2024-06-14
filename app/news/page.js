import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CompletedProjects from '../components/CompletedProjects'
import OneNews from '../components/parts/OneNews'
import Link from 'next/link'
import { news } from '@/public/source/news'
export const metadata = {
    title: {
        default: 'Новости',
        template: '%s | Новости'
    }
}
const NewsPage = () => {
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
                                <li className="breadcrumb-item"><Link href="/news">Новости</Link></li>
                            </ol>
                        </nav>
                        <h1 className="title">Новости</h1>
                        {news.map(news => <OneNews key={news.id} {...news}></OneNews>)}
                    </div>
                    <CompletedProjects></CompletedProjects>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </main>
  )
}

export default NewsPage