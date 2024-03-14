'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const cardDescriptionRContent = {
  heading: {
    title: 'Philosophie',
    subTitle: 'Mes valeurs',
  },
  content1: {
    img1: '/images/colaborate.jpg',
    description:
      'Allier entraînement rigoureux et nutrition équilibrée pour un mode de vie sain et durable.',
    description1:
      'Je crois fermement que la réussite en matière de fitness réside dans un équilibre entre un entraînement bien structuré et une alimentation adaptée.  ',
  },
}

const CardDescriptionR = ({ className }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const img1 = useTransform(scrollYProgress, [0, 1], ['30%', '-20%'])

  return (
    <section className={`${className}]`} ref={ref}>
      <div className="container px-4 mx-auto">
        {/* Main Card Description - content - Left */}
        <div className="lg:flex justify-center rounded-md py-0 ">
          <div className="lg:w-8/12 lg:flex gap-20 items-center">
            <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative ">
              {/* Card Description - subTitle - Left */}
              {cardDescriptionRContent.heading.subTitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[2px] text-[12.5px] mb-2 inline-block text-orange-400 md:hidden "
                >
                  {cardDescriptionRContent.heading.subTitle}
                </motion.span>
              )}

              {/* CardDescriptionContent - Left - Title */}
              {cardDescriptionRContent.heading.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.3,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-4xl text-white mb-7  md:hidden sm:-pt-20"
                >
                  {cardDescriptionRContent.heading.title}
                </motion.h2>
              )}

              {/* Card Description - Image - Left */}
              <motion.div style={{ y: img1 }} className="z-[2] relative">
                <Image
                  src="/images/colaborate.jpg"
                  className="object-cover
                  !w-full !h-[400] lg:max-w-2xl object-center"
                  width={600}
                  height={800}
                  alt="coaching personel Image"
                />
              </motion.div>
            </div>

            <div className="lg:w-6/12 mt-10">
              {/* Card Description - subTitle - Left */}
              {cardDescriptionRContent.heading.subTitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[2px] text-[12.5px] mb-2  text-orange-400 hidden md:contents"
                >
                  {cardDescriptionRContent.heading.subTitle}
                </motion.span>
              )}

              {/* CardDescriptionContent - Left - Title */}
              {cardDescriptionRContent.heading.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.3,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-4xl text-white mb-7 invisible md:visible"
                >
                  {cardDescriptionRContent.heading.title}
                </motion.h2>
              )}
              {/* Card Description - description Left - 1 */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="leading-relaxed mb-10 text-white "
              >
                {cardDescriptionRContent.content1.description}
              </motion.p>

              {/* Card Description - description Left - 2 */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="leading-relaxed mb-10 text-white "
              >
                {cardDescriptionRContent.content1.description1}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CardDescriptionR
