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
  BiOutLine,
} from 'react-icons/bi'

const HowIWorkContent = {
  heading: {
    title: '',
    subTitle: '',
    description: '',
  },
  step: [
    {
      title: 'Notre contact',
      description:
        ' Join our community today and start your journey towards martial arts mastery!',
      title1: '5 Washington Square, New York, USA',
      description1: ' ',
      title2: '+1 212 425 8617',
      description2: ' ',
      title3: 'information@office.com',
      btn: {
        href: '',
        label: '',
      },
    },
    {
      title: 'How can you find us?',
      description: '',
      btn: {
        href: '',
        label: '',
      },
    },
    {
      title: 'Pricing',
      description:
        'Our website offers a range of services related to martial arts, including online courses, video tutorials, and resources. We have several pricing options to choose from, depending on your needs and budget.',
      btn: {
        href: '/pricing',
        label: 'Learn More',
      },
    },
  ],
}

const HowIWork = ({ className }) => {
  return (
    <>
      {/* Content left - subtitle */}
      <section className={` ${className}`}>
        <div className="container px-4 mx-auto">
          <div className="lg:flex justify-center mb-20 lg:mb-36">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:w-10/12 mx-auto">
              {HowIWorkContent.step.map((step, index) => {
                index *= 0.2
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index,
                        duration: 0.5,
                      },
                    }}
                    viewport={{ once: true }}
                    key={step.title}
                    whileHover={{ y: -10, transition: 0.1 }}
                    className="group duration-300 pt-32 pl-10 pr-10 pb-20 bg-white
                  relative overflow-hidden hover:bg-orange-200 hover: shadow-2xl  rounded-md"
                  >
                    <div className="relative z-40 flex gap-3 items-start">
                      <div
                        className="font-semibold duration-300 transistion-all ease-in-out
                      group-hover:text-white group-hover:text-opacity-50"
                      >
                        {step.number}
                      </div>
                      <div>
                        <h3
                          className="text-[18px] mb-4 duration-300 transistion-all ease-in-out
                        group-hover:text-white"
                        >
                          {step.title}
                        </h3>
                        <p
                          className="leading-relaxed text-[15px] text-gray-500 mb-7
                        duration-300 transistion-all ease-in-out group-hover:text-white"
                        >
                          {step.description}
                        </p>
                        <p
                          className="text-[18px] mb-4 duration-300 transistion-all ease-in-out
                        group-hover:text-white"
                        >
                          {step.title1}
                        </p>
                        <p
                          className="leading-relaxed text-[15px] text-gray-500 mb-7
                        duration-300 transistion-all ease-in-out group-hover:text-white"
                        >
                          {step.description1}
                        </p>
                        <h3
                          className="text-[18px] mb-4 duration-300 transistion-all ease-in-out
                        group-hover:text-white"
                        >
                          {step.title2}
                        </h3>
                        <p
                          className="leading-relaxed text-[15px] text-gray-500 mb-7
                        duration-300 transistion-all ease-in-out group-hover:text-white"
                        >
                          {step.description2}
                        </p>
                        <Link
                          href={step.btn.href}
                          className={`text-[12px] tracking-[2px] uppercase
                          pb-2 inline-block  duration-300 transistion-all bg-white-600
                          ease-in-out relative before:content-['']
                          before:absolute before:bottom-0 before:left-0 before:w-full
                          before:h-[2px] before:bg-orange-600 before:origin-[100%, 50%]
                          before:transistion-all before:duration-300 before:ease-in-out
                          before:scale-x-0 before:scale-y-[1] before:scale-z[1]
                          before:wil-change-transform hover:before:origin-[100%, 0%]
                          hover:before:scale-x-[1] hover:before:scale-y-[1]
                          hover:before:scale-z-[1]`}
                        >
                          {step.btn.label}
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="transform-gpu blur-3xl">
          <div className="absolute right-0  opacity-50 -z-50 w-32 h-48 md:w-52 md:h-64 bg-gradient-to-tr from-[#e78738] to-[#fb923c]"></div>{' '}
        </div>
      </section>

      {/* <section className="pt-64 lg:pt-60 pb-10  bg-orange-300">
        <div className='container px-4 mx-auto'>
          <div className="lg:flex justify-center">
            <div className='w-full lf:w-8/12 flex gap-0 items-center'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {HowIWorkContent.features.map((feature, index) => {
                  index *= 0.2
                  return (
                    <motion.div
                      initial = {{ opacity: 0, y: 30 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: index,
                          duration:0.5,
                        }
                      }}
                      viewport={ { once: true}}
                      key= {feature.title} className='relative z-40 flex gap-3
                      items-start'>
                        <div>
                          <span className='text-3xl text-white'>
                            <feature.icon/>
                          </span>
                        </div>
                        <div>
                          <h3 className='text-lg mb-4 text-white'>
                            {feature.title}
                          </h3>
                          <p className='leading-relaxed text-[15px] text-white
                            text-opacity-75 mb-7'>
                              {feature.description}
                          </p>
                          <p>
                            <Link href={feature.btn.href}
                              className={`text-[12px] tracking-[2px] uppercase
                                pb-2 inline-block  duration-300 transistion-all bg-white-600
                                ease-in-out relative before:content-['']
                                before:absolute before:bottom-0 before:left-0 before:w-full
                                before:h-[2px] before:bg-orange-100 before:origin-[100%, 50%]
                                before:transistion-all before:duration-300 before:ease-in-out
                                before:scale-x-0 before:scale-y-[1] before:scale-z[1]
                                before:wil-change-transform hover:before:origin-[100%, 0%]
                                hover:before:scale-x-[1] hover:before:scale-y-[1]
                                hover:before:scale-z-[1]`}>
                              {feature.btn.label}
                            </Link>
                          </p>
                        </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default HowIWork
