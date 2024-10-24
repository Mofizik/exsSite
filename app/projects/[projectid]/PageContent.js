'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CompletedNews from '@/app/components/CompletedNews';
import Link from 'next/link';

const PageContent = ({ params }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/source/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  const project = projects.find(project => project.id == params.projectid);

  if (!project) {
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
                  <li className="breadcrumb-item"><Link href="/projects" className="link">Выполненные проекты</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">{project.title}</li>
                </ol>
              </nav>
              <h1 className="title">{project.title}</h1>
              <p>
                <img className="fluid" src={project.image} alt={project.title} />
              </p>
              <hr />
              {project.text}
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
