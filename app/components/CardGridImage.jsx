'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const cards = [
  {
    title: '#Archachon #Team #Vélo #Event',
    years: '#2023',
    image: '/images/jeremy.jpg',
  },
  {
    title: '#Compétition #Fitness #France',
    years: '#2024',
    image: '/images/jeremy2.jpg',
  },
  {
    title: '#Training #Remise#en#forme',
    years: '#2023',
    image: '/images/jeremy3.jpg',
  },
  {
    title: '#Concours #Préparation #Jeremy Prat',
    years: '#2023',
    image: '/images/jeremy4.jpg',
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
      className="bg-transparent relative overflow-hidden group rounded "
    >
      <Image
        src={card.image}
        alt={card.title}
        width={1064}
        height={544}
        className="object-cover object-center h-[200px] duration-300
            transition-all ease-in-out group-hover:scale-[1.1]"
      />
      <div className="p-6">
        <p className="mb-2 uppercase text-[12px] text-boldtracking-[1px] text-orange-400">
          {card.title} {card.years}
        </p>
      </div>
    </motion.div>
  )
}

const CardGridImage = ({ className }) => {
  return (
    <section className={`${className}`}>
      <div className="container px-4 mx-auto bg-[#1d1d1d] rounded-md ">
        <div className=" py-16 lg:flex justify-center mb-2 ">
          <div
            className="grid grid-cols-1 md:grid-cols-2
             lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full lg:w-10/12 
             mx-auto mt-10 text-gray-500"
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
