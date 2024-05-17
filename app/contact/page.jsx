import React from 'react'
import SubHero from '../components/about/SubHero'
import Subscribe from '../components/Subscribe'
import ContactForm from '../components/ContactForm'
import CardCategory from '../components/CardCategory'
import CardContact from '../components/CardContact'

export const metadata = {
  title: 'Contact Page - Unlcoaching',
}

const page = () => {
  return (
    <>
      <SubHero className="pt-32" title="Contacte" />
      <CardContact />
      <ContactForm className="pt-50" />
      <Subscribe className="py-16 lg:py-32" />
    </>
  )
}

export default page
