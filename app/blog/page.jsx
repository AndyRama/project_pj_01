import React from 'react'
import SubHero from '../components/about/SubHero'
import Subscribe from '../components/Subscribe'

export const metadata = {
  title: 'Blogs - Unlcoaching by Jéremy Prat',
}

const page = () => {
  return (
    <>
      <SubHero className="pt-32" title="Blog & Articles" />
      <Subscribe className="py-16 pt-64 lg:py-32 " />
    </>
  )
}

export default page
