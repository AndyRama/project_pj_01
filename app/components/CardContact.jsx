'use client'
import React from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'
import CardInfo from '@/app/components/CardInfo'
import CardMap from 'app/components/CardMap'
import CardPricing from 'app/components/CardPricing'

const CardContact = ({ className }) => (
  <section className={` ${className}`}>
    <div className="container mx-auto mt-[-30] lg:mt-[-50px]">
      <div className="flex justify-around">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-auto">
          <CardInfo className=" w-12/12 lg:w-5/12 px-0 lg:px-4 xl:px-16 mb-10" />
          <CardMap className="w-12/12 lg:w-5/12 px-0 lg:px-4 xl:px-16 mb-10" />
          <CardPricing className="w-12/12 lg:w-5/12 px-0 lg:px-4 xl:px-16 mb-10" />
        </div>
      </div>
    </div>
  </section>
)

export default CardContact
