import React from 'react'
import Link from 'next/link'
const Service = (props) => {
  return (
    <div className='projectItem'>
        <div className='projectImage'>
            <img src={props.image} alt="" />
        </div>
        <div className='projectText'>
            <Link href={props.source}><h4 className="sidePageTitle">{props.title}</h4></Link>
            {props.description}

        </div>
    </div>
  )
}

export default Service