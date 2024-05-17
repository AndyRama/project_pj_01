'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import {
  BiHardHat,
  BiPaintRoll,
  BiNote,
  BiBulb,
  BiLayer,
  BiOutline,
} from 'react-icons/bi'

const CardContactContent = {
  heading: {
    title: '',
    subTitle: '',
    description: '',
  },
  step: [
    {
      icon: 'BiHardHat',
      title: 'Me contacter',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repellat nisi tempore nam perspiciatis ullam architecto dolorem fuga.',
      address: '5 Washington Square, New York, USA',
      description1: '',
      phone: '+1 212 425 8617',
      description2: '',
      email: 'information@office.com',
      btn: {
        href: '',
        label: '',
      },
    },
    {
      icon: 'BiPaintRoll',
      title: 'How can you find us?',
      map: "https://www.google.com/maps/embed/v1/place?key=AIzaSyBwOWZ_C1sw6lYJhxYk_LJJCI2uM9GW8IA&q=220 avenue de l'argonne,merignac,bordeaux,france ",
      btn: {
        href: '',
        label: '',
      },
    },
    {
      icon: 'BiNote',
      title: 'Pricing',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ipsum consectetur repellat, corporis eaque corrupti in dolores reprehenderit, enim consequatur dolore, nam praesentium sint veniam ad recusandae ab amet impedit.',
      btn: {
        href: '/prestations',
        label: "plus d'information",
      },
    },
  ],
}

const CardContact = ({ className }) => (
  <section className={` ${className}`}>
    <div className="container mx-auto">
      <div className="lg:flex justify-center mb-[-40px]">
        <div className="w-full lg:w-8/12 lg:flex gap-0 items-center">
          <div className="lg:w-7/12 mb-5 lg:mb-0">
            {CardContactContent.heading.subTitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="uppercase tracking-[3px] text-sm mb-5 inline-block text-gray-500"
              >
                {CardContactContent.heading.subTitle}
              </motion.span>
            )}
            {CardContactContent.heading.title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-2xl lg:text-4xl"
              >
                {CardContactContent.heading.title}
              </motion.h2>
            )}
          </div>
          <div className="lg:w-5/12 self-end">
            {CardContactContent.heading.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-gray-500"
              >
                {CardContactContent.heading.description}
              </motion.p>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:w-10/12 mx-auto">
        {CardContactContent.step.map((step, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.2, duration: 0.5 },
            }}
            viewport={{ once: true }}
            key={step.title}
            whileHover={{ y: -10, transition: { duration: 0.1 } }}
            className="group duration-300 pt-10 pl-2 pr-10 bg-[#2F2E2E] relative overflow-hidden hover:shadow-2xl rounded-md"
          >
            <div className="absolute top-10 right-10">
              {/* <span className="text-3xl duration-300 transition-all ease_in_out text-white">
                <step.icon />
              </span> */}
            </div>
            <div className="relative z-40 flex gap-3 items-start mb-[-200px]">
              <div>
                <h3 className="text-[18px] mb-4 duration-300 transition-all ease-in-out text-white">
                  {step.title}
                </h3>

                <p className="leading-relaxed text-[15px] text-gray-500 mb-7 duration-300 transition-all ease-in-out group-hover:text-white">
                  {step.description}
                </p>
                <h3 className="text-[18px] mb-4 duration-300 transition-all ease-in-out text-white">
                  {step.address}
                </h3>
                <p className="leading-relaxed text-[15px] text-gray-500 mb-7 duration-300 transition-all ease-in-out group-hover:text-white">
                  {step.description1}
                </p>
                <h3 className="text-[18px] mb-4 duration-300 transition-all ease-in-out text-white">
                  {step.phone}
                </h3>
                <p className="leading-relaxed text-[15px] text-gray-500 mb-7 duration-300 transition-all ease-in-out group-hover:text-white">
                  {step.description2}
                </p>
                <h3 className="text-[18px] mb-4 duration-300 transition-all ease-in-out text-white">
                  {step.email}
                </h3>
                <Link
                  href={step.btn.href}
                  className="text-[12px] text-orange-400 tracking-[2px] uppercase pb-2 inline-block duration-300 transition-all bg-white-600 ease-in-out relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-orange-600 before:origin-[100%, 50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 hover:before:scale-x-100"
                >
                  {step.btn.label}
                </Link>
                <iframe
                  className="m-0 w-[350px] h-[350px]"
                  src={step.map}
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default CardContact
