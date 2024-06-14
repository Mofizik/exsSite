import React from 'react'
import Link from 'next/link'
const Review = (props) => {
  return (
    <div className='review'>
        <div className='reviewImageContainer'>
            <Link href={props.link}><img src={props.image} className="reviewImage" alt="" /></Link>
        </div>
        <div className='reviewText'>
            <Link href={props.link} className="link">{props.title}</Link>
            <p className="small">Предметом сотрудничества с ООО «Эксперт-Сервис» является выполнение монтажных работ по системам контроля и управления доступом, охрано-пожарной сигнализации, видеонаблюдения, комплексной безопасности зданий, системы управления зданием.</p>
        </div>
        
    </div>
  )
}

export default Review