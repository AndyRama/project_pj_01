'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const statContent = {
  stats: [
    {
      number: '+ 350',
      label: 'Transformations réussit',
    },
    {
      number: '+ 8',
      label: 'Années expériences',
    },
  ],
}

const heroContent = {
  intro: {
    title: 'Coaching ',
    subTitle: 'Personnel',
    description:
      'Allier entraînement rigoureux et nutrition équilibrée pour un mode de vie sain et durable.',
    btn: {
      href: '/about',
      label: '🧡 De la team !',
    },
  },
}

const Hero = ({ className }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ['30%', '-20%'])

  return (
    <section className={`${className}`} ref={ref}>
      {/* Image - main - bg-cover  */}
      <div
        className="md-h-[110vh] -mt-[125px] bg-fixed bg-center bg-cover "
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dbtnehfrf/image/upload/v1710337493/Component_1_lzksva.jpg')`,
        }}
      >
        <div className="container px-6 mx-auto pt-28 md:pt-32">
          <div className="md:flex justify-between items-center space-x-0 ">
            <div className="lg:w-8/12 lg:mb-32">
              <div className="grid grid-cols-2">
                {statContent.stats.map((stat, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2, duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                    className="text-center text-white lg:text-left mb-10"
                    key={stat.label}
                  >
                    <strong className="text-white lg:text-left text-5xl xl:text-[64px] font-bold leading-tight ">
                      {stat.number}
                    </strong>
                    <br />
                    <span className="text-bold">{stat.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Content left - title */}
              {heroContent.intro.title && (
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  data-testid="hero-title"
                  className=" text-white font-bold text-6xl md:text-6xl lg:text-8xl w-auto lg:w-screen max-w-xl mb-2"
                >
                  {heroContent.intro.title}
                </motion.h1>
              )}

              {/* Content left - subTitle */}
              {heroContent.intro.subTitle && (
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  data-testid="hero-subTitle"
                  className=" text-orange-400 font-bold text-6xl md:text-6xl lg:text-8xl w-auto lg:w-screen max-w-xl mb-4 md:mb-8"
                >
                  {heroContent.intro.subTitle}
                </motion.h1>
              )}

              {/* Content left - description */}
              {heroContent.intro.description && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="leading-relaxed text-white md:w-[400px] max-w-xl
                  text-xl xl:text-2xl mb-10 lg:mb-16"
                >
                  {heroContent.intro.description}
                </motion.p>
              )}

              {/* btn link */}

              {heroContent.intro.btn.label && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={heroContent.intro.btn.href}
                    alt="Team Page redirection"
                    className="transistion-all duration-300 ease-in-out text-[14px] 
                    tracking-[2px] font-bold uppercase bg-white py-4 px-5
                    rounded text-orange-400 inline-block hover:bg-transparent border hover:text-white hover:shadow-2xl mb-10"
                  >
                    {heroContent.intro.btn.label}
                  </Link>
                </motion.button>
              )}
            </div>

            {/* Image right */}

            <div className="md:w-6/12 ">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delai: 0.4,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                style={{ y: imgScroll1 }}
                className="z-[2] relative bg-cover bg-center"
              >
                <Image
                  src="/images/jeremy3.jpg"
                  width={800}
                  height={900}
                  alt="hero image"
                  className="rounded-md h-[300px] w-[400px] md:h-[400px] lg:w-[800px] lg:h-[600px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
