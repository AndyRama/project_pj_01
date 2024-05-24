import React from 'react'
import SubHero from '../components/about/SubHero'
import Subscribe from '../components/Subscribe'
import Story from '../components/about/Story'
import Hero from '../components/about/Hero'

const Page = () => {
  return (
    <>
      <SubHero
        className="pt-32"
        title="Le Coeur de la team"
        subTitle="nos valeurs"
      />
      <Story />
      <Hero />
      <Subscribe className="py-16 pt-32 lg:py-32" />
    </>
  )
}

export default Page
