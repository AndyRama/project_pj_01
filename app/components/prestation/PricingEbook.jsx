'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const EbookOptions = [
  {
    title: 'E-Book',
    subtitle: 'Nutrition & Alimentation',
    price: 'Free',
    btn: {
      href: './images/E-bookFree.pdf',
      label: 'Télécharger',
    },
    features: [
      'Pack adapté aux débutants en musculation.',
      'Programme de musculation personnalisé en fonction de tes objectifs.',
      'Plan alimentaire adapté à tes besoins',
      'Accompagnement sur les divers TCA ou problématiques de santé.',
      'Bilan mensuel photo + mensuration avec un suivi plus approfondi',
      'Communication WhatsApp & Email + visio ou call chaque mois',
    ],
  },
  {
    title: 'E-Book',
    subtitle: 'La Mental',
    price: 'Free',
    btn: {
      href: '#',
      label: 'Télécharger',
    },
    features: [
      'Pack adapté aux débutants en musculation.',
      'Programme de musculation personnalisé en fonction de tes objectifs.',
      'Plan alimentaire adapté à tes besoins',
      'Accompagnement sur les divers TCA ou problématiques de santé.',
      'Bilan mensuel photo + mensuration avec un suivi plus approfondi',
      'Communication WhatsApp & Email + visio ou call chaque mois',
    ],
  },
  {
    title: 'E-Book1',
    subtitle: 'La Mental',
    price: 'Free',
    btn: {
      href: '#',
      label: 'Télécharger',
    },
    features: [
      'Pack adapté aux débutants en musculation.',
      'Programme de musculation personnalisé en fonction de tes objectifs.',
      'Plan alimentaire adapté à tes besoins',
      'Accompagnement sur les divers TCA ou problématiques de santé.',
      'Bilan mensuel photo + mensuration avec un suivi plus approfondi',
      'Communication WhatsApp & Email + visio ou call chaque mois',
    ],
  },
  {
    title: 'E-Book2',
    subtitle: 'La Mental',
    price: 'Free',
    btn: {
      href: '#',
      label: 'Télécharger',
    },
    features: [
      'Pack adapté aux débutants en musculation.',
      'Programme de musculation personnalisé en fonction de tes objectifs.',
      'Plan alimentaire adapté à tes besoins',
      'Accompagnement sur les divers TCA ou problématiques de santé.',
      'Bilan mensuel photo + mensuration avec un suivi plus approfondi',
      'Communication WhatsApp & Email + visio ou call chaque mois',
    ],
  },
  {
    title: 'E-Book3',
    subtitle: 'La Mental',
    price: 'Free',
    btn: {
      href: '#',
      label: 'Télécharger',
    },
    features: [
      'Pack adapté aux débutants en musculation.',
      'Programme de musculation personnalisé en fonction de tes objectifs.',
      'Plan alimentaire adapté à tes besoins',
      'Accompagnement sur les divers TCA ou problématiques de santé.',
      'Bilan mensuel photo + mensuration avec un suivi plus approfondi',
      'Communication WhatsApp & Email + visio ou call chaque mois',
    ],
  },
  {
    title: 'E-Book4',
    subtitle: 'La Mental',
    price: 'Free',
    btn: {
      href: '#',
      label: 'Télécharger',
    },
    features: [
      'Pack adapté aux débutants en musculation.',
      'Programme de musculation personnalisé en fonction de tes objectifs.',
      'Plan alimentaire adapté à tes besoins',
      'Accompagnement sur les divers TCA ou problématiques de santé.',
      'Bilan mensuel photo + mensuration avec un suivi plus approfondi',
      'Communication WhatsApp & Email + visio ou call chaque mois',
    ],
  },
]

const PricingEbook = () => {
  const [visibleCount, setVisibleCount] = useState(2)
  const delay = (index) => index * 0.05

  const handleShowMore = () => {
    setVisibleCount(EbookOptions.length)
  }

  return (
    <section className="mt-10 mb-10">
      <h3 className="text-orange-500 text-xl text-center">Autres contenus</h3>
      <h2
        className="text-white text-2xl md:text-4xl text-center mb-20"
        id="E-Books"
      >
        Les E-Books
      </h2>
      <div className="container px-4 md:px-16 mx-auto pb-32">
        {/* Main Card Pricing - content  */}
        <div className="flex flex-wrap">
          {EbookOptions.slice(0, visibleCount).map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay(index), duration: 0.5 }}
              className="w-[250px] lg:w-1/2 p-2"
            >
              <div className="p-10 bg-[#2F2E2E] rounded-md">
                {/* Card Pricing - Header - Title */}
                <p className="text-4xl mb-1 text-center text-white">
                  {option.title}
                </p>
                {/* Card Pricing - Header - subTitle */}
                <p className="text-xl mb-6 text-orange-500 text-center">
                  {option.subtitle}
                </p>
                <hr />

                {/* Card Pricing - Header - Price  */}
                <p className="mt-2 mb-1 text-center">
                  <span className="text-4xl text-orange-500 mt-6 mr-2">
                    {option.price}
                  </span>
                </p>

                {/* Card Pricing - btn - action */}
                <motion.a
                  href={option.btn.href}
                  target="blank"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: delay(EbookOptions.length),
                    duration: 0.5,
                  }}
                  className="inline-flex justify-center items-center text-black text-center 
                  w-full h-12 p-5 mt-6 tracking-tight text-xl bg-gradient-to-r from-orange-500 to-orange-800 hover:bg-transparent 
                  hover:text-white rounded-md transition 
                  duration-200"
                >
                  {option.btn.label}
                </motion.a>

                {/* Card Pricing - main - contents */}
                <ul>
                  {option.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: delay(index), duration: 0.5 }}
                      className="mt-8 flex items-center text-orange-500"
                    >
                      •<span className="ml-2 text-white">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        {visibleCount < EbookOptions.length && (
          <div className="text-right mt-10 hidden ">
            <button
              onClick={handleShowMore}
              className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-800 text-white rounded-md hover:bg-orange-700 transition duration-200"
            >
              Voir plus
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default PricingEbook
