import React from 'react'
import Header from '../components/Header'
import CompletedProjects from '../components/CompletedProjects'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
export const metadata = {
    title: 'Отзывы, рекомендации'
}
const page = () => {
    const reviewsList = [
        {
            image: "/images/reviews/1.jpg",
            author: "ООО «ИнТехно»",
            description: "Предметом сотрудничества с ООО «Эксперт-Сервис» является выполнение монтажных работ по системам контроля и управления доступом, охрано-пожарной сигнализации, видеонаблюдения, комплексной безопасности зданий, системы управления зданием."
        },
        {
            image: "/images/reviews/2.jpg",
            author: "ООО «ИнТехно»",
            description: "Описание отзыва"
        },
        {
            image: "/images/reviews/2.jpg",
            author: "ООО «ИнТехно»",
            description: "Описание отзыва"
        }

    ]
    const title = "Отзывы, рекомендации";
  return (
    <main>
        <Header></Header>
        <div className="section">
            <div className="container">
                <div className="sidePage">
                    <div className="leftPart">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/" className='link'>Главная страница</Link></li>
                                <li className="breadcrumb-item"><Link href="/news" className='link'>О компании</Link></li>
                                <li className="breadcrumb-item current" aria-current="page">{title}</li>
                            </ol>
                        </nav>
                        <h1 className="title">{title}</h1>
                        <div className="allReviews">
                            {reviewsList.map((item, index) => (
                                <div className="review" key={index}>
                                    <p>
                                        <Link href={item.image} target="_blank" className='oneReviewImage'>
                                        <img src={item.image} alt="" />
                                        </Link>
                                    </p>
                                    <div className="reviewAuthor">
                                        <div className="reviewAuthorInfo">
                                            <p className="strong">{item.author}</p>
                                            <p className="description">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <CompletedProjects></CompletedProjects>
                    
                </div>
            </div>
        </div>
        <Footer></Footer>
    </main>
  )
}

export default page