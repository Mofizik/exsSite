import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'ООО "Эксперт Сервис" - Эксплуатация зданий и сооружений',
    template: '%s / ООО "Эксперт Сервис" - Эксплуатация зданий и сооружений'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
