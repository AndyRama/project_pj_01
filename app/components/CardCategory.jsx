'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { BiHardHat, BiLayer, BiBulb } from 'react-icons/bi'

const HowIWorkContent = {
  heading: {
    title: '',
    subTitle: '',
    description: '',
  },
  step: [
    {
      title: 'Categories',
      description:
        'Join our community today and start your journey towards martial arts mastery!',
      title1: 'Alimentation',
      icon1: '',
      btn1: {
        href: '#',
        label: '',
      },
      title2: 'Fitness',
      icon2: '',
      btn: {
        href: '#',
        label: '',
      },
      title3: 'Complément Alim.',
      icon3: '',
      btn: {
        href: '#',
        label: '',
      },
      title4: 'Compétition',
      icon4: '',
      btn: {
        href: '',
        label: '',
      },
    },
  ],
}

const CardCategory = ({ className }) => {
  return (
    <section className={className}>
      <div className="w-auto mb-10 hidden md:contents">
        {HowIWorkContent.step.map((step, index) => (
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
            className="group duration-300 bg-[#2F2E2E] relative overflow-hidden hover:shadow-2xl rounded-md"
          >
            <div className="relative flex flex-col gap-3 items-start px-4 mt-10 mb-10">
              <span className="text-3xl flex">
                <BiHardHat className="mr-5 border rounded-md text-orange-400" />
                <h2 className="text-2xl text-white">Catégories</h2>
              </span>
              <p className="leading-relaxed text-[15px] text-gray-500 mb-2 duration-300 transition-all ease-in-out group-hover:text-white">
                {step.description}
              </p>

              {['title1', 'title2', 'title3', 'title4'].map((titleKey, idx) => (
                <div key={idx}>
                  <Link href={step.btn.href}>
                    <span className="text-3xl flex">
                      <BiLayer className="mr-5 border rounded-md text-orange-400" />
                      <h3 className="text-xl text-gray-500 hover:text-white pb-2 inline-block duration-300 transition-all bg-white-600 ease-in-out relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-orange-600 before:origin-[100%, 50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z[1] before:will-change-transform hover:before:origin-[100%, 0%] hover:before:scale-x-[1] hover:before:scale-y-[1] hover:before:scale-z-[1]">
                        {step[titleKey]}
                      </h3>
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default CardCategory
