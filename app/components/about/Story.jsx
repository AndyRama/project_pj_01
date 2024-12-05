'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import img1 from '../../../public/images/story1.png'
import img2 from '../../../public/images/story2.jpg'
import img3 from '../../../public/images/story3.jpg'
import img4 from '../../../public/images/story4.jpg'
import img5 from '../../../public/images/story5.jpg'
import img6 from '../../../public/images/story6.jpg'
import img7 from '../../../public/images/story7.jpg'
import img8 from '../../../public/images/story8.jpg'
import img9 from '../../../public/images/story9.jpg'
// import img10 from '../../../public/images/story21.jpg'
import img11 from '../../../public/images/story11.jpg'
import img12 from '../../../public/images/story12.jpg'
import img13 from '../../../public/images/story13.jpg'
import img14 from '../../../public/images/story14.jpg'
import img15 from '../../../public/images/story15.jpg'
import img16 from '../../../public/images/story16.jpg'

const storyContent = {
  column1: {
    imgs: [
      {
        img: img1,
        alt: 'Team',
        width: 1188,
        height: 1413,
        tailwindClass: 'h-56 lg:h-96',
      },
      {
        img: img2,
        alt: 'Woman making a plan',
        width: 1188,
        height: 1413,
      },
      {
        img: img3,
        alt: 'Woman making a plan',
        width: 1188,
        height: 1413,
      },
      {
        img: img11,
        alt: 'Woman making a plan',
        width: 1188,
        height: 1413,
      },
      {
        img: img14,
        alt: 'Woman making a plan',
        width: 1188,
        height: 1413,
      },      
    ],
  },
  column2: {
    imgs: [
      {
        img: img4,
        alt: 'White curvy building',
        width: 1188,
        height: 1413,
        tailwindClass: 'h-56 lg:h-96',
      },
      {
        img: img5,
        alt: 'White curvy building',
        width: 1188,
        height: 1413,
        tailwindClass: 'h-56 lg:h-96',
      },
      {
        img: img6,
        alt: 'White curvy building',
        width: 1188,
        height: 1413,
        tailwindClass: 'h-56 lg:h-96',
      },
      {
        img: img7,
        alt: 'Team metting',
        width: 1188,
        height: 1413,
        tailwindClass: 'h-56 lg:h-96',
      },
      {
        img: img12,
        alt: 'White curvy building',
        width: 1188,
        height: 1413,
        tailwindClass: 'h-56 lg:h-96',
      },
      {
        img: img15,
        alt: 'White curvy building',
        width: 1188,
        height: 1413,
        tailwindClass: 'h-56 lg:h-96',
      },
    ],
  },
  column3: {
    imgs: [
      {
        img: img8,
        alt: 'Man writting a plan',
        width: 1188,
        height: 1413,
        tailwindClass: 'mt-20',
      },
      {
        img: img9,
        alt: 'Production',
        width: 1188,
        height: 1413,
      },
      {
        img: img13,
        alt: 'Man writting a plan',
        width: 1188,
        height: 1413,
        tailwindClass: 'mt-20',
      },
      {
        img: img16,
        alt: 'Production',
        width: 1188,
        height: 1413,
      },
    ],
  },

  storyText: {
    heading: 'Chère communauté,',
    p1: "Je tiens à exprimer ma profonde gratitude pour votre soutien continu et votre engagement envers notre programme de formation en ligne. Vos retours positifs et votre enthousiasme sont une source d'inspiration constante pour moi. Voir vos progrès et savoir que ma formation vous aide à atteindre vos objectifs me remplit de fierté et de satisfaction. Votre réussite est ma plus grande récompense, et je suis honoré de faire partie de votre parcours.",
    p2: "N'hésitez pas à partager vos expériences et vos réalisations avec moi et avec le reste de la communauté. Ensemble, nous pouvons continuer à apprendre, à grandir et à nous surpasser. Merci encore pour votre confiance et votre soutien. J'ai hâte de continuer à travailler avec vous et à célébrer vos succès futurs.",
    signature: '/images/Bill_Smith_Signature.svg',
    name: 'Jeremy Prat |',
    roleTitle: 'Coach Sportif',
  },
}

const Story = ({ className }) => {
  return (
    <section>
      <div className="container px-4 mx-auto mt-32">
        <div className="md:flex w-full md:w-10/12 mx-auto items-stretch md:gap-7 ">
          <div className="md:w-4/12 self-center space-y-7 mb-7 md:mb-0 ">
            {storyContent.column1.imgs.map((item, index) => {
              index *= 0.5
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    className={`${item.tailwindClass ? item.tailwindClass : ''}
                      !max-w-full object-cover object-center`}
                  />
                </motion.div>
              )
            })}
          </div>

          <div className="md:w-4/12 space-y-7 mb-7 md:mb-0">
            {storyContent.column2.imgs.map((item, index) => {
              index *= 0.5
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    className={`${item.tailwindClass ? item.tailwindClass : ''}
                      !max-w-full object-cover object-center`}
                  />
                </motion.div>
              )
            })}
          </div>

          <div className="md:w-4/12 self-center space-y-7 mb-7 md:mb-0">
            {storyContent.column3.imgs.map((item, index) => {
              index *= 0.5
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    className={`${item.tailwindClass ? item.tailwindClass : ''}
                      !max-w-full object-cover object-center`}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="lg:flex flex-col mt-32 text-left w-full lg:w-6/12 mx-auto"
        >
          {storyContent.storyText.heading && (
            <h2 className="text-2xl md:text-3xl text-white mb-5">
              {storyContent.storyText.heading}
            </h2>
          )}

          {storyContent.storyText.p1 && (
            <p className="leading-relaxed text-white mb-7">
              {storyContent.storyText.p1}
            </p>
          )}

          {storyContent.storyText.p2 && (
            <p className="leading-relaxed text-white mb-7">
              {storyContent.storyText.p2}
            </p>
          )}

          <p>
            <Image
              src={storyContent.storyText.signature}
              alt={storyContent.storyText.name}
              width={338}
              height={113}
              className="w-48 block mb-2"
            />
            <strong className="block mb-2 text-white font-medium">
              {storyContent.storyText.name + ' '}
              <span className="text-orange-500">
                {storyContent.storyText.roleTitle}
              </span>
            </strong>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Story
