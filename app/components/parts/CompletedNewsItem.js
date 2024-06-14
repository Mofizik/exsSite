import React from 'react'
import Link from 'next/link'
const ProjectItem = (props) => {
  return (
    <div className='project'>
        <p>
            <Link href={props.link} className="link">
                <img className="newsItemImage" src={props.image} alt="" />
            </Link>
        </p>
        <p>
            <span className="date">{props.date}</span>
            <br />
            <Link href={props.link} className="link">{props.title}</Link>
        </p>
    </div>
  )
}

export default ProjectItem