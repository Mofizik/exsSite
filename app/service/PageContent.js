'use client'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CompletedNews from '../components/CompletedNews'
import Link from 'next/link'
import Service from '../components/parts/Service'
const PageContent = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
      fetch('/source/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
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
                                <li className="breadcrumb-item">Обслуживание</li>
                            </ol>
                        </nav>
                        <h1 className="title">Обслуживание</h1>
                        {services.map(service => <Service key={service.id} {...service}></Service>)}
                    </div>
                    <CompletedNews></CompletedNews>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </main>
  )
}

export default PageContent