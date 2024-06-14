import React from 'react'
import Link from 'next/link'
const BreadCrumb = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link href="/" className='link'>Главная страница</Link></li>
        <li className="breadcrumb-item current"><Link href="/news">О компании</Link></li>
        <li className="breadcrumb-item current" aria-current="page">Новость</li>
      </ol>
    </nav>
  )
}

export default BreadCrumb