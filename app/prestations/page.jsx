import React from 'react'
import SubHero from '../components/about/SubHero'
import Subscribe from '@/app/components/Subscribe'
import PricingPack from '@/app/components/PricingPack'
import PricingEbook from '@/app/components/PricingEbook'

export const metadata = {
  title: 'Prestations Unlcoaching',
}

const page = () => {
  return (
    <>
      <SubHero className="pt-32" title="Prestations" />
      <PricingPack />
      <PricingEbook />
      <SubHero className="pt-32" />
      <Subscribe className="py-16 pt-32 lg:py-32 " />
    </>
  )
}

export default page
