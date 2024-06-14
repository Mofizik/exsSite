import React from 'react'
import Header from '../components/Header'
import CompletedProjects from '../components/CompletedProjects'
import Footer from '../components/Footer'
import Link from 'next/link'
export const metadata = {
    title: 'Цены'
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
                                <li className="breadcrumb-item"><Link href="/news">Цены</Link></li>
                            </ol>
                        </nav>
                        <h1 className="title">Цены</h1>
                        <div class="table-responsive">
                          <table class="table">
                              <tbody>
                                <tr>
                                  <th>Услуга</th>
                                  <th>Дата обновления</th>
                                  <th>Файл</th>
                              </tr>
                              
                                  <tr>
                                      <td>Прайс-лист: Вентиляция</td>
                                      <td>01.03.2019</td>
                                      <td><a className="link" href="/web/20220517170614/http://www.exs24.ru/data/%D0%9F%D1%80%D0%B0%D0%B9%D1%81_-_%D0%BB%D0%B8%D1%81%D1%82_%D0%BE%D1%82_01.02.2019%D0%B3._2.pdf" target="_blank">Скачать файл</a></td>
                                  </tr>
                              
                                  <tr>
                                      <td>Прайс-лист: Кондиционеры</td>
                                      <td>02.03.2019</td>
                                      <td><a className="link" href="/web/20220517170614/http://www.exs24.ru/data/%D0%9F%D1%80%D0%B0%D0%B9%D1%81_-_%D0%BB%D0%B8%D1%81%D1%82_%D0%BE%D1%82_01.02.2019%D0%B3._2_FqvDwfv.pdf" target="_blank">Скачать файл</a></td>
                                  </tr>
                              
                                  <tr>
                                      <td>Прайс-лист: Электрооборудование</td>
                                      <td>03.03.2019</td>
                                      <td><a className="link" href="/web/20220517170614/http://www.exs24.ru/data/%D0%9F%D1%80%D0%B0%D0%B9%D1%81_-_%D0%BB%D0%B8%D1%81%D1%82_%D0%BE%D1%82_01.02.2019%D0%B3._2_DeWQM87.pdf" target="_blank">Скачать файл</a></td>
                                  </tr>
                              
                                  <tr>
                                      <td>Прайс-лист: Теплоснабжение</td>
                                      <td>04.03.2019</td>
                                      <td><a className="link" href="/web/20220517170614/http://www.exs24.ru/data/%D0%9F%D1%80%D0%B0%D0%B9%D1%81_-_%D0%BB%D0%B8%D1%81%D1%82_%D0%BE%D1%82_01.02.2019%D0%B3._2_KUFrGI9.pdf" target="_blank">Скачать файл</a></td>
                                  </tr>
                              
                                  <tr>
                                      <td>Прайс-лист: ОПС и пожаротушение</td>
                                      <td>05.03.2019</td>
                                      <td><a className="link" href="/web/20220517170614/http://www.exs24.ru/data/%D0%9F%D1%80%D0%B0%D0%B9%D1%81_-_%D0%BB%D0%B8%D1%81%D1%82_%D0%BE%D1%82_01.02.2019%D0%B3._2_YWP8Fpj.pdf" target="_blank">Скачать файл</a></td>
                                  </tr>
                              
                                  <tr>
                                      <td>Прайс-лист: Телеинспекция</td>
                                      <td>01.04.2019</td>
                                      <td><a className="link" href="/web/20220517170614/http://www.exs24.ru/data/%D0%9F%D1%80%D0%B0%D0%B9%D1%81_-_%D0%BB%D0%B8%D1%81%D1%82_%D0%BE%D1%82_01.02.2019%D0%B3._2_jARfRDO.pdf" target="_blank">Скачать файл</a></td>
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