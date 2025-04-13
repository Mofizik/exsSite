'use client'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CompletedProjects from '../components/CompletedProjects'
import OneNews from '../components/parts/OneNews'
import Link from 'next/link'
const PageContent = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
      fetch('/source/news.json')
        .then(res => res.json())
        .then(data => setNews(data.map((news, index) => ({ ...news, id: index + 1 , link: `/news/${index + 1}`, source: `/news/${index + 1}` }))))
    }, [])
  return (
    <main>
        <Header></Header>
        <div className="section">
            <div className="container">
                <div className="sidePage">
                    <div className="newsContent">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/" className='link'>Главная страница</Link></li>
                                <li className="breadcrumb-item">Новости</li>
                            </ol>
                        </nav>
                        <h1 className="title">В данный момент работы ведутся</h1>
                        {news.map(news => <OneNews key={news.id} {...news}></OneNews>)}
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </main>
  )
}

export default PageContent