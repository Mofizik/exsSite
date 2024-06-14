import React from 'react'
import Header from '../components/Header'
import CompletedProjects from '../components/CompletedProjects'
import Footer from '../components/Footer'
import Link from 'next/link'
export const metadata = {
  title: 'Вакансии'
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
                            <li className="breadcrumb-item"><Link href="/news">Вакансии</Link></li>
                        </ol>
                    </nav>
              <h1 className="title">Вакансии</h1>
              <div className="vacancii">
                <strong>Красноярск</strong>
                <br />
                <br />
                1. Инженер по вентиляции и кондиционированию
                <br />
                <br />
                <ul className="vacanciiList">
                  <li>Разъездной характер работы.</li>
                  <br/>
                    <li>Компенсация ГСМ в случае командировки.</li>
                    <br/>
                    <li>Аварийные выезды оплачиваются отдельно.</li>
                    <br/>
                    <li>З/п от 35 000 до 45 000, фиксированный оклад + % за новые объекты.</li>
                    <br/>
                    <li>Трудоустройство в соответствии с ТК РФ.</li>
                    <br/>
                </ul>
                <strong>Абакан</strong>
                <br />
                <br />
                1.    Управляющий объектом
                <br />
                <br />
                <ul className="vacanciiList">
                <li>Испытательный срок 3 месяца.</li>
                <br/>
                <li>График работ с 08.00 до 17.00 (пятидневка);</li>
                <br/>
                <li>З/п 45 000;</li>
                <br/>
                <li>Трудоустройство в соответствии в ТК РФ.</li>
                <br/>
                </ul>
                2.    Инженер КИПиА
                <br />
                <br />
                <ul className="vacanciiList">
                <li>Испытательный срок 3 месяца.</li>
                <br/>
                <li>График работ с 08.00 до 17.00 (пятидневка);</li>
                <br/>
                <li>З/п на испытательном сроке 30 000, после испытательного срока 35 000;</li>
                <br/>
                <li>Трудоустройство в соответствии в ТК РФ.</li>
 
                </ul>
                <br/>
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