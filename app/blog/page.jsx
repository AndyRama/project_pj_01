import React from 'react'
import SubHero from '../components/about/SubHero'
import Subscribe from '@/app/components/Subscribe'

export const metadata = {
  title: 'Blogs - Unlcoaching by Jérémy Prat',
}

const page = ({}) => {
  return (
    <>
      <SubHero
        className="pt-32 capitalize"
        title="Recent Updates"
        subTitle="My Blog"
      />
      <Subscribe className="py-16 pt-32 lg:py-32" />
    </>
  )
}

export default page
