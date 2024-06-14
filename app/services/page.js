import React from 'react'
import Header from '../components/Header'
import CompletedProjects from '../components/CompletedProjects'
import Footer from '../components/Footer'
import OneService from '../components/parts/OneService'
import Link from 'next/link'
import { services } from '@/public/source/services'
export const metadata = {
    title: {
        default: 'Услуги / ООО "Эксперт Сервис" - Эксплуатация зданий и сооружений',
        template: '%s | Услуги / ООО "Эксперт Сервис" - Эксплуатация зданий и сооружений'
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
                                <li className="breadcrumb-item"><Link href="/news">Каталог услуг</Link></li>
                            </ol>
                        </nav>
                        <h1 className="title">Каталог услуг</h1>
                        {services.map(service => <OneService key={service.id} {...service}></OneService>)}
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