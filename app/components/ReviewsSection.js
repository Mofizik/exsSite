import React from 'react'
import Review from './parts/Review'
import Link from 'next/link'
const ReviewsSection = () => {
  return (
    <div className='section'>
        <div className="container">
            <div className="reviewsSection">
              <h1 className="title">Отзывы</h1>
              <div className="reviews">
                  <Review image="/images/reviews/1.jpg" title="Общество с ограниченной ответственностью «ИнТехно»" link="/reviews/1"></Review>
                  <Review image="/images/reviews/2.jpg" title="Страховое публичное акционерное общество «Ингосстрах»" link="/reviews/2"></Review>
              
              </div>
              <div className="center">
                <Link href='/reviews'><button className="buttonPrimary , reviewsButton">Все отзывы...</button></Link>
                <Link href='/contacts'><div className="buttonPrimary , reviewsButton">Оставить отзыв</div></Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewsSection