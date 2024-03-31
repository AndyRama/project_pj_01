import React from 'react'
import SubHero from '../components/about/SubHero'
import Subscribe from '@/app/components/Subscribe'
import Pricing from '@/app/components/Pricing'

export const metadata = {
  title: 'Prestations Unlcoaching',
}

const page = () => {
  return (
    <>
      <SubHero className="pt-32" title="Prestations" />
      <Pricing className="mt-20 mb-20" />
      <SubHero className="pt-32" />
      <Subscribe className="py-16 pt-32lg:py-32 " />
    </>
  )
}

export default page
