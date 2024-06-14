'use client';
import React, { useState, useEffect } from 'react';
import styles from './scrollProjects.module.css';
import Link from 'next/link';
import { projects } from '@/public/source/projects';
const ScrollProject = () => {
  const images = projects
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const [direction, setDirection] = useState('');

  const handlePrev = () => {
    setDirection('prev');
    setNextIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setDirection('next');
    setNextIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    if (nextIndex !== null) {
      const timeout = setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex(null);
      }, 300); // Transition duration in milliseconds
      return () => clearTimeout(timeout);
    }
  }, [nextIndex]);

  return (
    <div className={styles.scrollContainer}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.scrollItem} ${
            index === currentIndex ? styles.current : ''
          } ${index === nextIndex ? styles[direction] : ''}`}
          style={{
            backgroundImage: `url(${image.image})`,
            display: index === currentIndex || index === nextIndex ? 'flex' : 'none',
          }}
        >
          <div className={styles.arrowContainer}>
            <div className={styles.arrowWrap}>
              <svg className={styles.arrowLeft} onClick={handlePrev} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
              </svg>
              <svg className={styles.arrow} onClick={handleNext} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
              </svg>
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.textContainer}>
              <div className={styles.text}>
                <h3 className='h3'>{image.title}</h3>
                <h5>{image.description}</h5>
              </div>
              <div className='absolute bottom-0 right-0 text-white'>
                <Link href='/projects'><button className={styles.button}>Подробнее...</button></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollProject;
