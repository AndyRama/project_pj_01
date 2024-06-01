import React from 'react'
import SubHero from '../components/about/SubHero'
import Subscribe from '../components/Subscribe'
import Story from '../components/about/Story'
import Hero from '../components/about/Hero'
import Testimonials from '../components/Testimonials'

const Page = () => {
  return (
    <>
      <SubHero
        className="pt-32 pb-10"
        title="Le Coeur de la team"
        subTitle="nos valeurs"
      />
      <Story />
      <Hero className="mb-20" />
      <Testimonials />
      <Subscribe className="py-16 pt-22 lg:py-32" />
    </>
  )
}

export default Page
