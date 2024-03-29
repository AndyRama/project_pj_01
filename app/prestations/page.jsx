import React from 'react'
import SubHero from '../components/about/SubHero'
import Subscribe from '@/app/components/Subscribe'

export const metadata = {
  title: 'Prestations Unlcoaching',
}

const page = () => {
  return (
    <>
      <SubHero className="pt-32" title="Prestations" />
      <Subscribe className="py-16 pt-64 lg:py-32 bg-orange-600" />
    </>
  )
}

export default page
