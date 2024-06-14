import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import CompletedServices from '@/app/components/CompletedServices'
import { services } from '@/public/source/services'
import Link from 'next/link'
export const generateStaticParams = async () => {
    return services.map(service => ({
      serviceid: service.id.toString(),
    }))
  }
const page = ( {params} ) => {
  const oneService = services.find(service => service.id == params.serviceid)
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
                                <li className="breadcrumb-item"><Link href="/news" className='link'>Каталог услуг</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{oneService.title}</li>
                            </ol>
                        </nav>
                        <h1 className="title">{oneService.title}</h1>
                        {oneService.text}
                        <hr />
                    </div>
                    <CompletedServices></CompletedServices>
                    
                </div>
            </div>
        </div>
        <Footer></Footer>
    </main>
  )
}

export default page