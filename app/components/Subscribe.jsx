'use client'
import React from 'react'
import Image from 'next/image'
import IconLogo from './../asset/Icons/logo.svg'
import { motion } from 'framer-motion'
import { BiSolidPaperPlane } from 'react-icons/bi'

const subscribeContent = {
  heading: {
    title: 'Ne manquez jamais une revue',
    subtitle: 'Rejoinds la communauté',
    description:
      'Je partage de nombreux conseils et pratique dans mes articles !',
  },
  form: {
    placeholder: 'Entrer ton Email',
  },
}

const Subscribe = ({ className }) => {
  return (
    <section className={`${className}`}>
      <div className="container px-4 mx-auto">
        {/* Logo - content left*/}
        <div className=" flex justify-center items-center pb-10 ">
          <Image
            src={IconLogo}
            weight={150}
            height={150}
            alt="logo"
            className="bg-black rounded-full"
          />
        </div>
        <div className=" flex justify-center items-center">
          <div className="w-8/12 flex gap-0">
            <div className="text-center w-screen max-w-md mx-auto mb-10">
              {subscribeContent.heading.subtitle && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-[12.5px] mb-5  text-white flex justify-center "
                >
                  {subscribeContent.heading.subtitle}
                </motion.div>
              )}

              {subscribeContent.heading.title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.3, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-4xl text-white"
                >
                  {subscribeContent.heading.title}
                </motion.h2>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto justify-center">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="flex relative w-auto max-w-xl mx-auto justify-center gap-5 items-center"
          >
            <input
              className="appearance-none bg-white py-4 px-7 w-auto lg:w-screen
                !pr-16 mwx-w-md shadow-md rounded-md outline outline-none"
              placeholder={subscribeContent.form.placeholder}
              required
              type="email"
            />
            <button
              type="submit"
              className="apperance-none absolute top-1 right-1
             bg-[#fb9e25] text-[#1D1D1D] shadow-md w-12 h-12 rounded-full flex items-center justify-center"
              alt="submit"
              aria-label="Submit Form"
            >
              <BiSolidPaperPlane />
            </button>
          </motion.form>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.9, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="w-auto max-w-md mx-auto mt-10 text-center text-white
              text-opacity-60 "
          >
            {subscribeContent.heading.description}
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
