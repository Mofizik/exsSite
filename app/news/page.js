import React from 'react'
import PageContent from './PageContent'
export const metadata = {
    title: {
        default: 'Новости',
        template: '%s | Новости'
    }
}
const NewsPage = () => {
  return (
    <PageContent></PageContent>
  )
}

export default NewsPage