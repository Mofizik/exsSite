'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import NewsItem from './parts/NewsItem'
import tailwindConfig from '@/tailwind.config'
const NewsSection = () => {

  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('/source/news.json').then(res => res.json()).then(data => setNews(data.map((news, index) => ({ ...news, id: index + 1 , link: `/news/${index + 1}`, source: `/news/${index + 1}` }))))
  }, [])
  return (
    <div className="section">
        <div className="container">
            <div className="newsSection">
                <h1 className="title">Новости</h1>
                <div className="news">
                    <div className="newsList">
                      {news.slice(0, 3).map(newsItem => <NewsItem key={newsItem.id} {...newsItem} />)}
                    </div>
                    <div className='center'>
                      <Link href='/news'><button className="buttonPrimary , newsButton">Все новости...</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsSection