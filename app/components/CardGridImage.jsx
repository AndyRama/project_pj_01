'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const cards = [
  {
    title: '#Arcachon #Team #Event',
    years: '#2023',
    image: '/images/groupArcachon.jpg',
  },
  {
    title: '#Compétition #Fr #Fitness',
    years: '#2024',
    image: '/images/fitnessFrance.jpg',
  },
  {
    title: '#Training #Remise #en #forme',
    years: '#2023',
    image: '/images/reducation.jpg',
  },
  {
    title: '#Concours #Prépa #Jeremy P.',
    years: '#2024',
    image: '/images/coaching.jpg',
  },
]

const CardImage = ({ card, index }) => {
  const delay = index * 0.05

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay,
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
      className="bg-transparent relative overflow-hidden group rounded"
    >
      <Image
        src={card.image}
        alt={card.title}
        width={400}
        height={400}
        className="object-cover object-center h-[300px] duration-300
            transition-all ease-in-out group-hover:scale-[1.1]"
      />
      <div>
        <p className=" uppercase text-[13px] mt-5 text-left tracking-[1px] text-orange-500 font-bold">
          {card.title} {card.years}
        </p>
      </div>
    </motion.div>
  )
}

const CardGridImage = ({ className }) => {
  return (
    <section className={`${className}`}>
      <div className="container px-4 mx-auto rounded-md ">
        <div className="py-16 mt-[-18rem] md:mt-0 md:flex justify-center mb-2 ">
          <div
            className="grid grid-cols-1 md:grid-cols-2
             lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full lg:w-10/12 
             mx-auto mt-10 text-gray-500 "
          >
            {cards.slice(0, 4).map((card, index) => (
              <CardImage key={index} index={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardGridImage
