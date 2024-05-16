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

const programs = [
  {
    title: 'Pack 1 Musculation | Homme Femme',
    subTitle: 'Personnel',
    description:
      'Coaching spécialisé pour les athlètes : si la compétition, le dépassement de soi et la discipline sont essentiels à votre vie et à votre bien-être, se fixer des objectifs concrets est un moyen efficace de les atteindre. Je vous propose un suivi musculation et alimentaire personnalisés pour relever les défis que vous vous fixerez.',
    mount: '3 mois (minimum)',
    time: '8h/semaine',
    btn: {
      href: '/prestations/#pack',
      label: 'Ok, je change de vie !',
    },
    image: '/images/post3.jpg',
  },
  {
    title: 'Pack 2 Musculation | Homme Femme',
    subTitle: 'Personnel',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus pariatur soluta corrupti quisquam illo ducimus adipisci recusandae possimus tempora esse, aspernatur repudiandae cupiditate ipsum enim, quibusdam porro odio sit. Quis!',
    mount: '3 mois (minimum)',
    time: '8h/semaine',
    btn: {
      href: '/prestations/#pack',
      label: 'Ok, je change de vie !',
    },
    image: '/images/post5.jpg',
  },
  {
    title: 'Pack 3 Musculation | Homme Femme',
    subTitle: 'Personnel',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus pariatur soluta corrupti quisquam illo ducimus adipisci recusandae possimus tempora esse, aspernatur repudiandae cupiditate ipsum enim, quibusdam porro odio sit. Quis!',
    mount: '3 mois (minimum)',
    time: '8h/semaine',
    btn: {
      href: '/prestations/#pack',
      label: 'Ok, je change de vie !',
    },
    image: '/images/post4.jpg',
  },
]

const CardProgram = ({ className }) => {
  return (
    <section className={`${className}`}>
      <div className="container px-4 md:px-20 mx-auto w-10/12 mb-10">
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
          className="uppercase tracking-[3px] text-sm inline-block text-orange-400"
        >
          {program.heading.subTitle}
        </motion.span>
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
      </div>

      <div className="container px-4 mx-auto">
        {programs.map((program, index) => (
          <div
            key={index}
            className="md:flex justify-between space-x-0 border-b border-gray-500 mb-10"
          >
            <div className="lg:w-8/12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                data-testid="program-title"
                className="text-orange-400 font-bold text:lg md:text-2xl w-auto lg:w-screen max-w-xl mb-2"
              >
                {program.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="leading-relaxed text-white text-justify max-w-xl text-lg mb-10 lg:mb-16"
              >
                {program.description}
              </motion.p>
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
                  href={program.btn.href}
                  alt="prestations page"
                  className="transistion-all duration-300 ease-in-out text-[14px] 
                    tracking-[2px] font-bold uppercase text-white hover:text-orange-400 
                    hover:border-orange-400 bg-transparent py-4 px-5 rounded inline-block 
                    border hover:shadow-2xl mb-10"
                >
                  {program.btn.label}
                </Link>
              </motion.button>
            </div>
            <div className="md:w-6/12 mb-10">
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
                className="z-[1] relative bg-cover bg-center"
              >
                <Image
                  src={program.image}
                  width={300}
                  height={400}
                  alt="program image"
                  className="rounded-md h-[300px] w-[400px] "
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      <div className="transform-gpu blur-3xl">
        <div className="absolute left-0 opacity-50 -z-20 w-64 h-72 bg-gradient-to-tr from-[#e78738] to-[#fb923c]"></div>
      </div>
    </section>
  )
}

export default CardProgram
