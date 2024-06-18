import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <section className="footer">
        <div className="container">
            <div className="footerContent">
                <div className='footerText'>
                    <p>ООО &quot;Эксперт Сервис&quot; 2024</p>
                    <ul className="footerLinks" style={{listStyleType: 'none', margin: '0', padding: '0'}}>
                        <li>
                            <Link className="footerLink" href="/">главная</Link>
                        </li>
                        <li>
                            <Link className="footerLink" href="/about">о компании</Link>
                        </li>
                        <li>
                            <Link className="footerLink" href="/news">новости</Link>
                        </li>
                        <li>
                            <Link className="footerLink" href="/projects">проекты</Link>
                        </li>
                        <li>
                            <Link className="footerLink" href="/documents">документы</Link>
                        </li>
                        <li>
                            <Link className="footerLink" href="/contacts">контакты</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Footer