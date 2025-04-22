import React from 'react'
import Link from 'next/link'
import styles from './OneService.module.css'
const OneService = (props) => {
  return (
    <div className={styles.oneService}>
        <Link href={props.link}><img src={props.image} className={styles.serviceImage} alt="" /></Link>
        <div className="sidePageText">
            <Link href={props.link}>
                <h4 className="sidePageTitle">{props.title}</h4>
            </Link>
            <span className="textSpan">{props.text}</span>
        </div>

    </div>
  )
}

export default OneService