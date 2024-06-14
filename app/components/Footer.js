import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <section className="footer">
        <div className="container">
            <div className="footerContent">
                <div className='footerText'>
                    <p>ООО &aposЭксперт Сервис&apos 2019</p>
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
                            <Link className="footerLink" href="/services">услуги</Link>
                        </li>
                        <li>
                            <Link className="footerLink" href="/price">цены</Link>
                        </li>
                        <li>
                            <Link className="footerLink" href="/projects">проекты</Link>
                        </li>
                        <li>
                            <Link className="footerLink" href="/contacts">контакты</Link>
                        </li>
                    </ul>
                </div>
                <div className='footerIcons'>
                    <div className="socialIcons">
                        <Link href=''><img src="/images/icons/facebook.png" alt="" className='footerIcon'/></Link>
                        <Link href=''><img src="/images/icons/vk.png" alt="" className='footerIcon'/></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer