import React from "react"
import Header from "./components/Header"
import ScrollProjects from "./components/ScrollProjects"
import AboutSection from "./components/AboutSection"
import NewsSection from "./components/NewsSection"
import ServicesSection from "./components/ServicesSection"
import ReviewsSection from "./components/ReviewsSection"
import ContactsSection from "./components/ContactsSection"
import Footer from "./components/Footer"
import FeedBackCall from "./components/parts/FeedBackCall"

export const metadata = {
  title: 'Главная страница / ООО "Эксперт Сервис" - Эксплуатация зданий и сооружений',
}
export default function Home() {
  return (
    <main>
      <div className="firstPart">
        <Header></Header>
        <ScrollProjects></ScrollProjects>
      </div>
      <div className="section">
        <div className="container">
          <AboutSection></AboutSection>
        </div>
      </div>
      
      <NewsSection></NewsSection>
      <ServicesSection></ServicesSection>
      <ReviewsSection></ReviewsSection>
      <ContactsSection></ContactsSection>
      <Footer></Footer>
      
    </main>
  )
}
