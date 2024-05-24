import React from 'react'
import SubHero from '../components/about/SubHero'
import Posts from '../components/blog/Posts'
import Subscribe from '../components/Subscribe'

export const metadata = {
  title: 'Blogs - Unlcoaching by Jérémy Prat',
}

const page = () => {
  return (
    <>
      <SubHero className="pt-32" title="Dernier articles" subTitle="Mon blog" />
      <Posts className="pt-0 pb-52" itemsPerPage={9} />
      <Subscribe className="py-16 lg:py-32" />
    </>
  )
}

export default page
