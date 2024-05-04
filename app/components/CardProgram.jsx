'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const program = {
  heading: {
    title: 'Mes services',
    subTitle: 'programmes',
  },
}

const ProgramContent = {
  card: {
    title: 'Pack 1 Musculation | Homme Femme ',
    subTitle: 'Personnel',
    description:
      'Coaching spécialisé pour les athlètes : si la compétition, le dépassement de soi et la discipline sont essentiels à votre vie et à votre bien être, se fixer des objectifs concrets est un moyen efficace de les atteindre. Je vous propose un suivi musculation et alimentaire personnalisés pour relever les défis que vous vous fixerez.',
    mount: '3 mois (minimum)',
    time: '8h/semaine',
    btn: {
      href: '/team',
      label: 'Ok, je change de vie !',
    },
  },
  card2: {
    title: 'Pack 2 Musculation | Homme Femme ',
    subTitle: 'Personnel',
    description:
      'Coaching spécialisé pour les athlètes : si la compétition, le dépassement de soi et la discipline sont essentiels à votre vie et à votre bien être, se fixer des objectifs concrets est un moyen efficace de les atteindre. Je vous propose un suivi musculation et alimentaire personnalisés pour relever les défis que vous vous fixerez.',
    mount: '3 mois (minimum)',
    time: '8h/semaine',
    btn: {
      href: '/team',
      label: 'Ok, je change de vie !',
    },
  },
  card3: {
    title: 'Pack 3 Musculation | Homme Femme ',
    subTitle: 'Personnel',
    description:
      'Coaching spécialisé pour les athlètes : si la compétition, le dépassement de soi et la discipline sont essentiels à votre vie et à votre bien être, se fixer des objectifs concrets est un moyen efficace de les atteindre. Je vous propose un suivi musculation et alimentaire personnalisés pour relever les défis que vous vous fixerez.',
    mount: '3 mois (minimum)',
    time: '8h/semaine',
    btn: {
      href: '/team',
      label: 'Ok, je change de vie !',
    },
  },
}
const CardProgram = ({ className }) => {
  return (
    <section className={`${className}`}>
      <div className="container px-4 mx-auto w-10/12 mb-16 ">
        {program.heading.subTitle && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.05,
                duration: 0.5,
              },
            }}
            viewport={{ once: true }}
            className="uppercase tracking-[3px] text-sm inline-block 
                 text-orange-400"
          >
            {program.heading.subTitle}
          </motion.span>
        )}
        {program.heading.title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.1,
                duration: 0.5,
              },
            }}
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl text-white"
          >
            {program.heading.title}
          </motion.h2>
        )}
      </div>
      <div className="container px-4 mx-auto">
        <div className="md:flex justify-between space-x-0 border-b border-t-gray-500 mb-10 ">
          <div className="lg:w-8/12">
            {/* Content left - title - card 1 */}
            {ProgramContent.card.title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                data-testid="program-title"
                className=" text-orange-400 font-bold text-2xl w-auto lg:w-screen max-w-xl mb-2"
              >
                {ProgramContent.card.title}
              </motion.h1>
            )}

            {/* Content left - description - card 1 */}
            {ProgramContent.card.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="leading-relaxed text-gray-500 text-justify  max-w-xl text-lg mb-10 lg:mb-16"
              >
                {ProgramContent.card.description}
              </motion.p>
            )}

            {/* btn link - card 1  */}

            {ProgramContent.card.btn.label && (
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
                  href={ProgramContent.card.btn.href}
                  alt="prestations page"
                  className="transistion-all duration-300 ease-in-out text-[14px] 
                    tracking-[2px] font-bold uppercase text-white hover:text-orange-400  hover:border-orange-400 bg-transparent py-4 px-5
                    rounded inline-block border hover:shadow-2xl mb-10"
                >
                  {ProgramContent.card.btn.label}
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
              className="z-[2] relative bg-cover bg-center"
            >
              <Image
                src="/images/post3.jpg"
                width={300}
                height={400}
                alt="program image"
                className="rounded-md h-[300px] w-[400px] "
              />
            </motion.div>
          </div>
        </div>
        <div className="md:flex justify-between space-x-0 border-b border-t-gray-500 mb- mb-10 ">
          <div className="lg:w-8/12 ">
            {/* Content left - title -card 2  */}
            {ProgramContent.card2.title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                data-testid="program-title"
                className=" text-orange-400 font-bold text-2xl w-auto lg:w-screen max-w-xl mb-2"
              >
                {ProgramContent.card2.title}
              </motion.h1>
            )}

            {/* Content left - description - card 2  */}
            {ProgramContent.card2.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="leading-relaxed text-gray-500 text-justify max-w-xl text-lg mb-10 lg:mb-16"
              >
                {ProgramContent.card2.description}
              </motion.p>
            )}

            {/* btn link - card 2 */}

            {ProgramContent.card2.btn.label && (
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
                  href={ProgramContent.card2.btn.href}
                  alt="Team Page redirection"
                  className="transistion-all duration-300 ease-in-out text-[14px] 
                    tracking-[2px] font-bold uppercase bg-transparent py-4 px-5
                    rounded text-white inline-block border hover:text-orange-400  hover:border-orange-400 hover:shadow-2xl mb-10"
                >
                  {ProgramContent.card2.btn.label}
                </Link>
              </motion.button>
            )}
          </div>

          {/* Image right - card 2*/}

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
              className="z-[2] relative bg-cover bg-center"
            >
              <Image
                src="/images/post5.jpg"
                width={300}
                height={400}
                alt="program image"
                className="rounded-md h-[300px] w-[400px] "
              />
            </motion.div>
          </div>
        </div>
        <div className="md:flex justify-between space-x-0 border-b border-t-gray-500 mb-">
          <div className="lg:w-8/12 ">
            {/* Content left - title -card 2  */}
            {ProgramContent.card3.title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                data-testid="program-title"
                className=" text-orange-400 font-bold text-2xl w-auto lg:w-screen max-w-xl mb-2"
              >
                {ProgramContent.card3.title}
              </motion.h1>
            )}

            {/* Content left - description - card 2  */}
            {ProgramContent.card3.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="leading-relaxed text-gray-500 text-justify max-w-xl text-lg mb-10 lg:mb-16"
              >
                {ProgramContent.card3.description}
              </motion.p>
            )}

            {/* btn link - card 2 */}

            {ProgramContent.card3.btn.label && (
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
                  href={ProgramContent.card3.btn.href}
                  alt="Team Page redirection"
                  className="transistion-all duration-300 ease-in-out text-[14px] 
                    tracking-[2px] font-bold uppercase bg-transparent py-4 px-5
                    rounded inline-block hover:text-orange-400  hover:border-orange-400 border text-white hover:shadow-2xl mb-10"
                >
                  {ProgramContent.card3.btn.label}
                </Link>
              </motion.button>
            )}
          </div>

          {/* Image right - card 2*/}

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
              className="z-[2] relative bg-cover bg-center"
            >
              <Image
                src="/images/post4.jpg"
                width={300}
                height={400}
                alt="program image"
                className="rounded-md h-[300px] w-[400px] "
              />
            </motion.div>
          </div>
        </div>
        s
      </div>
    </section>
  )
}

export default CardProgram
