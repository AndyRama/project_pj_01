import React from 'react'
import SubHero from './../components/about/SubHero'
import PricingPack from '../components/prestation/PricingPack'
import PricingDetails from '../components/prestation/PricingDetails'
import PricingEbook from '../components/prestation/PricingEbook'
import FAQ from '../components/prestation/FAQ'
import Subscribe from '../components/Subscribe'
import Testimonials from '../components/Testimonials'

export const metadata = {
  title: 'Unlcoaching by Jeremy Prat',
}
const page = () => {
  return (
    <>
      <SubHero className="pt-32" title="Prestations" />
      <PricingPack />
      <PricingDetails />
      <PricingEbook />
      <FAQ/>
      <Testimonials />
      <SubHero className="hidden lg:contents" />
      <Subscribe className="py-16 lg:py-32 lg:mt-[-40rem] xl:mt-[-38rem]" />
    </>
  )
}

export default page
