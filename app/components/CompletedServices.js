import React from 'react'
import ServiceItem from './parts/ServiceItem'

const CompletedServices = () => {
  const servicesList = [
    {
      image: '/images/services/1.jpg',
      title: 'Заголовок услуги',
      link: '/services/1'
    },
    {
      image: '/images/services/2.jpg',
      title: 'Заголовок услуги',
      link: '/services/2'
    },
    {
      image: '/images/services/3.jpg',
      title: 'Заголовок услуги',
      link: '/services/3'
    },
    {
      image: '/images/services/4.jpg',
      title: 'Заголовок услуги',
      link: '/services/4'
    }
  ]
  return (
    <div className="rightPart">
              <h2 className="title">Каталог услуг</h2>
              {servicesList.map(service => 
                <ServiceItem key={service.title} image={service.image} title={service.title} link={service.link}></ServiceItem>)}
    </div>
  )
}

export default CompletedServices