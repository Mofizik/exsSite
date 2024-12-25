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
                            <li className="breadcrumb-item">Вакансии</li>
                        </ol>
                    </nav>
              <h1 className="title">Вакансии</h1>
              <div className="vacancii">
                <h1 className='vacanciiCity'>Красноярск</h1>
                <h2 className="vacanciiTitle">1. Инженер по вентиляции и кондиционированию</h2>
                <ul className="vacanciiList">
                  <li>Разъездной характер работы.</li>
                    <li>Компенсация ГСМ в случае командировки.</li>
                    <li>Аварийные выезды оплачиваются отдельно.</li>
                    <li>З/п от 35 000 до 45 000, фиксированный оклад + % за новые объекты.</li>
                    <li>Трудоустройство в соответствии с ТК РФ.</li>
                </ul>
                <ul className="vacanciiList">
                    <li>З/п от 60 000 до 120 000 ₽ на руки.</li>
                    <li>Требуемый опыт работы: 1–3 года.</li>
                    <li>Полная занятость, полный день.</li>
                    <li>Официальное трудоустройство с первого дня.</li>
                    <li>Лояльное руководство.</li>
                </ul>
                <p><strong>Обязанности:</strong></p>
                <ul className="vacanciiList">
                    <li>Производство монтажных работ на объектах: прокладка кабельных линий, монтаж и расключение приборов и датчиков.</li>
                    <li>Помощь в производстве пусконаладочных работ совместно с инженером.</li>
                </ul>
                <p><strong>Требования:</strong></p>
                <ul className="vacanciiList">
                    <li>Профильное образование.</li>
                    <li>Умение читать схемы: электрические, функциональные.</li>
                    <li>Знание проектно-сметной документации.</li>
                    <li>Знание устройства приборов КИПиА.</li>
                </ul>
                <h2 className="vacanciiTitle">2. Электрогазосварщик по работе с трубами</h2>
                <ul className="vacanciiList">
                    <li>З/п от 80 000 до 100 000 ₽ на руки.</li>
                    <li>Полная занятость.</li>
                    <li>Выплата заработной платы два раза в месяц (стабильно и без задержек).</li>
                    <li>Дружный коллектив.</li>
                </ul>
                <p><strong>Обязанности:</strong></p>
                <ul>
                    <li>Сварка трубопроводов систем отопления и водоснабжения.</li>
                    <li>Монтаж запорной арматуры.</li>
                    <li>Монтаж УУТЭ, ИТП, ПНС.</li>
                </ul>
                <p><strong>Требования:</strong></p>
                <ul>
                    <li>Ответственность.</li>
                    <li>Исполнительность.</li>
                    <li>Стремление работать на результат.</li>
                    <li>Умение читать проектную документацию.</li>
                    <li>Умение работать с электроинструментом.</li>
                </ul>
                <h1 className="vacanciiCity"><strong>Абакан</strong></h1>
                <h2 className="vacanciiTitle">1.    Управляющий объектом</h2>
                <ul className="vacanciiList">
                <li>Испытательный срок 3 месяца.</li>
                <li>График работ с 08.00 до 17.00 (пятидневка);</li>
                <li>З/п 45 000;</li>
                <li>Трудоустройство в соответствии в ТК РФ.</li>
                </ul>
                <h2 className="vacanciiTitle">2.    Инженер КИПиА</h2>
                <ul className="vacanciiList">
                <li>Испытательный срок 3 месяца.</li>
                <li>График работ с 08.00 до 17.00 (пятидневка);</li>
                <li>З/п на испытательном сроке 30 000, после испытательного срока 35 000;</li>
                <li>Трудоустройство в соответствии в ТК РФ.</li>
                </ul>
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