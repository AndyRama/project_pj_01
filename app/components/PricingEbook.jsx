'use client'

import React from 'react'
import { motion } from 'framer-motion'

const EbookOptions = [
  {
    title: 'E-Book',
    subtitle: 'Nutrition & Alimentation',
    price: 'Free',
    features: [
      'Pack adapté aux débutants en musculation.',
      'Programme de musculation personalisé en fonction de tes objectifs.',
      'Plan alimentaire adapté à tes besoins',
      'Accompagnement sur les divers TCA ou problématique de santé.',
      'Bilan mensuel photo + mensuration avec un suivi plus approfondi',
      'Communication whatsApp & Email + visio ou call chaque mois',
    ],
  },
  {
    title: 'E-Book',
    subtitle: 'la Mental',
    price: '15€',
    features: [
      'Pack adapté aux débutants en musculation.',
      'Programme de musculation personalisé en fonction de tes objectifs.',
      'Plan alimentaire adapté à tes besoins',
      'Accompagnement sur les divers TCA ou problématique de santé.',
      'Bilan mensuel photo + mensuration avec un suivi plus approfondi',
      'Communication whatsApp & Email + visio ou call chaque mois',
    ],
  },
]

const PricingEbook = () => {
  const delay = (index) => index * 0.05

  return (
    <section className="mt-10 mb-20">
      <h2 className="text-white text-4xl text-center mb-20" id="E-Books">
        Les E-Books
      </h2>
      <div className="container px-4 mx-auto">
        {/* Main Card Pricing - content  */}
        <div className="flex flex-wrap">
          {EbookOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay(index), duration: 0.5 }}
              className="w-full sm:w-1/2 lg:w-1/3 p-2"
            >
              <div className="p-10 border border-white rounded-xl">
                {/* Card Pricing - Header - Title */}
                <p className="text-4xl mb-1 text-center text-white">
                  {option.title}
                </p>
                {/* Card Pricing - Header - subTitle */}
                <p className="text-xl mb-6 text-orange-400 text-center">
                  {option.subtitle}
                </p>
                {/* Card Pricing - Header - Price  */}
                <p className="mb-1 text-center">
                  <span className="text-4xl text-white mt-6 mr-2">
                    {option.price}
                  </span>
                </p>
                {/* Card Pricing - main - contents */}
                <ul>
                  {option.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: delay(index), duration: 0.5 }}
                      className="mt-8 flex items-center text-orange-400"
                    >
                      •<span className="ml-2 text-white">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.a
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: delay(EbookOptions.length),
                    duration: 0.5,
                  }}
                  className="inline-flex justify-center items-center text-white text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-400 border border-orange-400 rounded-lg transition duration-200"
                >
                  Commander
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingEbook
