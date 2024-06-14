import React from 'react'
import ProjectItem from './parts/ProjectItem'
import NewsItem from './parts/NewsItem'
import CompletedNewsItem from './parts/CompletedNewsItem'
import { news } from '@/public/source/news'
const CompletedProjects = () => {
    
  return (
    <div className="rightPart">
              <h2 className="title">Новости</h2>
              {news.map(news => <CompletedNewsItem key={news.id} {...news} />)}
    </div>
  )
}

export default CompletedProjects