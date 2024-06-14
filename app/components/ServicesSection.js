import React from 'react'
import Service from './parts/Service'
import { services } from '@/public/source/services'
const ServicesSection = () => {
  return (
    <div className='section'>
        <div className="container">
            <h1 className="title">Каталог Услуг</h1>
            <div className="services">
                {services.map(service => <Service key={service.id} {...service} />)}
            </div>
        </div>
    </div>
  )
}

export default ServicesSection