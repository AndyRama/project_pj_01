'use client' // Indique que c'est un composant côté client

import React, { useState } from 'react'
import Image from 'next/image'
import user1 from './../../public/images/user1.jpg'
import user2 from './../../public/images/user2.jpg'
import user3 from './../../public/images/user3.jpg'
import user4 from './../../public/images/user4.jpg'
import user5 from './../../public/images/user5.jpg'
import user6 from './../../public/images/user6.jpg'

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
    text: 'Je suis très satisfaite de la formation en ligne de Jeremy. Son expertise et sa manière de transmettre les connaissances ont fait toute la différence pour moi.',
  },
  {
    user: 'David Johnson',
    company: 'Quantum Innovations',
    image: user3,
    text: 'Travailler avec Jeremy a été une expérience enrichissante. Son attention aux détails et son engagement envers notre succès sont remarquables. Je recommande vivement sa formation.',
  },
  {
    user: 'Ronee Brown',
    company: 'Fusion Dynamics',
    image: user4,
    text: 'La formation en ligne de Jeremy a été un véritable atout pour notre projet. Sa capacité à innover et à proposer des solutions adaptées nous a permis d’atteindre nos objectifs plus rapidement que prévu.',
  },
  {
    user: 'Serena Wilson',
    company: 'Visionary Creations',
    image: user5,
    text: 'Je suis impressionné par le professionnalisme et le dévouement de Jeremy. Sa formation a dépassé nos attentes et a produit des résultats exceptionnels.',
  },
  {
    user: 'Jéremy Prat',
    company: 'Coach Sportif',
    image: user6,
    text: "N'oubliez pas, chaque petit pas compte et contribue à notre succès collectif. Continuons à avancer, main dans la main, vers nos objectifs communs.",
  },
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
    text: 'Je suis très satisfaite de la formation en ligne de Jeremy. Son expertise et sa manière de transmettre les connaissances ont fait toute la différence pour moi.',
  },
  {
    user: 'David Johnson',
    company: 'Quantum Innovations',
    image: user3,
    text: 'Travailler avec Jeremy a été une expérience enrichissante. Son attention aux détails et son engagement envers notre succès sont remarquables. Je recommande vivement sa formation.',
  },
  {
    user: 'Ronee Brown',
    company: 'Fusion Dynamics',
    image: user4,
    text: 'La formation en ligne de Jeremy a été un véritable atout pour notre projet. Sa capacité à innover et à proposer des solutions adaptées nous a permis d’atteindre nos objectifs plus rapidement que prévu.',
  },
  {
    user: 'Serena Wilson',
    company: 'Visionary Creations',
    image: user5,
    text: 'Je suis impressionné par le professionnalisme et le dévouement de Jeremy. Sa formation a dépassé nos attentes et a produit des résultats exceptionnels.',
  },
  {
    user: 'Jéremy Prat',
    company: 'Coach Sportif',
    image: user6,
    text: "N'oubliez pas, chaque petit pas compte et contribue à notre succès collectif. Continuons à avancer, main dans la main, vers nos objectifs communs.",
  },
]

const GridTestimonial = () => {
  const [visibleCount, setVisibleCount] = useState(3) // Par défaut, on en affiche 3
  const [isExpanded, setIsExpanded] = useState(false)

  const loadMore = () => {
    setVisibleCount(testimonials.length) // Affiche tous les témoignages
    setIsExpanded(true) // Affiche le bouton "Voir moins"
  }

  const loadLess = () => {
    setVisibleCount(3) // Réduit à 3 témoignages
    setIsExpanded(false) // Cache le bouton "Voir moins"
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
          <div
            key={index}
            className="bg-neutral-900 rounded-md p-6 border border-neutral-800"
          >
            <span className="text-[50px] leading-[0] relative text-orange-400 block">
              &ldquo;
            </span>
            <p className="text-center text-white mb-4">{testimonial.text}</p>
            <span className="text-[50px] rotate-180 leading-[0] text-orange-400 block">
              &rdquo;
            </span>
            <div className="flex items-start mt-8">
              <Image
                className="w-12 h-12 mr-4 rounded-full"
                src={testimonial.image}
                alt={testimonial.user}
                width={200}
                height={200}
              />
              <div>
                <h6 className="text-white font-bold">{testimonial.user}</h6>
                <span className="text-sm font-normal italic text-orange-500">
                  {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="justify-center mt-6 text-end">
        {!isExpanded && visibleCount < testimonials.length && (
          <button
            onClick={loadMore}
            className="bg-gradient-to-r from-orange-500 to-orange-800 text-white px-4 py-3 mr-8 lg:mr-24 rounded-md text-left"
          >
            + de témoignages
          </button>
        )}

        {isExpanded && (
          <button
            onClick={loadLess}
            className="bg-gradient-to-r from-orange-500 to-orange-800 text-white px-4 py-2 rounded-md"
          >
            Voir moins
          </button>
        )}
      </div>
    </div>
  )
}

export default GridTestimonial
