import React from 'react'
import SubHero from '../components/about/SubHero'
import Subscribe from '../components/Subscribe'
import ContactForm from '../components/ContactForm'
import CardContact from '../components/CardContact'

export const metadata = {
  title: 'Contact Page - Unlcoaching',
}

const page = () => {
  return (
    <>
      <SubHero className="pt-32" title="Contact" />
      <CardContact />
      <ContactForm className="pt-64" />
      <Subscribe className="py-16 pt-32 lg:py-32" />
    </>
  )
}

export default page
