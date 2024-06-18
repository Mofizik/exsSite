import React from 'react'
import Header from '../components/Header'
import CompletedProjects from '../components/CompletedProjects'
import Footer from '../components/Footer'
import Link from 'next/link'
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
                                <li className="breadcrumb-item">Документы</li>
                            </ol>
                        </nav>
                        <h1 className="title">Документы</h1>
                        <div class="table-responsive">
                          <table class="table">
                              <tbody>
                                <tr>
                                  <th>Название</th>
                                  <th>Дата обновления</th>
                                  <th>Файл</th>
                              </tr>
                              
                                  <tr>
                                      <td>СРО.pdf</td>
                                      <td>18.06.2024</td>
                                      <td><a className="link" href="/documents/СРО.pdf" target="_blank" rel="noopener noreferrer">Скачать файл</a></td>
                                  </tr>
                              
                                  <tr>
                                      <td>Выписка лицензии МЧС.pdf</td>
                                      <td>18.06.2024</td>
                                      <td><a className="link" href="/documents/выписка лицензия МЧС.pdf" target="_blank" rel="noopener noreferrer">Скачать файл</a></td>
                                  </tr>
                          </tbody></table>
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