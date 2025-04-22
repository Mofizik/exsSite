import React from 'react'
import styles from './OneNews.module.css'
import Link from 'next/link'
const OneNews = (props) => {
  return (
    <div className='itemCardItem'>
        <div className='itemCardImage'>
            <Link href={props.image} className="newsLink"><img src={props.image} className={styles.newsImage} alt="" /></Link>
        </div>
        <div className='itemCardText'>
            <span className="date">{props.date}</span>
            <br />
            <Link href={props.link}><h4 className="sidePageTitle">{props.title}</h4></Link>
            <span className="textSpan">{props.text}</span>
        </div>
    </div>
  )
}

export default OneNews