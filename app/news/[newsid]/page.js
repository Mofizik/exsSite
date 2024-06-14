import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import CompletedProjects from '@/app/components/CompletedProjects'
import Link from 'next/link'
import { news } from '@/public/source/news'
export const generateStaticParams = async () => {
    return news.map(item => ({
      newsid: item.id.toString(),
    }))
  }
const page = ({params}) => {
  const oneNews = news.find(item => item.id == params.newsid)
  console.log('oneNews', oneNews)
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
                                <li className="breadcrumb-item"><Link href="/news" className='link'>Новости</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{oneNews.title}</li>
                            </ol>
                        </nav>
                        <h1 className="title">{oneNews.title}</h1>
                        <p>
                            <img className="fluid" src={oneNews.image} alt="" />
                        </p>
                        <div className="newsDate">
                            <span className="date">{oneNews.date}</span>
                            <span> | </span>
                
                            <Link href='/news' className='small blue'>Новости</Link>
                        </div>
                        <hr></hr>
                        {oneNews.text}
                        
                    </div>
                    <CompletedProjects></CompletedProjects>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </main>
  )
}

export default page