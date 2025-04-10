'use client';
import React, { useState, useEffect } from 'react';
import styles from './scrollProjects.module.css';

const ScrollProject = () => {
  return (
    <div className={styles.scrollContainer}>
      <div
        className={styles.scrollItem}
        style={{
          backgroundImage: `url(/images/blue-smoke.jpg)`,
          display: 'flex',
        }}
      >
        <div className={styles.textContainer}>
          <h1><strong>Эксперт-Сервис:</strong> Инженерные системы и обслуживание недвижимости с 2017</h1>
          <p>Проектируем, устанавливаем и обслуживаем инженерные системы: вентиляция, отопление, водоснабжение, кондиционирование, освещение, автоматизация. Обеспечиваем комплексное управление и эксплуатацию объектов недвижимости.</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollProject;