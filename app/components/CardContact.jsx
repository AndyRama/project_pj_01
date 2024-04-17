'use client'

import React from 'react'

const CardContactContent = {
  heading: {
    title: 'When creativity meets developement web',
    subTitle: 'How it work',
    description:
      "Nous nous spécialisons dans la création d'applications web sur-mesure, destinées à optimiser le quotidien de nos clients.",
  },
  step: [
    {
      title: 'Project Initiation',
      description:
        " Le gain de temps, l'efficacité et la personnalisation sont les maîtres mots !",
      address: '5 Washington Square, NewYork, USA',
      phone: '+1 212 425 8617',
      email: 'unlcoaching@contact.com',
    },
    {
      title: 'Conception design',
      map: 'url',
    },
    {
      title: 'Pricing',
      description:
        " Le gain de temps, l'efficacité et la personnalisation sont les maîtres mots !",
      btn: {
        href: '#',
        label: 'Learn More',
      },
    },
  ],
}

const CardContact = ({ className }) => {
  return (
    <>
      <section className={` ${className}`}>
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 -mb-72 lg:w-10/12 mx-auto"></div>
        </div>
      </section>
    </>
  )
}

export default CardContact
