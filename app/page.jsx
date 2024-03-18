import Hero from './components/Hero'
import CardDescriptionL from './components/CardDescriptionL'
import CardDescriptionR from './components/CardDescriptionR'
import CardDescription from './components/CardDescription'
import CardGridImage from './components/CardGridImage'
import RecentBlog from './components/RecentBlog'
export default function Home() {
  return (
    <>
      <Hero className="pt-32 pb-0 lg-pb:20" />
      <CardDescriptionL className=" pt-14 pb-15" />
      <CardDescriptionR className=" pt-14 pb-15 sm:bg-[#1D1D1D]" />
      <CardGridImage />
      <CardDescription className="pb-15 bg-[#1D1D1D]" />
      <RecentBlog className="pb-5 lg:pb-32" />
    </>
  )
}
