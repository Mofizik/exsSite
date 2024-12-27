import React from 'react'
import styles from './OneNews.module.css'
import Link from 'next/link'
const OneNews = (props) => {
  return (
    <div className={styles.oneNews}>
        <div className={styles.imageContainer}>
            <Link href={props.image} className="newsLink"><img src={props.image} className={styles.newsImage} alt="" /></Link>
        </div>
        <div className="sidePageText">
            <span className="date">{props.date}</span>
            <br />
            <Link href={props.link}><h4 className="sidePageTitle">{props.title}</h4></Link>
            {props.text}
        </div>
    </div>
  )
}

export default OneNews