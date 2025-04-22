import React from 'react'
import Link from 'next/link'
const Project = (props) => {
  return (
    <div className='itemCardItem'>
        <div className='itemCardImage'>
            <img src={props.image} alt="" />
        </div>
        <div className='itemCardText'>
            <Link href={props.source}><h4 className="sidePageTitle">{props.title}</h4></Link>
            <span className="textSpan">{props.description}</span>

        </div>
    </div>
  )
}

export default Project