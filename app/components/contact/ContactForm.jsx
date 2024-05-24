'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ContactForm = ({ className }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.2,
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
      className={`${className}`}
    >
      <div className="container px-4 mx-auto mt-32">
        <div className="lg:flex items-scretch mb-20">
          {/* Contact - Left - Image */}
          <div className="lg:w-6/12 flex-1">
            <Image
              src="/images/contactModel.png"
              width={1000}
              height={100}
              alt="Image"
              className="object-cover object-center max-w-full h-full "
            />
          </div>
          <div className="lg:w-6/12 flex-1">
            <form className="p-8 bg-[#2F2E2E] h-full">
              {/* Contact - Rigth - Title */}
              <h2 className="text-white mb-4 text-3xl">Get in Touch</h2>
              <p className="text-white mb-6">
                Do you have any question or feedback to share with me ? Please
                use the form below to get in touch.
              </p>
              <div className="flex space-x-5">
                {/* Contact - Rigth - Form - FirstName */}
                <div className="lg:w-6/12 mb-6">
                  <label
                    htmlFor="firstname"
                    className="mb-2 block text-white text-base"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="rounded-0 appearance-none !text-base p-2 outline-1mt-1
                  px-3 py-2 shadow-sm border-slate-300 placeholder-slate-400
                  focus:outline-none focus:border-orange-600 focus:ring-orange-600
                  block w-full sm:text-sm focus:ring-1 outline-gray-300"
                    id="firstname"
                  />
                </div>

                {/* Contact - Rigth - Form - LastName */}
                <div className="lg:w-6/12 mb-6">
                  <label
                    htmlFor="lastname"
                    className="mb-2 block text-white text-base"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="rounded-0 appearance-none !text-base p-2 outline-1 mt-1
                  px-3 py-2  border shadow-sm border-slate-300 placeholder-slate-400
                  focus:outline-none focus:border-orange-600 focus:ring-orange-600
                  block w-full sm:text-sm focus:ring-1 outline-gray-300"
                    id="lastname"
                  />
                </div>
              </div>

              {/* Contact - Rigth - Form - Email */}
              <div className="block mb-6">
                <label
                  htmlFor="email"
                  className="mb-2 block text-white text-base"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  className="rounded-0 appearance-none !text-base p-2 outline-1mt-1
                  px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400
                  focus:outline-none focus:border-orange-600 focus:ring-orange-600
                  block w-full sm:text-sm focus:ring-1 outline-gray-300"
                  id="email"
                />
              </div>

              {/* Contact - Rigth - Form - Phone Number */}
              <div className="block mb-6">
                <label
                  htmlFor="phone"
                  className="mb-2 block text-white text-base"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  className="rounded-0 appearance-none !text-base p-2 outline-1mt-1
                px-3 py-2  border shadow-sm border-slate-300 placeholder-slate-400
                focus:outline-none focus:border-orange-600 focus:ring-orange-600
                block w-full sm:text-sm focus:ring-1 outline-gray-300"
                  id="phone"
                />
              </div>

              {/* Contact - Rigth - Form - Message */}
              <div className="block mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-white text-base"
                >
                  Message
                </label>
                <textarea
                  name=""
                  cols="30"
                  rows="7"
                  className="rounded-0 appearance-none !text-base p-2 outline-1mt-1
                px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400
                focus:outline-none focus:border-orange-600 focus:ring-orange-600
                block w-full sm:text-sm focus:ring-1 outline-gray-300"
                  id="message"
                />
              </div>
              {/* Contact - Rigth - Btn - Submit */}
              <div className="block mb-6">
                <input
                  type="submit"
                  className=" cursor-poniter w-full transistion-all duration-300
                  ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase
                  bg-orange-400 py-4 px-5 text-white hover:bg-white
                  hover:text-orange-600 hover:shadow-2xl rounded-md"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="transform-gpu blur-3xl">
        <div className="absolute left-0 bottom-0 opacity-50 -z-50 w-32 h-48 md:w-52 md:h-64 bg-gradient-to-tr from-[#e78738] to-[#fb923c]"></div>{' '}
      </div>
    </motion.section>
  )
}

export default ContactForm
