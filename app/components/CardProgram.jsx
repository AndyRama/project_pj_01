'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const cardProgramContent = {
  heading: {
    title: 'Mes services',
    subTitle: 'Programmes',
  },
  card: {
    img: '/images/jeremy4.jpg',
    pack: 'Pack 1 Musculation | Homme Femme',
    description:
      "Ma passion pour le fitness et la santé globale m'a amené à devenir coach sportif, spécialisé dans les transformations physiques, la perte de poids, la préparation aux compétitions, et plus encore.",
    time: '3',
    btn: {
      href: '',
      label: '',
    },
  },
}

const CardProgram = ({ className }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  return (
    <section className={`${className}]`} ref={ref}>
      <div className="container px-4 mx-auto bg-white ">
        {/* Card Description - Image - Right */}
        <div className="card flex flex-col sm:flex-row md:mx-20 md:rounded-md">
          <Image
            src="/images/jeremy4.jpg"
            className="object-cover !w-full !h-[300] max-w-md object-center rounded-md"
            width={300}
            height={300}
            alt="Card Description Image"
          />
          <div>Top</div>
          <div>Middle</div>
          <div>Footer</div>
        </div>
      </div>
    </section>
  )
}

export default CardProgram
