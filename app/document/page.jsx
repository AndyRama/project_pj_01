import React from 'react'
import SubHero from '../components/about/SubHero'

export const metadata = {
  title: 'Privacy - Unlcoaching by Jeremy Prat',
}

const page = () => {
  return (
    <>
      <SubHero
        className="pt-32 pb-24"
        title="Recent Updates"
        subTitle="My Blog"
      />
    </>
  )
}

export default page
