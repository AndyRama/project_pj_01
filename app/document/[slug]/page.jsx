import React from 'react'
import { allInfos } from 'contentlayer/generated'
import DocumentContent from './DocumentContent'
import SubHero from './../../components/about/SubHero'

export async function generateStaticParams() {
  const infos = await allInfos

  return infos.map((info) => ({ slug: info.slug }))
}

export const generateMetadata = async ({ params }) => {
  const info = allInfos.find(
    (info) => info._raw.flattenedPath === 'document/' + params.slug,
  )
  return { title: info?.title, excerpt: info?.excerpt }
}

const page = ({ params }) => {
  const info = allInfos.find(
    (info) => info._raw.flattenedPath === 'document/' + params.slug,
  )
  return (
    <>
      <SubHero
        className="pt-32 capitalize"
        info={info}
        title={info.title}
        subTitle=""
      />
      <DocumentContent info={info} />
    </>
  )
}

export default page
