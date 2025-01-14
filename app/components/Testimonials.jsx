'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import user1 from './../../public/images/user1.jpg'
import user2 from './../../public/images/user2.jpg'
import user3 from './../../public/images/user3.jpg'
import user4 from './../../public/images/user4.jpg'
import user5 from './../../public/images/user5.jpg'
import user6 from './../../public/images/user6.jpg'
import user7 from './../../public/images/jeremy.jpg'

const testimonials = [
  {
    user: 'Emlie Prevot',
    company: 'Stellar Solutions',
    image: user1,
    text: "La formation de Jeremy m'a vraiment aidé à progresser. Son approche pédagogique est claire et ses conseils sont pratiques et applicables immédiatement.",
  },
  {
    user: 'Jane Smith',
    company: 'Blue Horizon Technologies',
    image: user2,
    text: 'Je suis très satisfaite de la formation en ligne de Jeremy  Son expertise et sa manière de transmettre les connaissances ont fait toute la différence pour moi.',
  },
  {
    user: 'David Johnson',
    company: 'Quantum Innovations',
    image: user3,
    text: 'Travailler avec Jeremy a été une expérience enrichissante. Son attention aux détails et son engagement envers notre succès sont remarquables. Je recommande vivement sa formation.',
  },
]

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(4)

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4)
  }

  return (
    <div className="tracking-wide mb-48">
      <h3 className="text-orange-500 text-xl text-center">
        Retour de ma formation
      </h3>
      <h2 className="text-white text-3xl text-center mb-10">
        Ce qu&apos;ils pensent de mes services !
      </h2>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-0 lg:px-16 max-w-7xl">
        {testimonials.slice(0, visibleCount).map((testimonial, index) => (
          <div key={index} className="flex justify-center">
            <div className="text-white bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin w-[280px]">
              <span className="text-[50px] leading-[0] relative text-orange-400 block">
                &ldquo;
              </span>
              <p className="text-center">{testimonial.text}</p>
              <span className="text-[50px] rotate-180 leading-[0] text-orange-400 block">
                &rdquo;
              </span>
              <div className="flex mt-8 items-start">
                <Image
                  className="w-12 h-12 mr-6 rounded-full"
                  src={testimonial.image}
                  alt="profile"
                  width={200}
                  height={200}
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-orange-500">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <br />
        {visibleCount < testimonials.length && (
          <div className="text-left px-0 md:px-0">
            <button
              onClick={loadMore}
              className="bg-gradient-to-r from-orange-500 to-orange-800 text-white px-4 py-3 mr-8 lg:mr-24 rounded-md text-center"
            >
              + de témoignages
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Testimonials
