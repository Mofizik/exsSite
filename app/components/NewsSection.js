import React from 'react'
import Link from 'next/link'
import NewsItem from './parts/NewsItem'
import tailwindConfig from '@/tailwind.config'
import { news } from '@/public/source/news'
const NewsSection = () => {
  return (
    <div className="section">
        <div className="container">
            <div className="newsSection">
                <h1 className="title">Новости</h1>
                <div className="news">
                    <div className="newsList">
                        {news.map(news => <NewsItem key={news.id} {...news} />)}
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