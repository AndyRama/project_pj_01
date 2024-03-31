import React from 'react'
import SubHero from '../components/about/SubHero'
import { allPosts } from 'contentlayer/generated'
import Subscribe from '@/app/components/Subscribe'

export const metadata = {
  title: 'Blogs - Unlcoaching by Jérémy Prat',
}

const page = ({ params }) => {
  return (
    <>
      <SubHero
        className="pt-52 pb-24 capitalize"
        title="Recent Updates"
        subTitle="My Blog"
      />

      <Subscribe className="py-16 pt-64 lg:py-32 bg-orange-400" />
    </>
  )
}

export default page
