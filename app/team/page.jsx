import React from 'react'
import SubHero from '../components/about/SubHero'
import Subscribe from '../components/Subscribe'
import Testimonial from '../components/Testimonial'

export const metadata = {
  title: 'Coeur de la Team - Unlcoaching',
}

const page = () => {
  return (
    <>
      <SubHero className="pt-32" title="Le coeur de la team" />
      {/* <Testimonial /> */}
      <Subscribe className="py-16 pt-32 lg:py-32" />
    </>
  )
}

export default page
