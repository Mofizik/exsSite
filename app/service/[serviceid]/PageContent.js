'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CompletedNews from '@/app/components/CompletedNews';
import Link from 'next/link';

const PageContent = ({ params }) => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch('/source/services.json')
      .then(res => res.json())
      .then(data => setService(data.map((service, index) => ({ ...service, id: index + 1 }))));
  }, []);

  const service = services.find(service => service.id == params.serviceid);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Header />
      <div className="section">
        <div className="container">
          <div className="sidePage">
            <div className="leftPart">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link href="/" className="link">Главная страница</Link></li>
                  <li className="breadcrumb-item"><Link href="/service" className="link">Обслуживание</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">{service.title}</li>
                </ol>
              </nav>
              <h1 className="title">{service.title}</h1>
              <p>
                <img className="fluid" src={service.image} alt={service.title} />
              </p>
              <hr />
              {service.text}
              <hr />
            </div>
            <CompletedNews />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PageContent;