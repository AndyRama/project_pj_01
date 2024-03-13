'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const cardDescriptionContent = {
  heading: {
    title: 'Qui suis-je ?',
    subTitle: 'Mes valeurs',
  },
  content: {
    img: '/images/jeremy2.jpg',
    description:
      "Bienvenue dans mon univers, je suis Jeremy, un ancien militaire qui a trouvé sa passion dans le coaching sportif et l'athlétisme de haut niveau en tant qu'athlète compétitif en Men's Physique IFBB.",
    description1:
      "Fort de mon expérience dans l'armée, j'ai forgé ma détermination et mon engagement envers l'excellence, que ce soit sur le plan physique ou mental.",
    description2:
      "Mon parcours m'a conduit à briller sur des scènes nationales et internationales telles que le championnat de France et la Diamond Cup, où j'ai pu démontrer mon savoir-faire et ma passion pour le fitness. Ma mission est simple : vous aider à réaliser vos objectifs de fitness, qu'ils soient modestes ou ambitieux.",
    description3:
      'Allier entraînement rigoureux et nutrition équilibrée pour un mode de vie sain et durable. Je crois fermement que la réussite en matière de fitness réside dans un équilibre entre un entraînement bien structuré et une alimentation adaptée.',
  },
  heading1: {
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

const CardDescription = ({ className }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const img1 = useTransform(scrollYProgress, [0, 1], ['30%', '-20%'])
  const img2 = useTransform(scrollYProgress, [0, 1], ['100%', '100%'])

  return (
    <section className={`${className}]`} ref={ref}>
      <div className="container px-4 mx-auto  ">
        {/* Main Card Description - content - Left */}
        <div className="bg-black lg:flex justify-center md:py-16 rounded-md py-0 ">
          <div className="lg:w-8/12 lg:flex gap-20 items-center">
            <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative ">
              {/* Card Description - Image - Right */}
              <motion.div style={{ y: img1 }} className="z-[2] relative">
                <Image
                  src="/images/jeremy2.jpg"
                  className="object-cover
                  !w-full !h-[400] lg:max-w-2xl object-center"
                  width={700}
                  height={900}
                  alt="Card Description Image"
                />
              </motion.div>
            </div>

            <div className="lg:w-6/12 mt-20">
              {/* Card Description - subTitle - Left */}
              {cardDescriptionContent.heading.subTitle && (
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
                  className="uppercase tracking-[2px] text-[12.5px] mb-2 inline-block text-orange-400"
                >
                  {cardDescriptionContent.heading.subTitle}
                </motion.span>
              )}

              {/* CardDescriptionContent - Left - Title */}
              {cardDescriptionContent.heading.title && (
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
                  {cardDescriptionContent.heading.title}
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
                {cardDescriptionContent.content.description}
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
                className="leading-relaxed mb-10 text-white text-block"
              >
                {cardDescriptionContent.content.description1}
              </motion.p>

              {/* Card Description - description Left - 3 */}
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
                {cardDescriptionContent.content.description2}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Main Card Description - content - Right */}
        <div className="bg-black lg:flex justify-center py-16 mt-20 rounded-md">
          <div className=" lg:w-8/12 lg:flex gap-20 items-center">
            <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative">
              {/* Card Description - subTitle - Left */}
              {cardDescriptionContent.heading1.subTitle && (
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
                  className="uppercase tracking-[2px] text-[12.5px] mb-2 inline-block text-orange-400"
                >
                  {cardDescriptionContent.heading1.subTitle}
                </motion.span>
              )}

              {/* CardDescriptionContent - Left - Title */}
              {cardDescriptionContent.heading1.title && (
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
                  {cardDescriptionContent.heading1.title}
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
                {cardDescriptionContent.content1.description}
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
                {cardDescriptionContent.content1.description1}
              </motion.p>
            </div>

            {/* Card Description - Image - Left */}
            <div className="lg:w-6/12 mt-10">
              <motion.div style={{ y: img1 }} className="z-[2] relative">
                <Image
                  src="/images/colaborate.jpg"
                  className="object-cover
                  !w-full !h-[400] lg:max-w-2xl object-center"
                  width={400}
                  height={400}
                  alt="coaching personel Image"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  )
}
export default CardDescription
