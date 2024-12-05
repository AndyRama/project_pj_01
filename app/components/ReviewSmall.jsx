'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ReviewSmall = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
      className="flex items-center text-white space-x-4 rounded-lg mt-8"
    >
      {/* Avatar Section */}
      <div className="flex -space-x-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: {
                delay: i * 0.1, // Ajout d'un décalage pour chaque avatar
                duration: 0.3,
              },
            }}
            viewport={{ once: true }}
          >
            <Image
              src={`/images/user${i}.jpg`}
              width={40}
              height={40}
              alt={`avatar${i}`}
              className="rounded-full border-2 border-black"
            />
          </motion.div>
        ))}
      </div>

      {/* Review Details */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        }}
        viewport={{ once: true }}
        className="ml-4 flex flex-col"
      >
        <div className="flex items-center">
          {Array(5)
            .fill()
            .map((_, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: index * 0.1, duration: 0.3 },
                }}
                viewport={{ once: true }}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              >
                ⭐
              </motion.span>
            ))}
        </div>
        <p className="text-md mt-3">
          3500+ followers <br /> sur Instagram
        </p>
      </motion.div>
    </motion.div>
  )
}

export default ReviewSmall
