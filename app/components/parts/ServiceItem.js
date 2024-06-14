import React from 'react'
import Link from 'next/link'
const ServiceItem = (props) => {
  return (
    <div>
        <Link href={props.link} className="link">
            <img src={props.image} alt="" className='serviceItemImage'/>
        </Link>
        <div className="serviceItemText">
            <Link href={props.link} className="serviceTitle">
                {props.title}
            
            </Link>
        </div>
    </div>
  )
}

export default ServiceItem