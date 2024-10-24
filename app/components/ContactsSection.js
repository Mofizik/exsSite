import React from 'react'
import Link from 'next/link'
const ContactsSection = () => {
  return (
    <div className="section">
        <div className="container">
            <h1 className="title">Контакты</h1>
            <div className="contacts">
                <div className="contact">
                    <div className="contactTitle">Адрес:</div>

                    <p className="contactText">
                      660020 Красноярский край,
                      <br/>
                      г.Красноярск,
                      <br/>
                      Дудинская 3/2г 
                    </p>
                </div>
                <div className="contact">
                    <div className="contactTitle">Телефон:</div>
                    <p className="contactText">
                    +7 (391)-291-88-60
                      <br/>
                      <Link className='link' href='/contacts'>Заказать обратный звонок</Link>
                    </p>
                    
                </div>
                <div className="contact">
                    <div className="contactTitle">E-mail:</div>
                    <p className="contactText">
                      exs24@yandex.ru
                      <br/>
                      <Link className='link' href='/contacts'>Форма для обратной связи</Link>
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactsSection