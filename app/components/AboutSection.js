import React from 'react'
import Link from 'next/link'
const AboutSection = () => {
  return (

            <div className="innerSection">
                <div className="aboutText">
                    <h1 className="title">О компании</h1>
                    <div className='text'>ООО «Эксперт-Сервис» было создано в 2017 г. группой специалистов, опыт каждого из которых в эксплуатации зданий и промышленных комплексов более 15 лет. Предприятие ООО «Эксперт-Сервис» создавалось в первую очередь для качественного комплексного обслуживания объектов недвижимости, как одно из предприятий группы инженерных компаний «ИнТехно».</div>
                    <Link href='/about'><button className="buttonPrimary">Подробнее...</button></Link>
                </div>
                <div >
                    <img src="/images/about.jpeg" className="aboutImage" alt="" />
                </div>
            </div>

  )
}

export default AboutSection