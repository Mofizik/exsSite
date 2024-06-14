import Link from 'next/link'
import React from 'react'
const Service = (props) => {
  return (
    <div className='service'>
        <Link href={props.link}><img src={props.image} className="serviceImage" alt="" /></Link>
        <Link href={props.link} className="serviceTitle">
            {props.title}
        </Link>
        <Link href={props.link} className='serviceLink'><button className="buttonPrimary">Подробнее...</button></Link>
    </div>
  )
}

export default Service