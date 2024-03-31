'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { BiHardHat, BiPaintRoll, BiNote, BiLayer } from 'react-icons/bi'

const PricingContentDetails = {
  features: [
    {
      icon: BiHardHat,
      title: 'Transformation Physique',
      description:
        'Prise de masse musculaire : Si votre objectif est de sculpter et tonifier votre corps, gagner en volume, la méthode adaptée est la prise de masse musculaire. Elle repose sur un entrainement adapté et rigoureux et également sur une alimentation saine, variée, riche en protéines (animales et/ou végétales) et en glucides. Pour cela, je vous propose des programmes musculation et alimentaire adaptés à vos objectifs et à votre niveau. ',
    },
    {
      icon: BiNote,
      title: 'Préparation aux Compétitions',
      description:
        'Coaching spécialisé pour les athlètes : si la compétition, le dépassement de soi et la discipline sont essentiels à votre vie et à votre bien être, se fixer des objectifs concrets est un moyen efficace de les atteindre. Je vous propose un suivi musculation et alimentaire personnalisés pour relever les défis que vous vous fixerez. En tant qu’athlète, je sais également que le mentale est mis à rude épreuve lors des préparations. Je serais également présent pour vous écouter et vous rebooster lorsque cela sera nécessaire. ',
    },
    {
      icon: BiLayer,
      title: "Maintien de l'Activité Physique",
      description:
        'Perte de poids :  Si votre objectif est la perte de masse grasse, la méthode adaptée repose sur une alimentation saine et raisonnée et sur un entrainement rigoureux. L’objectif étant certes la perte de poids mais surtout que celle-ci s’inscrive dans la durée. Pour cela il est nécessaire d’avoir un suivi régulier et personnalisé et surtout d’avancer main dans la main avec moi. Le mental jouant un très grand rôle, vous devez garder en tête que je suis également présent pour être à votre écoute. Je suis convaincu que pour réussir, notre relation doit être basée sur la confiance et la transparence.',
    },
    {
      icon: BiPaintRoll,
      title: 'Support pour TCA',
      description:
        'Coaching spécialisé pour les candidats aux concours de police, pompier, armée, gendarmerie. La réussite de ses concours et des carrières requiert une très bonne santé physique et mentale. En tant qu’ancien militaire je connais parfaitement les facultés requises pour réussir ses concours et je peux vous apporter un suivi personnalisé et efficace. ',
    },
  ],
}

const PricingDetails = ({ className }) => {
  return (
    <>
      <section className="pb-20">
        <div className="container px-4 mx-auto">
          <h3 className="text-orange-400 text-xl text-center">
            Ce que tu obtiens
          </h3>
          <h2 className="text-white text-3xl text-center mb-20">
            Détails de mon offre
          </h2>
          <div className="lg:flex justify-center">
            <div className="w-full lf:w-8/12 flex gap-0 items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {PricingContentDetails.features.map((feature, index) => {
                  index *= 0.2
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: index,
                          duration: 0.5,
                        },
                      }}
                      viewport={{ once: true }}
                      key={feature.title}
                      className="relative z-40 flex gap-3
                      items-start "
                    >
                      <div>
                        <span className="text-3xl text-orange-400">
                          <feature.icon />
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg mb-4 text-white">
                          {feature.title}
                        </h3>
                        <p
                          className="leading-relaxed text-[15px] text-white
                          text-opacity-75 mb-7 text-justify"
                        >
                          <span>• </span>
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PricingDetails
