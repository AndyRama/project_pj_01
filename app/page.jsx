import Hero from './components/Hero'
import CardDescription from './components/CardDescription'
export default function Home() {
  return (
    <>
      <Hero className="pt-32 pb-10 lg-pb:20" />
      <CardDescription className="py-16 lg:py-32" />
    </>
  )
}
