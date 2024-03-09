import Hero from './components/Hero'
import CardDescription from './components/CardDescription'
import RecentBlog from './components/RecentBlog'
export default function Home() {
  return (
    <>
      <Hero className="pt-32 pb-10 lg-pb:20" />
      {/* <CardDescription className="py-16 lg:py-32" /> */}
      <RecentBlog />
    </>
  )
}
