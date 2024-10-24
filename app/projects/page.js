import React from 'react'
import PageContent from './PageContent'
export const metadata = {
    title: {
        default: 'Выполненные проекты / ООО "Эксперт Сервис" - Эксплуатация зданий и сооружений',
        template: '%s | Выполненные проекты / ООО "Эксперт Сервис" - Эксплуатация зданий и сооружений'
    }
}
const page = () => {
  return (
    <PageContent></PageContent>
  )
}
export const revalidate = 3600;
export default page