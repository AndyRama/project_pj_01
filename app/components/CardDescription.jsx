'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const cardDescriptionLContent = {
  heading: {
    title: 'Mon approche',
    subTitle: 'Mes valeurs',
  },
  content: {
    img: '/images/jeremy4.jpg',
    description:
      "Ma passion pour le fitness et la santé globale m'a amené à devenir coach sportif, spécialisé dans les transformations physiques, la perte de poids, la préparation aux compétitions, et plus encore.",
  },
}

const CardDescriptionL = ({ className }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const img1 = useTransform(scrollYProgress, [0, 1], ['20%', '-20%'])

  return (
    <section className={`${className}]`} ref={ref}>
      <div className="container px-4 mx-auto bg-[#232323] ">
        {/* Main Card Description - content - Left */}
        <div className="lg:flex justify-center rounded-md py-0 ">
          <div className="lg:w-8/12 lg:flex gap-20 items-center">
            <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative">
              {/* Card Description - subTitle - Left */}
              {cardDescriptionLContent.heading.subTitle && (
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
                  className="uppercase tracking-[2px] text-[12.5px] mt-10 mb-2 inline-block text-orange-400"
                >
                  {cardDescriptionLContent.heading.subTitle}
                </motion.span>
              )}

              {/* CardDescriptionLContent - Left - Title */}
              {cardDescriptionLContent.heading.title && (
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
                  className="text-2xl lg:text-4xl text-white mb-7"
                >
                  {cardDescriptionLContent.heading.title}
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
                className="leading-relaxed mb-10 text-white"
              >
                {cardDescriptionLContent.content.description}
              </motion.p>
            </div>

            <div className="lg:w-6/12 mt">
              {/* Card Description - Image - Right */}
              <motion.div style={{ y: img1 }} className="z-[2] relative">
                <Image
                  src="/images/jeremy4.jpg"
                  className="object-cover
                  !w-full !h-[400] max-w-xl object-center rounded-md"
                  width={600}
                  height={500}
                  alt="Card Description Image"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CardDescriptionL
