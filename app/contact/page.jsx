import React from 'react'
import SubHero from '../components/about/SubHero'
import ContactForm from '../components/contact/ContactForm'
import CardContact from '../components/contact/CardContact'
import Subscribe from '../components/Subscribe'

const page = () => {
  return (
    <>
      <SubHero className="pt-32 pb-24" title="Contacter" subTitle="pour me" />
      <CardContact />
      <ContactForm className="lg:mt-[-145px] lg:pb-28" />
      <SubHero className="hidden lg:contents pt-32" />
      <Subscribe className="py-16 lg:py-32 lg:mt-[-35rem] xl:mt-[-38rem]" />
    </>
  )
}

export default page
