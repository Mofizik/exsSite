'use client'
import React, { useState, useEffect } from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import CompletedProjects from '@/app/components/CompletedProjects'
import Link from 'next/link'

const PageContent = ({ params }) => {
    const [news, setNews] = useState([])

    useEffect(() => {
      fetch('/source/news.json')
        .then(res => res.json())
        .then(data => setNews(data.map((news, index) => ({ ...news, id: index + 1 }))))
    }, [])

    const oneNews = news.find(item => item.id == params.newsid)

    // Check if oneNews is defined before rendering
    if (!oneNews) {
        return <div>Loading...</div>
    }

    return (
      <main>
        <Header />
        <div className="section">
          <div className="container">
            <div className="sidePage">
              <div className="leftPart">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/" className='link'>Главная страница</Link></li>
                    <li className="breadcrumb-item"><Link href="/news" className='link'>Новости</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{oneNews.title}</li>
                  </ol>
                </nav>
                <h1 className="title">{oneNews.title}</h1>
                <p>
                  <img className="fluid" src={oneNews.image} alt={oneNews.title} />
                </p>
                <div className="newsDate">
                  <span className="date">{oneNews.date}</span>
                  <span> | </span>
                  <Link href='/news' className='small blue'>Новости</Link>
                </div>
                <hr />
                <div>{oneNews.text}</div>
              </div>
              <CompletedProjects />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
}

export default PageContent