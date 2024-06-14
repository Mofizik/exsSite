import React from 'react'
import Link from 'next/link'
const NewsItem = (props) => {
  return (
    <div className='newsItem'>
        <div className='newsImage'>
            <img src={props.image} alt="" />
        </div>
        <div className='newsText'>
            <span className="date">{props.date}</span>
            <br />
            <Link href={props.link} className='newsTitle'>{props.title}</Link>
        </div>
    </div>
  )
}

export default NewsItem