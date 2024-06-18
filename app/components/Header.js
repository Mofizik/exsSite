'use client'
import React, { useState, useEffect} from 'react'
import styles from './Header.module.css'
import Link from "next/link"
import tailwindConfig from '@/tailwind.config'
import FeedBackCall from './parts/FeedBackCall'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [animateContent, setAnimateContent] = useState(false)
    const [linksDisplay, setLinksDisplay] = useState('')
    const [slogan, setSlogan] = useState()

    useEffect(() => {
        setLinksDisplay(window.innerWidth > 768 ? 'flex' : 'none')
        setSlogan(window.innerWidth > 768 ? 
            (<div>
                <h2 className={styles.slogan}>
                комплексные
                <br />
                инженерные
                <br />
                решения
                <br />
                </h2>
            </div>) : (<h2 className={styles.slogan}>комплексные инженерные решения</h2>))
    }, [])
    const openFeedBack = () => {
        console.log('Заказать звонок')
        setOpenMenu(true)
        setTimeout(() => setAnimateContent(true), 10)  // Add a slight delay to trigger the animation
    }
    
    const closeFeedBack = () => {
        console.log('Закрыть форму')
        setAnimateContent(false)
        setTimeout(() => setOpenMenu(false), 300)  // Wait for the animation to complete
    }
    const openLinks = () => {
        console.log('Открыть меню')
        setLinksDisplay(linksDisplay === 'flex' ? 'none' : 'flex')
    }
    
    return (
        <div id="header">
            <section className={styles.siteMenu}>
                <div className="container">
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div style={{paddingTop: "15px", paddingBottom: "15px"}}>
                            <button onClick={openLinks}><img className={styles.toggleIcon} src="/images/toggleIcon.svg" alt="" /></button>
                            <ul style={{display: linksDisplay, gap: '1rem', listStyleType: 'none', margin: '0', padding: '0'}} className={styles.headerLinks}>
                                <li className={styles.headerLinks}><Link href="/" >главная</Link></li>
                                <li className={styles.headerLinks}><Link href="/about" >о компании</Link></li>
                                <li className={styles.headerLinks}><Link href="/news" >новости</Link></li>
                                <li className={styles.headerLinks}><Link href="/projects" >проекты</Link></li>
                                <li className={styles.headerLinks}><Link href="/documents" >документы</Link></li>
                                <li className={styles.headerLinks}><Link href="/vacansii" >вакансии</Link></li>
                                <li className={styles.headerLinks}><Link href="/contacts" >контакты</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <div className='container'>
                    <div className="flex justify-between">
                        <div className={styles.logoBlock}>
                            <Link href='/' className='mr-8'><img src='/images/logo1.jpg' alt='logo' width="211"/></Link>
                            {slogan}
                        </div>
                        <div className={styles.phoneBlock}>
                            <h3 className={styles.phone}>2-918-860</h3>
                            <button onClick={openFeedBack} className={styles.callback}>заказать звонок</button>
                        </div>
                    </div>
                </div>
            </div>
            {openMenu && (
                <div className={`feedBack ${openMenu ? 'show' : ''}`} >
                    <div className="overlay" onClick={closeFeedBack}></div>
                    <div className={`feedBackContent ${animateContent ? 'show' : ''}`}>
                        <FeedBackCall Display={openMenu} CloseForm={closeFeedBack} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header
