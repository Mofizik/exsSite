'use client'
import React, { useState, useEffect } from 'react'

import CompletedNewsItem from './parts/CompletedNewsItem'
import Link from 'next/link'
const CompletedProjects = () => {
  const [news, setNews] = useState([])
  useEffect(() => {
    fetch('/source/news.json')
    .then(res => res.json())
    .then(data => setNews(data))
  }, [])
  return (
    <div className="rightPart">
              <h2 className="title">Новости</h2>
              {news.slice(0, 5).map(news => <CompletedNewsItem key={news.id} {...news} />)}
              <div className="center"><button className="buttonPrimary"><Link href="/news">Все новости..</Link>.</button></div>
    </div>
  )
}

export default CompletedProjects