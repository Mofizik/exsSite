import React from 'react'
import Header from '../components/Header'
import CompletedProjects from '../components/CompletedProjects'
import Footer from '../components/Footer'
import Link from 'next/link'
import ContactFormFeedBack from '../components/parts/ContactFormFeedBack'
export const metadata = {
    title: "Контакты"
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
                            <li className="breadcrumb-item"><Link href="/news">Контакты</Link></li>
                        </ol>
                    </nav>
                        <h1 className="title">Контакты</h1>
                        <div className="contacts">
                            <div className="contactAddress">
                                <div className="contactTitle">Адрес:</div>

                                <p>
                                660000 Красноярский край,
                                <br/>
                                г.Красноярск,
                                <br/>
                                ул. Телевизорная, 1 стр. 18
                                </p>
                            </div>
                            <div className="contactPhone">
                                <div className="contactTitle">Телефон:</div>
                                <p>
                                    8-800-222-80-85
                                </p>
                                
                            </div>
                            <div className="contactEmail">
                                <div className="contactTitle">E-mail:</div>
                                <p>
                                sale@exs24.ru
                                </p>
                                
                        </div>
                        
                    </div>
                    <h2 className="title">Форма для обратной связи</h2>
                    <div className="card">
                        <div className="cardBody">
                            <ContactFormFeedBack></ContactFormFeedBack>
                        </div>
                    </div>
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