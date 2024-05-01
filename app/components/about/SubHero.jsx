'use client'

import React from 'react'
import { motion } from 'framer-motion'

const subHeroContent = {
  heading: {
    title: '',
    subTitle: '',
  },
}
const SubHero = ({ className, title, subTitle }) => {
  if (title) {
    title = title
  } else {
    title = subHeroContent.heading.title
  }
  if (subTitle) {
    subTitle = subTitle
  } else {
    subTitle = subHeroContent.heading.subTitle
  }

  return (
    <section className={`${className}`}>
      {/* Image - main - bg-cover  */}
      <div
        className="h-[50vh] xl:h-[50vh] w-[max] -mt-[150px] bg-center bg-cover "
        style={{
          backgroundImage: `url('/images/salle-de-sport.jpg')`,
        }}
      >
        <div className="lg:flex lg:w-10/12 mx-auto items-center justify-between">
          <div className="container px-4 mx-auto pt-20">
            {/* Content center - subtitle */}
            <div className="text-center lg:max-w-3xl mx-auto mt-[75px] md:mt-[150px]">
              {subTitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.03, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-[12.5px]
                  mb-5 inline-block text-gray-500"
                >
                  {subTitle}
                </motion.span>
              )}

              {/* Content center - title */}
              {title && (
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.06, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-4xl text-bold md:text-5xl xl:text-7xl text-white"
                >
                  {title}
                </motion.h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubHero
