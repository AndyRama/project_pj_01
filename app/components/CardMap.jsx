'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { BiHardHat, BiLayer, BiBulb } from 'react-icons/bi'

const CardCategoriesContent = {
  heading: {
    title: '',
    subTitle: '',
    description: '',
  },
  step: [
    {
      title: 'Categories',
      description:
        ' Lorem ipsum dolor sit, amet consecte Mollitia ipsum ectetur repellat ! ',
      title1: 'Alimentation',
      map: '',
      btn: {
        href: '#',
        label: '',
      },
    },
  ],
}

const CardCategory = ({ className }) => {
  return (
    <section className={className}>
      <div className="w-[360px] md:w-[330px] xl:w-[350px] xl:ml-[-16px] md:pl-0">
        {CardCategoriesContent.step.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: index * 0.2,
                duration: 0.5,
              },
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: 0.1 }}
            className="group duration-300 bg-[#2F2E2E] relative overflow-hidden hover:shadow-2xl rounded-md w-auto h-[460px]"
          >
            <div className="px-2 lg:px-4 mt-10 mb-10 relative flex flex-col gap-3 items-start ">
              <span className="text-2xl flex">
                <BiHardHat className="mt-2 mr-2 border-dashed border-2 border-orange-500 rounded-sm text-orange-500 bg-orange-500 bg-opacity-10" />
                <h2 className="text-3xl text-white">Localisation</h2>
              </span>

              <iframe
                className="px-2 w-full h-[350px]"
                src={
                  "https://www.google.com/maps/embed/v1/place?key=AIzaSyBwOWZ_C1sw6lYJhxYk_LJJCI2uM9GW8IA&q=220 avenue de l'argonne,merignac,bordeaux,france "
                }
                allowfullscreen
              ></iframe>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default CardCategory
