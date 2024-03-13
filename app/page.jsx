import Hero from './components/Hero'
import CardDescription from './components/CardDescription'
import RecentBlog from './components/RecentBlog'
import SubHero from './components/about/SubHero'
export default function Home() {
  return (
    <>
      <Hero className="pt-32 pb-10 lg-pb:20" />
      <CardDescription className=" bg-[#1D1D1D]" />
      <RecentBlog className="pt-14 pb-15 lg:pb-32" />
      <SubHero className="pt-52" />
    </>
  )
}
