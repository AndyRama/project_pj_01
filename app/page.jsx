import Hero from './components/Hero'
import CardDescriptionL from './components/CardDescriptionL'
import CardDescriptionR from './components/CardDescriptionR'
import CardDescription from './components/CardDescription'
import RecentBlog from './components/RecentBlog'
import SubHero from './components/about/SubHero'
export default function Home() {
  return (
    <>
      <Hero className="pt-32 pb-10 lg-pb:20" />
      <CardDescriptionL className=" pt-14 pb-15 bg-[#1D1D1D]" />
      <CardDescriptionR className=" pt-14 pb-15 bg-[#111111]" />
      <CardDescription className=" pt-14 pb-15 bg-[#1D1D1D]" />
      <RecentBlog className="pt-14 pb-15 lg:pb-32" />
      <SubHero className="pt-52" />
    </>
  )
}
