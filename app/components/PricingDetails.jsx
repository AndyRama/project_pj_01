'use client'

import React from 'react'
import { motion } from 'framer-motion'

const PricingDetails = () => {
  const delay = (index) => index * 0.05

  return (
    <section className="mt-10 mb-20">
      <div className="container px-4 mx-auto">
        <h3 className="text-orange-400 text-xl text-center">
          Ce que tu obtiens
        </h3>
        <h2 className="text-white text-3xl text-center mb-20">
          Détails de mon offre
        </h2>
      </div>
    </section>
  )
}

export default PricingDetails
